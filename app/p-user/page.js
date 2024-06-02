
import React from 'react'
import { authUser } from '@/utils/authUser';
import EnrolledCourses from '@/components/p-user/EnrolledCourses';
import EnrollmentModel from '@/models/Enrollment'
import Cards from '@/components/p-user/Cards';

async function page() {
    const AuthUser = await authUser()
    console.log(JSON.parse(JSON.stringify(AuthUser)))
    const enrolls = await EnrollmentModel.find({studentId: AuthUser.id}).populate('courseId')

  
    

  return (
    <div>
      <Cards enrolleLength={enrolls.length}/>
      <EnrolledCourses title={'دوره های در حال یادگیری'} enrolls={JSON.parse(JSON.stringify(enrolls))} />
    </div>
  )
}

export default page
