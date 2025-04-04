
import LastCourses from "@/components/templates/mainPage/lastCourses";
import Navbar from "@/components/templates/mainPage/Navbar";
import Footer from "@/components/templates/mainPage/Footer";
import Table from "@/components/templates/cart/Table";
function page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl m-auto">
        <Table/>
        <LastCourses />
        <Footer/>
      </div>


    </>
  );
}

export default page;
