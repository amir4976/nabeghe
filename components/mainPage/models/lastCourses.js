
import MainPageTitle from "../MainPageTitle";
import { MdSchool } from "react-icons/md";
import CourseSwiper from "../CourseSwiper";
import HatLogo from "@/components/HatLogo";
function LastCourses() {
  // get last courses from api here and send it to course swiper
  return (
    <div>
      <MainPageTitle
        title="اخرین دوره ها"
        desc={"منتشر شده در سال های اخیر"}
        icon={<HatLogo/>}
      />
      <CourseSwiper/>
    </div>
  );
}

export default LastCourses;
