import Landing from "@/components/mainPage/models/Landing";
import Testimonial from "@/components/mainPage/models/Testimonial";
import WhyUs from "@/components/mainPage/models/WhyUs";
import LastCourses from "@/components/mainPage/models/lastCourses";
import Footer from "@/components/Footer";
import { authUser } from "@/utils/authUser";
import courseModel from '@/models/Courses'
import Navbar from "@/components/mainPage/models/Navbar";
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
