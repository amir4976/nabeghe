'use client'
import React from "react";

function userTable({users}) {
  return (
    <table className="table table-zebra w-full h-fit text-center">
      <thead>
        <tr>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((items)=>(
            <tr key={items._id}>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phoneNumber}</td>
              </tr>
            ))
        }
        {
            users.length < 0 ?(
                <p>یورزی یافت نشد</p>
            ):""
        }
      </tbody>
    </table>
  );
}

export default userTable;
