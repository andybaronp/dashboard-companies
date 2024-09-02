'use client'
import { Separator } from '@/components/ui/separator'
import SidebarItem from '../SidebarItem/SidebarItem'
import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from './sidebarRoutes.data'
import { Button } from '@/components/ui/button'
const SidebarRoutes = () => {
  return (
    <div className=' flex flex-col justify-between h-full'>
      <div>
        <div className='p-2 md:p-6'>
          <p className='text-slate-500 mb-2'>General</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />
        <div className='p-2 md:p-6'>
          <div className='p-2 md:p-6'>
            <p className='text-slate-500 mb-2'>Support</p>
            {dataToolsSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
          <Separator />
          <p className='text-slate-500 mb-2'>Support</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div>
        <div className='text-center p-6'>
          <Button variant={'outline'} className='w-full'>
            Upgrade Plan
          </Button>
        </div>
        <Separator />
        <footer className='mt-2 p-2 text-center'>
          {' '}
          2024 All Rights Reserved
        </footer>
      </div>
    </div>
  )
}
export default SidebarRoutes
