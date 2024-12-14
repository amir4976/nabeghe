"use client";
import React from "react";
import DotedTitle from "@/components/templates/mainPage/DotedTitle";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

function MiniBarCart() {
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = React.useState(0);

  useEffect(() => {
    const Cart = JSON.parse(localStorage.getItem("courseCart")) || [];
    const totalPrice = Cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
  }, []);

  const discountHandler = async () => {
    const res = await fetch("/api/Coupons/use", {
      method: "POST",
      body: JSON.stringify(discount),
    });
    if (res.status == 200) {
      const response = await res.json();
      const coupon = response.coupon;
      const course = coupon?.product;
      const Cart = JSON.parse(localStorage.getItem("courseCart")) || [];
      const findProductForDiscount = Cart.filter((e) => {
        return e.id == course._id;
      });
      if (findProductForDiscount.length == 0) {
        Swal.fire({
          title: "خطا",
          text: "کد تخفیف وارد شده اشتباه است",
          icon: "error",
          confirmButtonText: "باشه",
        });
        return;
      }
      const discount = findProductForDiscount[0].price * (coupon.persent / 100);

      const totalPrice = Cart.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(totalPrice - discount);
    }
  };

  return (
    <div className="flex w-6/12 max-md:w-full sticky top-24 rounded-3xl flex-col mt-10">
      <div className="bg-gradient-to-b from-primary-BG-gr to-secondary-BG-gr w-full sticky px-5 justify-center flex-col rounded-3xl">
        <div className="titleBar bg-black py-3 px-3 rounded-b-3xl w-full">
          <DotedTitle title={"اطلاعات پرداخت"} />
        </div>

        {/* discount input */}
        <div className="discountInput w-full h-10 flex items-center gap-3 mt-4">
          <input
            type="text"
            className="w-full h-full rounded-lg bg-black p-2  outline-none "
            placeholder="کد تخفیف"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
          />
          <button
            onClick={discountHandler}
            className="h-11 inline-flex items-center justify-center gap-1 bg-primary-color rounded-xl  transition-all hover:opacity-80 px-4"
          >
            +
          </button>
        </div>
        {/* end of discount input  */}

        <div className=" flex justify-between items-center w-full my-5 text-sm text-white">
          <span>جمع کل</span>
          <span>
            {totalPrice.toLocaleString()}{" "}
            <span className="text-gray-600 text-xs">تومان</span>
          </span>
        </div>
        <div className="flex justify-between items-center w-full  my-5 text-sm text-white">
          <span>موجودی کیف پول</span>
          <span>
            {Number(0).toLocaleString()}{" "}
            <span className="text-gray-600 text-xs">تومان</span>
          </span>
        </div>
        <div className="flex justify-between items-center w-full  my-5 text-sm text-white">
          <span>تخفیف</span>
          <span>
            0<span className="text-gray-600 text-xs">تومان</span>
          </span>
        </div>
        <hr />
        <div className="flex justify-between items-center w-full  my-5 text-sm text-white">
          <span>قابل پرداخت</span>
          <span>
            {totalPrice.toLocaleString()}
            <span className="text-gray-600 text-xs">تومان</span>
          </span>
        </div>

        <div className="flex w-full">
          <button className=" w-full p-3 rounded-full bg-primary-color flex items-center justify-center text-white mr-2 transition-all hover:opacity-80">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniBarCart;
