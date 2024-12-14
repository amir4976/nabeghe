'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
function Table(users) {
    const [UsersList ,setUserList] = useState(users)    
    // this function convert object to array
    const OBJtoArray  = Object.keys(UsersList).map((key) => UsersList[key])
    const router = useRouter()

    const DeleteUserHandler =async(id)=>{
        Swal.fire({
            title: 'آیا مطمئن هستید؟',
            text: "در صورت حذف اطلاعات غیر قابل بازیابی است",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر'
          }).then(async(e)=>{
            if(e.isConfirmed){
                const response = await fetch(`/api/Users/${id}`,{
                    method:'DELETE'
                })
        
                const data = await response.json()
                if(response.status == 201){
                    setUserList(UsersList.filter((e)=>id !== e._id))
                    
                    Swal.fire({
                        title: 'کاربر با موفقیت حذف شد',
                        icon: 'success',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        showCloseButton: false,
                        closeButtonAriaLabel: 'فهمیدم',
                      })
                }
            }
            if(e.isDismissed){
                Swal.fire({
                    title: 'عملیات لغو شد',
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    showCloseButton: true,
                    closeButtonAriaLabel: 'فهمیدم',
                  })
            }
          })
    }

    const changeRoleHandler = async(id)=>{
      const res= await fetch(`/api/Users/changeRoll`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({id})
          })  
          if(res.status == 201){
            Swal.fire({
                title: 'نقش کاربر با موفقیت تغییر کرد',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                showCloseButton: false,
                closeButtonAriaLabel: 'فهمیدم',
              })
              router.refresh()
          }
    }
    return (
    <div>
      <table className='table text-center text-xs'>
        <thead>
            <tr>
                <th>نام</th>
                <th>ایمیل</th>
                <th>یوزر نیم</th>
                <th>نقش</th>
                <th>شماره تلفن</th>
                <th>حذف</th>
                <th>ادیت</th>
                <th>تغییر نقش</th>
            </tr>
        </thead>
        <tbody >
                {
                OBJtoArray.map((user)=>(
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td>{user.phoneNumber}</td>
                        <td><button className='px-4 text-white py-1 bg-red-500 rounded-xl' onClick={()=>DeleteUserHandler(user._id)}>حذف</button></td>
                        <td><button className='px-4 text-white py-1 bg-blue-500 rounded-xl'>ادیت</button></td>
                        <td><button className='px-2 text-white py-1 bg-blue-500 rounded-xl' onClick={()=>changeRoleHandler(user._id)}>تغییر نقش</button></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
