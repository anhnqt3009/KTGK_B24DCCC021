import { BaiViet } from '../types/types'

export const mauBai: BaiViet[] = [
  {
    id: 1,
    tieuDe: "10 mẹo tiết kiệm thời gian khi học lập trình",
    tacGia: "Nguyễn A",
    thumbnail: "https://picsum.photos/seed/1/600/400",
    noiDung: "Học lập trình có thể khiến bạn choáng ngợp. Trong bài viết này mình chia sẻ 10 mẹo thực tế giúp bạn tiết kiệm thời gian và học hiệu quả hơn. ".repeat(6),
    danhMuc: "Công nghệ",
    ngayTao: new Date().toISOString()
  },
  {
    id: 2,
    tieuDe: "Du lịch Đà Lạt: Lịch trình 3 ngày hoàn hảo",
    tacGia: "Trần B",
    thumbnail: "https://picsum.photos/seed/2/600/400",
    noiDung: "Đà Lạt luôn là điểm đến mơ mộng cho các bạn trẻ. Bài viết này gợi ý lịch trình 3 ngày, nơi ăn chơi và mẹo tiết kiệm. ".repeat(6),
    danhMuc: "Du lịch",
    ngayTao: new Date(Date.now() - 7*24*3600*1000).toISOString()
  }
]
