import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaiViet } from '../types/types'

const danhMuc = ['Công nghệ','Du lịch','Ẩm thực','Đời sống','Khác']

const TaoBai: React.FC<{onSubmit:(b:BaiViet)=>void}> = ({onSubmit}) => {
  const [tieuDe, setTieuDe] = useState('')
  const [tacGia, setTacGia] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [noiDung, setNoiDung] = useState('')
  const [danhMucChon, setDanhMucChon] = useState(danhMuc[0])
  const navigate = useNavigate()

  const validate = () => {
    if (tieuDe.trim().length < 10) { alert('Tiêu đề: ít nhất 10 ký tự'); return false }
    if (tacGia.trim().length < 3) { alert('Tác giả: ít nhất 3 ký tự'); return false }
    if (noiDung.trim().length < 50) { alert('Nội dung: ít nhất 50 ký tự'); return false }
    return true
  }

  const handle = (e:React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const newBai: BaiViet = {
      id: Date.now(),
      tieuDe,
      tacGia,
      thumbnail: thumbnail || 'https://picsum.photos/seed/new/600/400',
      noiDung,
      danhMuc: danhMucChon,
      ngayTao: new Date().toISOString()
    }
    onSubmit(newBai)
    alert('Đăng bài thành công!')
    navigate('/')
  }

  return (
    <div className="form">
      <h2>Tạo bài viết mới</h2>
      <form onSubmit={handle}>
        <label>Tiêu đề</label><br/>
        <input value={tieuDe} onChange={e=>setTieuDe(e.target.value)} /><br/>
        <label>Tác giả</label><br/>
        <input value={tacGia} onChange={e=>setTacGia(e.target.value)} /><br/>
        <label>URL ảnh thumbnail</label><br/>
        <input value={thumbnail} onChange={e=>setThumbnail(e.target.value)} /><br/>
        <label>Thể loại</label><br/>
        <select value={danhMucChon} onChange={e=>setDanhMucChon(e.target.value)}>
          {danhMuc.map(d=> <option key={d}>{d}</option>)}
        </select><br/>
        <label>Nội dung</label><br/>
        <textarea rows={12} value={noiDung} onChange={e=>setNoiDung(e.target.value)} /><br/>
        <div style={{marginTop:8}}>
          <button type="submit">Đăng bài</button>
          <button type="button" className="ghost" onClick={()=>navigate('/')}>Hủy</button>
        </div>
      </form>
    </div>
  )
}

export default TaoBai
