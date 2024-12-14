import { MdSchool } from 'react-icons/md'
import DashbouardCard from './DashbouardCard'
import React from 'react'

function Cards({enrolleLength}) {

  return (
    <div>
        <div className=" grid grid-cols-4 gap-4 mt-5">
            <DashbouardCard title={'باقیمانده اشتراک'} value={"اشتراک vip ندارید"} icon={<MdSchool/>}/>
            <DashbouardCard title={'درحال یادگیری'} value={enrolleLength + ' دوره '} icon={<MdSchool/>}/>
            <DashbouardCard title={'امتیازات'} value={'100'} icon={<MdSchool/>}/>
            <DashbouardCard title={'موجودی کیف پول'} value={'0'} icon={<MdSchool/>}/>
        </div>      
    </div>
  )
}

export default Cards
