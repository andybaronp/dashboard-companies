import { LucideIcon } from 'lucide-react'

type CustomIconProps = {
  icon: LucideIcon
}
const CustomIcon = ({ icon: Icon }: CustomIconProps) => {
  return (
    <div className='p-2 bg-slate-400/20 rounded-lg'>
      <Icon strokeWidth={1} className='w-4 h-4' />
    </div>
  )
}
export default CustomIcon
