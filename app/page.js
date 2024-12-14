import Landing from "@/components/templates/mainPage/Landing";
import Testimonial from "@/components/templates/mainPage/Testimonial";
import WhyUs from "@/components/templates/mainPage/WhyUs";
import LastCourses from "@/components/templates/mainPage/lastCourses";
import Footer from "@/components/templates/mainPage/Footer";
import { authUser } from "@/utils/authUser";
import courseModel from '@/models/Courses'
import Navbar from "@/components/templates/mainPage/Navbar";
export default async function Home() {
  const user = await authUser();
  const data = await courseModel.find({});
    return (
      <>
        <Navbar isLogin={user? true : false} />
   <div className="max-w-7xl mx-auto px-4 font-mainFont">
        <Landing/>
        <WhyUs/>
        <LastCourses data={JSON.parse(JSON.stringify(data))} />
        <Testimonial/>
        <Footer/>
   </div>
      </>
  );
}
