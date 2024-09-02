import { Logo } from '../Logo'
import SidebarRoutes from '../SidebarRoutes/SidebarRoutes'

const Sidebar = () => {
  return (
    <div className='h-screen'>
      <div className='h-full flex flex-col border-1'>
        <Logo />
        <SidebarRoutes />
      </div>
    </div>
  )
}
export default Sidebar
