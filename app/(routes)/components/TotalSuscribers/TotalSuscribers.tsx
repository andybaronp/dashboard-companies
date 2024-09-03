'use client'
import { Percent } from 'lucide-react'

import { ResponsiveContainer, Pie, PieChart, Tooltip, Legend } from 'recharts'
import CustomIcon from '../CustomIcon/CustomIcon'
import { data } from './totalSuscribers.data'

const TotalSuscribers = () => {
  return (
    <div className='mb-4 lg:mb-0 shadow-md bg-background rounded-lg p-5 w-full md:w-96 hover:shadow-lg transition'>
      <div className='flex gap-x-2 items-center mb-4'>
        <CustomIcon icon={Percent} />
        <p className='text-2xl'>Total suscribers</p>
      </div>
      <div className='w-full h-[200px] p-5'>
        <ResponsiveContainer aspect={1} maxHeight={200}>
          <PieChart>
            <Pie
              dataKey='value'
              data={data}
              outerRadius={80}
              nameKey='name'
              labelLine={false}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default TotalSuscribers
