'use client'
import { ShowSwal } from '@/utils/ShowSwal'
import { useState } from 'react'
import React from 'react'
import Swal from 'sweetalert2'

function AddCourseForm() {
  // title, price, ShortDec, LongDec, category, score, image,courseName,priceWhithDiscount
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [ShortDec, setShortDec] = useState('')
    const [LongDec, setLongDec] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [courseName, setCourseName] = useState('')

    const AddCourseHandler = async () => {
      const formData = new FormData();
      formData.append('title', title)
      formData.append('price', price)
      formData.append('ShortDec', ShortDec)
      formData.append('LongDec', LongDec)
      formData.append('category', category)
      formData.append("image", image)
      formData.append('courseName', courseName)
    
      const req = await fetch('/api/Courses',{
        method:'POST',
        body:formData
      })

      if(req.status === 200){
        ShowSwal({title:"عملیات با موفقیت انجام شد",icon:"success"})
      }else{
        ShowSwal({title:"عملیات با موفقیت انجام نشد",icon:"error"})

      }
    }
  return (
    <div className='grid grid-cols-4 gap-5 my-5'>
      <div className="col-span-2 ">
        <div className="flex flex-col gap-1  ">
            <label className='mr-4 ' htmlFor="title">تایتل</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" id="title" className=' rounded-full p-2 outline-none'  placeholder='لطفا تایتل را وارد کنید'/>
        </div>

        <div className="flex flex-col gap-1 mt-3 ">
            <label className='mr-4 ' htmlFor="title">قیمت</label>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" name="title" id="title" className=' rounded-full p-2 outline-none'  placeholder='لطفا قیمت را وارد کنید'/>
        </div>

        <div className="flex flex-col gap-1 mt-3 ">
            <label className='mr-4 ' htmlFor="title">متن کوتاه</label>
            <input value={ShortDec} onChange={(e)=>setShortDec(e.target.value)} type="text" name="title" id="title" className=' rounded-full p-2 outline-none'  placeholder='لطفا معرفی کوتاه را وارد کنید'/>
        </div>

        <div className="flex flex-col gap-1 mt-3 ">
            <label className='mr-4 ' htmlFor="title">متن بلند</label>
            <textarea value={LongDec} onChange={(e)=>setLongDec(e.target.value)} type="text" name="title" id="title" className=' rounded-xl p-2 outline-none'  placeholder='لطفا معرفی بلند را وارد کنید'/>
        </div>

      </div>
      <div className="col-span-2">

       <div className="flex flex-col gap-1  ">
            <label className='mr-4 ' htmlFor="title">دسته بندی</label>
            <input value={category} onChange={(e)=>setCategory(e.target.value)}  type="text" name="title" id="title" className=' rounded-full p-2 outline-none'  placeholder='لطفا دسته بندی را وارد کنید'/>
        </div>

        <div className="flex flex-col gap-1 mt-3 ">
            <label className='mr-4 ' htmlFor="title">نام لینکی محصول</label>
            <input value={courseName} onChange={(e)=>setCourseName(e.target.value)}  type="text" name="title" id="title" className=' rounded-full p-2 outline-none'  placeholder='لطفا نام لینکی محصول را وارد کنید'/>
        </div>

        <div className="flex flex-col gap-1 mt-3 ">
            <label className='mr-4 ' htmlFor="title">عکس</label>
            <input  onChange={(e)=>setImage(e.target.files[0])} type="file" name="title" id="title" className=' rounded-full p-2 outline-none'  placeholder='لطفا عکس محصول را وارد کنید'/>
        </div>
        <div className="flex flex-col gap-1 mt-8 ">
        

            <button className='w-full rounded-full bg-primary-color p-2' onClick={AddCourseHandler} >ارسال اطلاعات</button>    
        </div>

      </div>
    </div>
  )
}

export default AddCourseForm
