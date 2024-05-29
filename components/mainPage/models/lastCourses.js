
import MainPageTitle from "../MainPageTitle";
import { MdSchool } from "react-icons/md";
import CourseSwiper from "../CourseSwiper";
import HatLogo from "@/components/HatLogo";
async function LastCourses() {
  // get last courses from api here and send it to course swiper
  const res = await fetch('http://localhost:3000/api/Courses')
  const result = await res.json()
  
  return (
    <div>
      <MainPageTitle
        title="اخرین دوره ها"
        desc={"منتشر شده در سال های اخیر"}
        icon={<HatLogo/>}
      />
      <CourseSwiper {...result}/>
    </div>
  );
}

export default LastCourses;
