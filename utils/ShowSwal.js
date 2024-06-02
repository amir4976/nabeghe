'use client'
const Swal = require("sweetalert2");
export const ShowSwal = ({title, text, icon}) => {
  Swal.fire({
    title,
    text,
    icon 
  });
};


