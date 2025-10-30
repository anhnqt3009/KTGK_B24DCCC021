import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaiViet } from '../types/types'

const danhMuc = ['Công nghệ','Du lịch','Ẩm thực','Đời sống','Khác']

const SuaBai: React.FC<{baiViet:BaiViet[], onSubmit:(b:BaiViet)=>void}> = ({baiViet, onSubmit}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const existing = baiViet.find(b => String(b.id) === id)

  const [tieuDe, setTieuDe] = useState(existing?.tieuDe ?? '')
  const [tacGia, setTacGia] = useState(existing?.tacGia ?? '')
  const [thumbnail, setThumbnail] = useState(existing?.thumbnail ?? '')
  const [noiDung, setNoiDung] = useState(existing?.noiDung ?? '')
  const [danhMucChon, setDanhMucChon] = useState(existing?.danhMuc ?? danhMuc[0])

  useEffect(() => {
    if (!existing) {
      alert('Bài viết không tồn tại')
      navigate('/')
    }
  }, [existing, navigate])

  const validate = () => {
    if (tieuDe.trim().length < 10) { alert('Tiêu đề: ít nhất 10 ký tự'); return false }
    if (tacGia.trim().length < 3) { alert('Tác giả: ít nhất 3 ký tự'); return false }
    if (noiDung.trim().length < 50) { alert('Nội dung: ít nhất 50 ký tự'); return false }
    return true
  }

  const handle = (e:React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const updated: BaiViet = { id: existing!.id, tieuDe, tacGia, thumbnail: thumbnail || 'https://picsum.photos/seed/new/600/400', noiDung, danhMuc: danhMucChon, ngayTao: existing!.ngayTao }
    onSubmit(updated)
    alert('Cập nhật thành công!')
    navigate('/bai-viet/'+existing!.id)
  }

  return (
    <div className="form">
      <h2>Chỉnh sửa bài viết</h2>
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
          <button type="submit">Cập nhật</button>
          <button type="button" className="ghost" onClick={()=>navigate('/bai-viet/'+existing!.id)}>Hủy</button>
        </div>
      </form>
    </div>
  )
}

export default SuaBai
