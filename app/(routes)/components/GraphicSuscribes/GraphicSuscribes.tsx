'use client'
import { TrendingUp } from 'lucide-react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { dataGraphicSuscribes } from './GraphicSuscribes.data'

const GraphicSuscribes = () => {
  return (
    <div className='mt-5'>
      <p className='text-3xl'> 24,5445</p>

      <div className='flex gap-x-5 mb-5'>
        <div className='flex items-center gap-2 px-3 text-base bg-[#16C8C7] text-white rounded-xl w-fit'>
          8,5%
          <TrendingUp strokeWidth={2} className='w-4 h-4' />
        </div>
        <p className='text-slate-500'>+43 Increased</p>
      </div>
      <div className='h-[350px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={730}
            height={250}
            data={dataGraphicSuscribes}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#887CFD' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#887CFD' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82CA9D' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82CA9D' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='newCustomers'
              stroke='#887CFD'
              fill='url(#colorUv)'
              fillOpacity={1}
            />
            <Area
              type='monotone'
              dataKey='oldCustomers'
              stroke='#82CA9D'
              fill='url(#colorPv)'
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default GraphicSuscribes
