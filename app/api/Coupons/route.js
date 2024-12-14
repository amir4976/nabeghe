import ConnectToDB from "@/utils/ConnectToDB";
import Coupons from "@/models/coupons";
import Course from "@/models/Courses";
export async function POST(req){
    try {
        await ConnectToDB()
        const {code,persent,maxUse,product} = await req.json()
        if(!code || !persent || !maxUse || !product){
            return new Response("please fill all fields",{status:400})
        }
        const course = await Course.findById(product)
        if(!course){
            return new Response("course not found",{status:400})
        }
        const couponCreate =await Coupons.create({
            code,
            persent,
            maxUse,
            product
        })
    
        return Response.json({massage:'coupon created!!!!'},{status:201})
    
    } catch (error) {
        console.log(error) 
        return Response.json({massage:error},{status:500})

    }
}