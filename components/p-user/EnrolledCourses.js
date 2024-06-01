import React from 'react'
import DotedTitle from '../DotedTitle'
import FancyCard from '../FancyCard'
function EnrolledCourses({enrolls,title}) {
  return (
    <div className="my-10 ">
    <DotedTitle title={title}/>
     <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-2">
   
    {enrolls.enrollment ? enrolls.enrollment.map((info , index)=> (
      <FancyCard {...info.courseId} key={index} />
    )):(
        <>
        شما در دوره ای ثبت نام نکردید
        </>
    )}

     </div>
    </div>
  )
}

export default EnrolledCourses
