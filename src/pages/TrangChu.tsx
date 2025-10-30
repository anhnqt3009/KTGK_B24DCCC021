import React, { useMemo, useState } from 'react'
import { BaiViet } from '../types/types'
import CardBai from '../shared/CardBai'

const TrangChu: React.FC<{baiViet:BaiViet[], onXoa:(id:number)=>void}> = ({baiViet, onXoa}) => {
  const [q, setQ] = useState('')
  const ketqua = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return baiViet
    return baiViet.filter(b => b.tieuDe.toLowerCase().includes(t))
  }, [baiViet, q])

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>Danh sách bài viết</h1>
        <input placeholder="Tìm theo tiêu đề..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <p style={{color:'#666'}}>Tổng số bài viết: {ketqua.length}</p>
      <div className="grid">
        {ketqua.map(b => <CardBai key={b.id} bai={b} onXoa={onXoa} />)}
      </div>
    </div>
  )
}

export default TrangChu
