import Head from 'next/head'
import Image from 'next/image'
import DashboardHeader from '@/components/DashboardHeader'
import TopCards from '@/components/TopCards'
import Forms from '@/components/Forms'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <DashboardHeader/>
        <TopCards/>
        <Forms/>
      </main>
    </>
  )
}
