import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
        <nav>
            <Link to={'/dashboard/profile'}>Profile</Link> |
            <Link to={'/dashboard/order'}>Order</Link> |
            <Link to={'/dashboard/setting'}>Setting</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
