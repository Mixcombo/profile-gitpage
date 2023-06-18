import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav style={{display:'flex'}}>
            <h2 style={{marginLeft:"12px", marginBottom: "1px"}}>
                <Link to="/" style={{ textDecoration: 'none', color:"red" }}>
                    Aingthawan K.
                </Link>
            </h2>
            <ul style={{display:'flex', listStyle: 'none'}}>
                <li style={{ margin: '12px' }}>
                    <Link to="/profile" style={{ textDecoration: 'none', color:"red" }}>Profile</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar