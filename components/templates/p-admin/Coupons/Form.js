"use client";
import React from "react";
import Swal from "sweetalert2";

function Form({ data }) {
  const [product, setProduct] = React.useState(null);
  const [code, setCode] = React.useState("");
  const [persent, setPersent] = React.useState("");
  const [maxUse, setMaxUse] = React.useState("");

  const submitCode = async (e) => {
    e.preventDefault();
    const data = {
      code,
      persent,
      maxUse,
      product,
    };
    const res = await fetch("/api/Coupons", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      Swal.fire({
        title: "تخفیف جدید ایجاد شد",
        icon: "success",
        confirmButton: "باشه",
      });
    }
  };

  return (
    <>
      <form action="/api/Coupons" method="POST" className="flex flex-col gap-2">
        <input
          type="text"
          name="code"
          placeholder="کد تخفیف"
          className="p-2 bg-primary-BG-gr text-white rounded-xl outline-none"
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="number"
          name="persent"
          placeholder="درصد تخفیف"
          className="p-2 bg-primary-BG-gr text-white rounded-xl outline-none"
          onChange={(e) => setPersent(e.target.value)}
        />
        <input
          type="number"
          name="maxUse"
          placeholder="تعداد استفاده"
          className="p-2 bg-primary-BG-gr text-white rounded-xl outline-none"
          onChange={(e) => setMaxUse(e.target.value)}
        />
        <select name="product" className="p-2 bg-primary-BG-gr text-white" onChange={(e) =>setProduct(e.target.value)}>
          {data.map((item) => {
            return (
              <option className="text-black" value={item._id} key={item._id}>
                {item.title}
              </option>
            );
          })}
        </select>
        <button
          onClick={submitCode}
          type="submit"
          className="p-2 bg-blue-500 rounded-full text-white"
        >
          ثبت کد تخفیف
        </button>
      </form>
    </>
  );
}

export default Form;
