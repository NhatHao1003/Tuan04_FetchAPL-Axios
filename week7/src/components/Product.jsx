import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Product() {
    const {id} = useParams();
    const navigate = useNavigate()
  return (
    <div>
      <h1>Product ID : {id}</h1>
      <button onClick={()=>navigate('/checkout')}>Buy this one</button>
    </div>
  )
}
