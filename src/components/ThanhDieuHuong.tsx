import React from 'react'
import { Link } from 'react-router-dom'

const ThanhDieuHuong: React.FC<{soLuong:number}> = ({soLuong}) => {
  return (
    <nav>
      <div className="container">
        <span className="header-title">MyBlog</span>
        <span style={{marginLeft:16}}>
          <Link to="/">Home</Link>
          <Link to="/tao-bai" style={{marginLeft:12}}>Tạo bài</Link>
          <Link to="/about" style={{marginLeft:12}}>About</Link>
        </span>
        <span style={{float:'right'}}>Tổng: {soLuong}</span>
      </div>
    </nav>
  )
}

export default ThanhDieuHuong
