import { BarChart } from 'lucide-react'
import CustomIcon from '../CustomIcon/CustomIcon'
import GraphicSuscribes from '../GraphicSuscribes/GraphicSuscribes'

const SalesDistributors = () => {
  return (
    <div className='shadow-sm bg-background rounded-lg p-5'>
      <div className='flex gap-x-2 items-center'>
        <CustomIcon icon={BarChart} />
        <p className='text-2xl'>Sales Distributors</p>
      </div>
      <div>
        <GraphicSuscribes />
      </div>
    </div>
  )
}
export default SalesDistributors
