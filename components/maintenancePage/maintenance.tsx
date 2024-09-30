import React from 'react'
import Image from 'next/image'

export default function Maintenance() {
  return (
    <div className='flex flex-col items-center gap-y-10 text-[#0393D6] py-20 lg:py-40'>
<Image src="/maintenance-icon.svg" alt="maintenance" width={200} height={200}loading='eager'  />
<p className='text-4xl leading-[48px]  lg:text-[40px] font-bold lg:leading-[61px] tracking-[0.99px] text-center'>Cette page est actuellement en maintenance<br className='hidden lg:flex'/>
Reviens très vite ou prends RDV ⤵️</p>
    </div>
  )
}
