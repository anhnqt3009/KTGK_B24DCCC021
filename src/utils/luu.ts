import { BaiViet } from '../types/types'
const KEY = 'blog_vn_s1_v1'
export const taiDanhSachBaiViet = (): BaiViet[] => {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
export const luuDanhSachBaiViet = (ds: BaiViet[]) => {
  localStorage.setItem(KEY, JSON.stringify(ds))
}
