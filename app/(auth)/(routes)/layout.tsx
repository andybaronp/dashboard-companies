import { Logo } from '@/app/(routes)/components/Logo'

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex  flex-col h-screen items-center justify-center '>
      <Logo />
      <h1 className='text-3xl my-2'>Welcome</h1>
      <h2 className='text-2xl mb-2'>Please sign in</h2>
      {children}
    </div>
  )
}
