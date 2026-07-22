# Clean Architecture Refactor - Tiến độ

## Yêu cầu người dùng
Cấu trúc lib/ theo Clean Architecture: core, theme, services, models, widgets, dashboard, rooms, expenses, reports, settings. Chưa kết nối backend.

## Đã hoàn thành
- lib/core/config.ts — APP_CONFIG (ROOM_SHEETS, STATUSES, BOOKING_SOURCES, PAYMENT_STATUSES, CASH_FLOWS) + types
- lib/core/utils.ts — formatVND, formatPercent, weekdayLabel, daysInMonth
- lib/core/index.ts — barrel
- lib/models/room.ts — RoomDayEntry (14 cột đầy đủ sheet Room), RoomMonthSummary, RoomMonthData
- lib/models/expense.ts — Expense, ExpenseCategorySummary
- lib/models/report.ts — MonthlyOverview, RoomPerformance, SourceRevenue (khớp sheet Thống Kê)
- lib/models/index.ts — barrel
- lib/services/room-service.ts — RoomService (mock từ dữ liệu thật T7/2026)
- lib/services/expense-service.ts — ExpenseService (chi phí T7 = 0)
- lib/services/report-service.ts — ReportService (số liệu Thống Kê T7/2026)
- lib/services/index.ts — barrel
- lib/theme/index.ts — re-export Colors, Spacing, Typography, Shadows, useResponsive

## Còn lại
- [x] lib/widgets/ — barrel re-export design-system components
- [x] lib/dashboard/, lib/rooms/, lib/expenses/, lib/reports/, lib/settings/ — screens moved (git mv), mỗi module có index.ts
- [x] app/(tabs)/*.tsx là thin route files re-export module screens
- [x] Kiểm thử: tsc 0 lỗi, 6 màn hình render OK qua screenshot
- [ ] (Tương lai) Refactor screens dùng services/models thay vì mock nội bộ khi nối Apps Script

## Ghi chú kỹ thuật
- Project là React Native/Expo (không phải Flutter) — đã giải thích với user, áp dụng cùng cấu trúc.
- Expo Router yêu cầu screens nằm trong app/; do đó screens sẽ nằm ở lib/<module>/<module>-screen.tsx và app/(tabs)/x.tsx chỉ re-export.
- Số liệu mock: doanh thu 57.768.419 / chờ nhận 9.529.000 / occupancy 35% / ADR 760.111 / RevPAR 266.214.
- Sidebar nav: Dashboard, Tình trạng phòng, Chi phí, Báo cáo, Cài đặt (app-shell.tsx). Room Detail là màn phụ.
