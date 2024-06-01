import EnrolledCourses from '@/components/p-user/EnrolledCourses'
import React from 'react'

async function  page () {
  const request = await fetch(`http://localhost:3000/api/Enrollment/661c20e1ff63d6957d786f17`);
  const enrolls = await request.json()
  return (
    <div>
      <EnrolledCourses title={'دوره های شما'} enrolls={enrolls} />
    </div>
  )
}

export default page
