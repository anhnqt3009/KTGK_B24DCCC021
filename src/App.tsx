import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThanhDieuHuong from './components/ThanhDieuHuong'
import TrangChu from './pages/TrangChu'
import TaoBai from './pages/TaoBai'
import ChiTietBai from './pages/ChiTietBai'
import SuaBai from './pages/SuaBai'
import NotFound from './pages/NotFound'
import { BaiViet } from './types/types'
import { taiDanhSachBaiViet, luuDanhSachBaiViet } from './utils/luu'

import { mauBai } from './data/baivietmau'

const App: React.FC = () => {
  const [baiViet, setBaiViet] = useState<BaiViet[]>(() => {
    const s = taiDanhSachBaiViet()
    if (s && s.length) return s
    luuDanhSachBaiViet(mauBai)
    return mauBai
  })

  useEffect(() => {
    luuDanhSachBaiViet(baiViet)
  }, [baiViet])

  const them = (b: BaiViet) => setBaiViet(prev => [b, ...prev])
  const capNhat = (b: BaiViet) => setBaiViet(prev => prev.map(p => p.id === b.id ? b : p))
  const xoa = (id:number) => setBaiViet(prev => prev.filter(p => p.id !== id))

  return (
    <>
      <ThanhDieuHuong soLuong={baiViet.length} />
      <main className="container">
        <Routes>
          <Route path="/" element={<TrangChu baiViet={baiViet} onXoa={xoa} />} />
          <Route path="/bai-viet" element={<TrangChu baiViet={baiViet} onXoa={xoa} />} />
          <Route path="/tao-bai" element={<TaoBai onSubmit={them} />} />
          <Route path="/bai-viet/:id" element={<ChiTietBai baiViet={baiViet} onXoa={xoa} />} />
          <Route path="/bai-viet/sua/:id" element={<SuaBai baiViet={baiViet} onSubmit={capNhat} />} />
          <Route path="/about" element={<h2>Giới thiệu</h2>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
