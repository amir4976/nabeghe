import React from 'react'
import Table from '../../../components/templates/p-admin/Users/Table'
import UserModel from '@/models/Users'
async function page() {
    const users = await UserModel.find({})
    return (
    <div>
        <Table {...users} />
    </div>
  )
}

export default page
