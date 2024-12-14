
import MainPageTitle from "./MainPageTitle";
import CourseSwiper from "./CourseSwiper";
import HatLogo from "@/components/templates/mainPage/HatLogo";
import CourseModel from "@/models/Courses"; 
import ConnectToDB from "@/utils/ConnectToDB";
async function LastCourses({data}) {
  ConnectToDB()
  const allcourses = await CourseModel.find({})
      // .sort({ publishedAt: "-1" })

  // get last courses from api here and send it to course swiper
  return (
    <div>
      <MainPageTitle
        title="اخرین دوره ها"
        desc={"منتشر شده در سال های اخیر"}
        icon={<HatLogo/>}
      />
      <CourseSwiper data={data || allcourses}/>
    </div>
  );
}

export default LastCourses;
