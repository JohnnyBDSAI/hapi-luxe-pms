# UI Overhaul theo Mockup - Ghi chú tiến độ

## Mockup của người dùng (ChatGPTImageJul22,2026,10_20_06AM.png)
- Sidebar tối màu nâu đen (#2B2118) bên trái cho desktop/web, gồm: Dashboard, Tình trạng phòng, Quản lý phòng, Lịch đặt phòng, Chi phí, Báo cáo, Cài đặt
- Dashboard: 4 thẻ chỉ số (Doanh thu đã nhận 25,680,000 / Doanh thu chờ nhận 8,450,000 / Tổng chi phí 6,240,000 / Lợi nhuận 27,890,000 VND) + % so với hôm qua; Occupancy 87%, ADR 1,250,000, RevPAR 1,087,500 ở cột trái; biểu đồ area "Doanh thu 7 ngày qua"; donut "Trạng thái phòng hôm nay" (Đã bán 5/Đã đặt 1/Trống 1/Đặt trước 0); thanh ngang "Doanh thu theo nguồn" (Booking.com, Agoda, Facebook, Walk-in, Khác)
- Tablet: Tình trạng phòng dạng bảng lịch: hàng = Room101-107, cột = ngày (Thứ/CN), ô màu trạng thái (Đã bán xanh, Đã đặt vàng, Trống đỏ nhạt)
- Mobile: bottom nav, thẻ chỉ số 2 cột
- Web view "Quản lý phòng": danh sách booking card (khoảng ngày, tên khách, số người, nguồn, giá, trạng thái thanh toán)
- Luồng dữ liệu: Flutter App → Apps Script API → Google Sheets (không đổi cấu trúc Sheets, logic ở Apps Script, app chỉ hiển thị/tương tác)

## Đã hoàn thành
- [x] Cập nhật Colors trong lib/design-system/constants.ts: primary nâu #8B6F4E, sidebar tối #2B2118, nền kem #FAF7F2, status màu theo Google Sheets (Đã bán #B7E1CD, Đã đặt #FFF2CC, Đặt trước #F9CB9C, Trống #F4CCCC)
- [x] Cập nhật theme.config.js + theme.config.d.ts (thêm accent, info)
- [x] Tạo components/layout/app-shell.tsx: sidebar desktop/tablet >= 768px, mobile giữ bottom tabs
- [x] Cập nhật app/(tabs)/_layout.tsx: ẩn tab bar trên desktop, ẩn index + room-detail khỏi tab, label tiếng Việt
- [x] Thêm icon mapping: door.left.hand.open, creditcard.fill, chart.bar.fill, gearshape.fill, calendar, bell.fill, magnifyingglass, person.crop.circle.fill
- [x] Screenshot xác nhận: sidebar hiển thị đúng, active state nâu, dashboard + room status render OK

## Việc còn lại
- [ ] Dashboard theo mockup: 4 thẻ chỉ số (Doanh thu đã nhận/Chờ nhận/Tổng chi phí/Lợi nhuận) + biểu đồ 7 ngày + donut trạng thái phòng + doanh thu theo nguồn
- [ ] Room Status: bảng lịch grid (phòng x ngày) thay vì grid ô theo từng phòng, ô màu theo trạng thái, cuộn ngang
- [ ] Kiểm thử mobile viewport (375x812) và desktop
- [ ] Checkpoint + bàn giao

## Dữ liệu thật từ Google Sheets (dùng cho mock)
- 7 phòng: Room101-107; Tháng 7/2026
- Thống kê: Doanh thu đã nhận 57,768,419 / Chờ nhận 9,529,000 / Tổng giá trị 67,297,419 / Chi phí 0 / Thuế 826,130 / Lợi nhuận 56,942,289; Ngày đã bán 76, ngày được đặt 10, trống 71, Occupancy 35%; ADR 760,111; RevPAR 266,214
- Nguồn đặt: Agoda, Airbnb (10,586,419), Booking.com, Website, Facebook (47,719,000 ~73.2%), Google, TikTok, Khác
- Trạng thái: Đã bán/Đã đặt/Đặt trước/Trống; Tình trạng TT: Đã nhận/Chờ nhận; Dòng tiền: Tiền mặt/Ngân hàng
