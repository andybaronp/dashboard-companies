'use client'

import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react'
import { Company } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'
export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: 'profileImage',
    header: 'Prpfile Image',
    cell: ({ row }) => {
      const image = row.getValue('profileImage')
      return (
        <div className='px-3'>
          <Image
            src={typeof image === 'string' ? image : '/image/company-icon.png'}
            alt='profile image'
            width={40}
            height={40}
            className='h-auto w-auto '
          />
        </div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Company Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'cif',
    header: 'CIF',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'webSite',
    header: 'Web Site',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { id } = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={'ghost'} className='h-4 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <Link href={`/companies/${id}`} className='flex items-center gap-2'>
              <DropdownMenuItem>
                <Pencil className='mr-2 h-4 w-4 ' /> Edit
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
