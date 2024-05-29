'use Client'; // <===== REQUIRED
import React from 'react'
import DashbouardCard from '@/components/p-user/DashbouardCard'
import { MdSchool } from "react-icons/md";
// import FancyCard from '@/components/FancyCard';
import DotedTitle from '@/components/DotedTitle';
import { authUser } from '@/utils/authUser';
import Enrollment from '@/models/Enrollment';
import FancyCard from '@/components/FancyCard';

async function page() {

    const request = await fetch(`http://localhost:3000/api/Enrollment/661c20e1ff63d6957d786f17`);
    const enrolls = await request.json()
    console.log(enrolls)
  

  return (
    <div>
        <div className=" grid grid-cols-4 gap-4 mt-5">
            <DashbouardCard title={'باقیمانده اشتراک'} value={"۷ دوره"} icon={<MdSchool/>}/>
            <DashbouardCard title={'درحال یادگیری'} value={'7 دوره'} icon={<MdSchool/>}/>
            <DashbouardCard title={'امتیازات'} value={'۸۵,۴۸۰ ستاره'} icon={<MdSchool/>}/>
            <DashbouardCard title={'موجودی کیف پول'} value={'۱,۰۷۹,۰۰۰ تومان'} icon={<MdSchool/>}/>
        </div>

        <div className="mt-10">
        <DotedTitle title={'دوره های در حال یادگیری'}/>
         <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-2">
       
        {enrolls.enrollment.map((info , index)=> (
          <FancyCard {...info.courseId} key={index} />
        ))}

         </div>
        </div>
    </div>
  )
}

export default page
