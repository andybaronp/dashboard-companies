'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  item: {
    label: string
    icon: LucideIcon
    href: string
  }
  key: string
}

const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props
  const { label, icon: Icon, href } = item

  const pathname = usePathname()

  const activePath = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`,
        pathname === href && 'bg-slate-400/20',
      )}
    >
      <Icon className='h-5 w-5' strokeWidth={1} />
      {label}
    </Link>
  )
}
export default SidebarItem
