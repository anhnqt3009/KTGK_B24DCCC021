import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BaiViet } from '../types/types'

const ChiTietBai: React.FC<{baiViet:BaiViet[], onXoa:(id:number)=>void}> = ({baiViet, onXoa}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const bai = baiViet.find(b => String(b.id) === id)
  if (!bai) return <div><h2>Không tìm thấy bài viết</h2><button onClick={()=>navigate('/')}>Quay lại</button></div>

  const handleXoa = () => {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      onXoa(bai.id)
      alert('Đã xóa bài viết')
      navigate('/')
    }
  }

  return (
    <article>
      <h1>{bai.tieuDe}</h1>
      <div style={{color:'#666'}}>{bai.tacGia} • {new Date(bai.ngayTao).toLocaleString()} • {bai.danhMuc}</div>
      <img src={bai.thumbnail} alt={bai.tieuDe} style={{width:'100%', maxHeight:420, objectFit:'cover', marginTop:8, borderRadius:6}} />
      <div style={{marginTop:12, lineHeight:1.6}}>{bai.noiDung.split('\n').map((l,i)=><p key={i}>{l}</p>)}</div>
      <div style={{marginTop:12}}>
        <button onClick={()=>navigate('/')}>Quay lại</button>
        <button onClick={()=>navigate('/bai-viet/sua/'+bai.id)} style={{marginLeft:8}}>Chỉnh sửa</button>
        <button onClick={handleXoa} style={{marginLeft:8, background:'#e53e3e', color:'#fff'}}>Xóa bài viết</button>
      </div>
    </article>
  )
}

export default ChiTietBai
