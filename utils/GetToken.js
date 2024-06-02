"use server"

import {cookies} from 'next/headers'

export const getToken = async ()=> {
     return await cookies().get('token')?.value; 
}