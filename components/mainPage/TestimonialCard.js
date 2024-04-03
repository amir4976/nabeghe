import React from 'react'
import Image from 'next/image'
function TestimonialCard() {
  return (
    <div className='w-full h-[200px]  bg-black  flex  justify-center items-center flex-col rounded-2xl border-gray-500/50 border px-3' >
        <span   className='text-gray-500 text-center text-sm'>
وبسایت شما به خوبی به نیازها و سطح دانش کاربران پاسخ می‌دهد. از مبتدیان تا حرفه‌ایان، می‌توانند از محتواهای آموزشی شما بهره‌بردند. این گسترده‌بودن پوشش محتوا بسیار قابل قدردانی است.
        </span>
        <div className='flex   mt-5'>
            <div className="prof w-10 h-10 rounded-full overflow-auto relative">
                <Image fill alt='profile' src={'/assets/01.jpeg'} />
            </div>
            <div className='flex flex-col justify-center text-sm'>
                <span className='font-bold'>جلال بهرامی</span>
                <span className='text-xs'>دوره پروژه محور react js</span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
