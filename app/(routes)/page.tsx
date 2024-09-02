import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { CardSumary } from './components/CardSumary/'
import { BookOpenCheck, UsersRound, Waypoints } from 'lucide-react'

const dataCardsSumary = [
  {
    icon: UsersRound,
    total: '12.4%',
    average: 15,
    title: 'Companies created',
    tooltipText: 'Total Companies',
  },
  {
    icon: Waypoints,
    total: '85.6%',
    average: 80,
    title: 'Total Revenue',
    tooltipText: 'See all of the summary',
  },
  {
    icon: BookOpenCheck,
    total: '363,95$',
    average: 30,
    title: 'Bounce rate',
    tooltipText: 'See all of the summary',
  },
]
export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className='text-2xl mb-4'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20'>
        {dataCardsSumary.map((card) => (
          <CardSumary key={card.title} {...card} />
        ))}
      </div>
    </div>
  )
}
