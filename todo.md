# Hapi Luxe PMS - Flutter Development TODO

## Phase 1: Architecture Analysis & Proposal (Hoàn thành)
- [x] Analyze Google Sheets structure (Room101-107, Chi phí, Thống kê, Tình trạng phòng)
- [x] Analyze Apps Script logic (Code.gs, CONFIG.GS, FORMATTER.GS, TRIGGER.GS)
- [x] Define data flow (Google Sheets as DB, Apps Script as Backend, Flutter as Frontend)
- [x] Present architecture proposal to user for confirmation

## Phase 2: UI/UX Prototype Design (Hoàn thành)
- [x] Theme configuration (Boutique Luxury/Tropical style)
- [x] Reusable UI components (Card, Button, MetricCard)
- [x] Navigation structure with 5 main tabs
- [x] Dashboard screen with mock data
- [x] Room Status screen with calendar grid
- [x] Room Detail screen with booking info
- [x] Expenses screen with category breakdown
- [x] Reports screen with analytics
- [x] Settings screen with preferences

## Module 1: Dashboard (UI/UX Prototype Complete)
- [x] Dashboard UI Screen with mock data
- [x] Statistics cards (Revenue, Occupancy, ADR, RevPAR)
- [x] Room status overview
- [x] Revenue by source breakdown
- [x] Quick stats display
- [ ] API Service for fetching dashboard statistics
- [ ] Data Models (DashboardStats, RoomStatus, RevenueData)
- [ ] Pull-to-refresh functionality
- [ ] Loading and error states

## Module 2: Room Management (UI/UX Prototype Complete)
- [x] Room Status screen with calendar grid view
- [x] Room Detail screen with booking information
- [x] Status color coding and legend
- [x] Guest information display
- [x] Financial information display
- [ ] Room list screen with filtering
- [ ] Booking status update functionality
- [ ] Guest check-in/check-out actions

## Module 3: Financial Tracking (UI/UX Prototype Complete)
- [x] Expenses screen with mock data
- [x] Category breakdown
- [x] Expense list with details
- [x] Reports screen with analytics
- [x] Quick stats dashboard
- [ ] Revenue tracking screen
- [ ] Payment status management
- [ ] Transaction history with filtering

## Module 4: Settings (UI/UX Prototype Complete)
- [x] Settings screen with all options
- [x] Account management section
- [x] Notification preferences
- [x] Display settings
- [x] Data management options
- [x] About app section
- [ ] Settings persistence
- [ ] Theme switching implementation

## Infrastructure
- [x] Platform focus: Android & Windows (Platform-independent architecture for future Web support)
- [x] Theme configuration (colors, typography)
- [x] Reusable components
- [x] Navigation structure
- [x] Responsive layout for different screen sizes
- [ ] Google Sheets API integration
- [ ] Apps Script backend endpoints
- [ ] Authentication/Authorization
- [ ] Error handling and logging
- [ ] Data caching strategy
- [ ] Offline support (if needed)

## Phase 3: UI Style Overhaul theo Mockup (Hoàn thành)
- [x] Cập nhật bảng màu Design System theo mockup (tông nâu/be luxury, sidebar tối)
- [x] Layout responsive: sidebar cho desktop/tablet, bottom nav cho mobile
- [x] Dashboard: 4 thẻ chỉ số (Doanh thu đã nhận, Chờ nhận, Tổng chi phí, Lợi nhuận) + % so với hôm qua
- [x] Dashboard: biểu đồ doanh thu 7 ngày qua
- [x] Dashboard: donut chart trạng thái phòng hôm nay
- [x] Dashboard: biểu đồ doanh thu theo nguồn đặt phòng
- [x] Room Status: bảng lịch màu theo phòng và ngày (Đã bán/Đã đặt/Trống/Đặt trước)
- [x] Kiểm thử responsive trên Desktop/Tablet/Mobile

## Phase 4: Clean Architecture Refactor (Hoàn thành)
- [x] lib/core — config (APP_CONFIG khớp CONFIG.GS) + utils thuần
- [x] lib/theme — re-export Colors, Spacing, Typography, Shadows, useResponsive
- [x] lib/models — RoomDayEntry (đủ 14 cột sheet Room), Expense, MonthlyOverview, RoomPerformance, SourceRevenue
- [x] lib/services — RoomService, ExpenseService, ReportService (mock, interface sẵn cho Apps Script)
- [x] lib/widgets — barrel UI components dùng chung
- [x] lib/dashboard, lib/rooms, lib/expenses, lib/reports, lib/settings — module screens
- [x] app/(tabs)/*.tsx thành thin route files
- [x] TypeScript 0 lỗi, 6 màn hình render OK
- [ ] Refactor screens dùng services/models khi kết nối Apps Script backend

## Testing & Deployment
- [ ] Unit tests for services
- [ ] Integration tests
- [ ] UI/UX testing on Android and Windows
- [ ] Performance optimization
- [ ] Build and deployment setup
- [ ] APK generation for Android
- [ ] Windows executable build
