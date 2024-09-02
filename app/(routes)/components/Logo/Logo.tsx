'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export const Logo = () => {
  const router = useRouter()
  return (
    <div
      className='min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2 '
      onClick={() => router.push('/')}
    >
      <Image src={'/logo.svg'} alt='logo' width={60} height={60} priority />
      <h1 className='font-bold text-xl'>DashboarManager</h1>
    </div>
  )
}
