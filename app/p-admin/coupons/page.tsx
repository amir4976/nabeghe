import Form from "@/components/templates/p-admin/Coupons/Form"
import coupons from "@/models/coupons"
import ConnectToDB from "@/utils/ConnectToDB"
import Course from "@/models/Courses"
import CouponsTable from "@/components/templates/p-admin/Coupons/CouponsTable"
async function Page(){
  ConnectToDB()
  const dataCourses = await Course.find({})
  const dataCoupons = await coupons.find({}).populate('product').lean()
 
  return (
    <div className="mt-5">
            <Form data={JSON.parse(JSON.stringify(dataCourses))}/>
            <CouponsTable data={JSON.parse(JSON.stringify(dataCoupons))}/>
    </div>
  )
}

export default Page
