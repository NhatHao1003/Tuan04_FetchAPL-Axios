import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Products() {

  return (
    <div>
        List products: 
        <ul>
            <li><Link to={'/products/1'}>Iphone</Link></li>
            <li><Link to={'/products/2'}>Samsung</Link></li>
            <li><Link to={'/products/3'}>Laptop</Link></li>
        </ul>
    </div>
  )
}
