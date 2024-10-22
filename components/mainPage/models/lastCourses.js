'use client'
import MainPageTitle from "../MainPageTitle";

import CourseSwiper from "../CourseSwiper";
import HatLogo from "@/components/HatLogo";

 function LastCourses({data}) {
  // get last courses from api here and send it to course swiper
  return (
    <div>
      <MainPageTitle
        title="اخرین دوره ها"
        desc={"منتشر شده در سال های اخیر"}
        icon={<HatLogo/>}
      />
      <CourseSwiper data={data}/>
    </div>
  );
}

export default LastCourses;
