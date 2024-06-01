'use Client'; // <===== REQUIRED
import React from 'react'
import DashbouardCard from '@/components/p-user/DashbouardCard'
import { MdSchool } from "react-icons/md";
// import FancyCard from '@/components/FancyCard';
import DotedTitle from '@/components/DotedTitle';
import { authUser } from '@/utils/authUser';
import Enrollment from '@/models/Enrollment';
import FancyCard from '@/components/FancyCard';
import EnrolledCourses from '@/components/p-user/EnrolledCourses';

async function page() {

    const request = await fetch(`http://localhost:3000/api/Enrollment/661c20e1ff63d6957d786f17`);
    const enrolls = await request.json()
    
  

  return (
    <div>
        <div className=" grid grid-cols-4 gap-4 mt-5">
            <DashbouardCard title={'باقیمانده اشتراک'} value={"اشتراک vip ندارید"} icon={<MdSchool/>}/>
            <DashbouardCard title={'درحال یادگیری'} value={enrolls.enrollment.length + ' دوره '} icon={<MdSchool/>}/>
            <DashbouardCard title={'امتیازات'} value={'100'} icon={<MdSchool/>}/>
            <DashbouardCard title={'موجودی کیف پول'} value={'0'} icon={<MdSchool/>}/>
        </div>

        <EnrolledCourses title={'دوره های در حال یادگیری'} enrolls={enrolls} />
    </div>
  )
}

export default page
