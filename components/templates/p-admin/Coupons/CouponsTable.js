'use client'
import React from 'react'

function Table({data}) {

  return (
    <>
<table className='table table-striped w-full h-fit bg-primary-BG-gr text-center mt-5'> 
        <thead>
            <tr>
            <th>کد تخفیف</th>
                <th>درصد</th>
                <th>تعداد استفاده شده</th>
                <th>تعداد قابل استفاده</th>
                <th>نام دوره</th>
                <th>دکمه حذف</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>(
              <tr key={item._id} >
              <td>{item.code}</td>
              <td>{item.persent}</td>
              <td>{item.maxUse}</td>
              <td>{item.uses}</td>
              <td>{item.product.title}</td>
              <td><button className='px-2 py-1 bg-red-500 rounded-full text-white'>حذف</button></td>
          </tr>
            ))
          }
        </tbody>
    </table>
    </>

  )
}

export default Table
