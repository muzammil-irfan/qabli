import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'

export default function AdminDashboard() {
  const navigate = useNavigate();
  React.useEffect(()=>{
    navigate("/product")
  },[])
  return (
    <Outlet />
  )
}
