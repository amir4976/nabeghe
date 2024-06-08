"use client";
import Draver from "@/components/CommenQuestions/Draver";
import Footer from "@/components/Footer";
import Navbar from "@/components/mainPage/models/Navbar";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
function Page() {
  return (
    <>
    <Navbar  />
    <div className="max-w-7xl mx-auto px-4 font-mainFont mt-5">
      <div className="w-full flex justify-center items-center">
        <div className="title text-2xl p-5 bg-gradient-to-l font-bold from-primary-BG-gr to-secondary-BG-gr">
          پرسش های متداول
        </div>
      </div>

        <Draver/>
      <Footer />
    </div>
    </>
  );
}

export default Page;
