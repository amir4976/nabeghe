'use client'
import React from 'react'
import Style from '@/app/p-admin/Courses/Course.module.css'
import Swal from 'sweetalert2'
import { ShowSwal } from '@/utils/ShowSwal'
function Table({data}) {
    const ShowSwalShortDesc =(text)=>{
        Swal.fire({
            title:"متن کوتاه",
            text:text,
            icon:"info",
            confirmButtonText:"باشه",
            confirmButtonColor:"#000"
        })
    }
    const ShowSwalLongDesc =(text)=>{
        Swal.fire({
            title:"متن بلند",
            text:text,
            icon:"info",
            confirmButtonText:"باشه",
            confirmButtonColor:"#000"
        })
    }
  return (
    <div className='mb-5'>
       <div className="p-3 rounded-lg bg-primary-BG-gr">
        <table className={Style.table}>
          <thead>
            <tr>
              <th>تایتل</th>
              <th>قیمت</th>
              <th>متن کوتاه</th>
              <th>متن بلند</th>
              <th>دسته بندی</th>
              <th>نمره</th>
              <th>حذف</th>
              <th>ادیت</th>
            </tr>
          </thead>

          <tbody>
              {data.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.price.toLocaleString()}</td>
                <td><button onClick={()=>ShowSwalShortDesc(item.ShortDec)} className="bg-blue-500 text-white rounded-lg px-2 py-1">نمایش</button></td>
                <td><button onClick={()=>ShowSwalLongDesc(item.LongDec)} className="bg-blue-500 text-white rounded-lg px-2 py-1">نمایش</button></td>
                <td>{item.category}</td>
                <td>{item.score}</td>
                <td>
                  <button className="bg-red-500 text-white rounded-lg px-2 py-1">
                    حذف
                  </button>
                </td>
                <td>
                  <button className="bg-blue-500 text-white rounded-lg px-2 py-1">
                    ادیت
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
