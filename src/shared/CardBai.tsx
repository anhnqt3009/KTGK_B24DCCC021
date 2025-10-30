import React from 'react'
import { BaiViet } from '../types/types'
import { Link, useNavigate } from 'react-router-dom'

const CardBai: React.FC<{bai:BaiViet, onXoa:(id:number)=>void}> = ({bai, onXoa}) => {
  const navigate = useNavigate()
  const handleXoa = () => {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      onXoa(bai.id)
      alert('Xóa thành công!')
    }
  }
  return (
    <div className="card">
      <img src={bai.thumbnail} alt={bai.tieuDe} className="thumb" />
      <div className="card-body">
        <h3 style={{margin:0}}>{bai.tieuDe}</h3>
        <div className="meta">{bai.tacGia} • {new Date(bai.ngayTao).toLocaleDateString()}</div>
        <p>{bai.noiDung.slice(0,100)}{bai.noiDung.length>100?'...':''}</p>
        <div style={{marginTop:'auto', display:'flex', gap:8}}>
          <Link to={'/bai-viet/'+bai.id} style={{padding:'6px 8px', border:'1px solid #ddd'}}>Đọc thêm</Link>
          <button onClick={()=>navigate('/bai-viet/sua/'+bai.id)} style={{padding:'6px 8px'}}>Chỉnh sửa</button>
          <button onClick={handleXoa} style={{padding:'6px 8px', background:'#e53e3e', color:'#fff'}}>Xóa</button>
        </div>
      </div>
    </div>
  )
}

export default CardBai
