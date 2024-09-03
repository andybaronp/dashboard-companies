import CustomIcon from '../CustomIcon/CustomIcon'
import { List } from 'lucide-react'
import { TableIntegrations } from '../TableIntegrations/TableIntegrations'
const ListIntegrations = () => {
  return (
    <div className='shadow-sm bg-background rounded-lg p-5 flex-1'>
      <div className='flex gap-x-2 items-center mb-5'>
        <CustomIcon icon={List} />
        <p className='text-xl'>List Integrations</p>
      </div>
      <TableIntegrations />
    </div>
  )
}
export default ListIntegrations
