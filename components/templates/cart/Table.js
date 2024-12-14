'use client'
import React, { useEffect } from "react";
import  MiniBarCart from "@/components/module/Cart/MiniBarCart";
import MainPageTitle from "@/components/templates/mainPage/MainPageTitle";
import { LuShoppingBasket } from "react-icons/lu";
import CartCard from "@/components/module/Cart/CartCard";

function Table() {
    const [cart, setCart] = React.useState([])
    useEffect(() => {
        const Cart = JSON.parse(localStorage.getItem("courseCart"))||[]
        setCart(Cart)
    }, [])
  return (
    <div>
      <div className="w-full flex  justify-center items-start mx-auto p-4 font-mainFont gap-5 max-md:flex-col">
        <div className="CartItems w-full">
          <MainPageTitle
            title={"سبد خرید شما"}
            desc={`${cart.length} دوره در سبد خرید موجود است`}
            icon={<LuShoppingBasket />}
          />
             {
              cart.map((item,index)=>
                (
                  <CartCard key={index} Data={item}/>
                )
              )
             }
             {
              !cart && <p>شما دوره ای در سبد ندارید</p>
             }
        </div>
        <MiniBarCart />
      </div>
    </div>
  );
}

export default Table;
