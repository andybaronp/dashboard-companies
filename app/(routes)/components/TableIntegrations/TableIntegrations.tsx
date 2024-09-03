'use client'
import { useState } from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TableIntegrationsProps } from './tableIntegrations.type'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import { formatPrice } from '@/lib/formatPrice'

const data: TableIntegrationsProps[] = [
  {
    app: 'Stripe',
    icon: '/images/stripe.png',
    type: 'Finance',
    rate: 10.2,
    profit: 12,
  },
  {
    app: 'Zapier',
    icon: '/images/zapier.png',
    type: 'CRM',
    rate: 20,
    profit: 124.6,
  },
  {
    app: 'Shopify',
    icon: '/images/shopify.png',
    type: 'Marketing',
    rate: 80,
    profit: 879.7,
  },
]

export const columns: ColumnDef<TableIntegrationsProps>[] = [
  {
    accessorKey: 'icon',
    header: 'Logo',
    cell: ({ row }) => (
      <div className='capitalize'>
        {' '}
        <Image src={row.getValue('icon')} alt='logo' width={20} height={20} />
      </div>
    ),
  },
  {
    accessorKey: 'app',
    header: 'Application',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('app')}</div>,
  },
  {
    accessorKey: 'type',
    header: () => <div>Type</div>,
    cell: ({ row }) => <div className='capitalize'>{row.getValue('type')}</div>,
  },
  {
    accessorKey: 'rate',
    header: () => <div className='text-right'>Rate</div>,
    cell: ({ row }) => (
      <div className='text-right font-medium flex gap-1 items-center'>
        <Progress value={row.getValue('rate')} className='h-2' />
      </div>
    ),
  },
  {
    accessorKey: 'profit',
    header: ({ column }) => (
      <Button
        variant={'ghost'}
        className='float-end px-0'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Profit
        <ChevronUp className='ml-2 h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('profit'))
      return <div className='text-right font-medium'>{formatPrice(amount)}</div>
    },
  },
]

export function TableIntegrations() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className='w-full'>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
