import Stripe from '@/components/Stripe'

export default function Home() {
  return (
    <main className='text-white'>
      <div className='grid grid-cols-4'>
        <Stripe />
        <Stripe />
      </div>
    </main>
  )
}
