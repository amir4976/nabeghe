import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
function notFound() {
  return (
    <div className='w-full h-screen mt-[-100px] flex justify-center items-center flex-col font-mainFont'>
        <div className="image w-fit h-[440px] overflow-hidden">
        <Image width={600} height={600} src={'/404.svg'} alt="404" />
        </div>
        <h1 className='font-mainFont text-4xl max-md:text-lg' >شرمنده این صفحه پیدا نشد </h1>
        <Link href={'/'} className='px-5 py-2 bg-[#ff97c9] text-black rounded-lg m-2'>بیا برسونمت</Link>
    </div>
  )
}

export default notFound
