import ConnectToDB from "@/utils/ConnectToDB";
import coupons from "@/models/coupons";
export async function POST(req) {
    ConnectToDB();

  const body = await req.json();
    console.log(body)
  const coupon = await coupons.findOne({
    code: body,
  }).populate("product");
  if (!coupon) {
    return Response.json({
      message: "کد تخفیف وارد شده اشتباه است",
    } , {status:400});
  }
  return Response.json({
     coupon,
  },{
    status:200
  });

}