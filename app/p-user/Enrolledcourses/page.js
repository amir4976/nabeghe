import EnrolledCourses from '@/components/p-user/EnrolledCourses'
import React from 'react'
import EnrollmentModel from '@/models/Enrollment';
import { authUser } from '@/utils/authUser';
async function page () {
  const AuthUser = await authUser()
  console.log(JSON.parse(JSON.stringify(AuthUser)))
  const enrolls = await EnrollmentModel.find({studentId: AuthUser.id}).populate('courseId')
  console.log(enrolls)

  return (
    <div>
      <EnrolledCourses title={'دوره های شما'} enrolls={JSON.parse(JSON.stringify(enrolls))} />
    </div>
  )
}

export default page
