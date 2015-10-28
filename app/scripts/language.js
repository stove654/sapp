'use strict';

/**
 * @ngdoc function
 * @name sappApp.config:Config language
 * @description
 * # Config language
 * Controller of the sappApp
 */
angular.module('sappApp')
  //Config languages
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', {
        EMAIL_ADDRESS: 'Email address',
        PASSWORD: 'Password',
        LOGIN: 'Login',
        REGISTER_ADMIN: 'Register',
        ADMIN: 'Admin',
        MENU: 'Menu',
        NAME_CATEGORY: 'Name category',
        STAFF: 'Staff manager',
        FULL_NAME: 'Full name',
        EMAIL: 'Email',
        ROLE: 'Role',
        ADD: 'Add',
        MANAGER: 'Manager',
        CASHIER: 'Cashier',
        WAITER: 'Waiter',
        BAR: 'Bar',
        ACCOUNTANT: 'Accountant',
        COLS: 'Cols',
        SORT_BY: 'Sort by',
        NAME: 'Name',
        DATE: 'Date',
        SEARCH_FOOD: 'Search food',
        CANCEL: 'Cancel',
        NOTE: 'Note',
        TABLE: 'Table',
        CREATE_NEW_ORDER: 'Create new order',
        PRINT: 'Print',
        TAXES: 'Taxes',
        DISCOUNTS: 'Discounts',
        AMOUNT: 'Amount',
        RATE: 'Rate',
        TOTAL: 'Total',
        TOTAL_TAXES: 'Total taxes',
        TOTAL_DISCOUNTS: 'Total discounts',
        RESEND: 'Resend',
        RUNNING: 'Running',
        TAB_CREATE: 'Tab <i class="mdi mdi-library-plus"></i> to create new order',
        OR: 'or',
        TAB_SELECT: 'Tab <i class="mdi mdi-basket"></i> to see orders',
        WITHDRAW: 'Withdraw',
        DEPOSIT: 'Deposit',
        BALANCE: 'Balance',
        NO_TABLE: 'Not selected table',
        TENDER: 'Tender',
        CHANGE_MONEY: 'Change',
        UPDATE: 'Update',
        DELETE: 'Delete',
        CASH: 'Cash',
        CARD: 'Card',
        HOLD: 'Hold',
        LANGUAGE: 'Language',
        WELCOME: 'Welcome',
        To: 'to',
        PLEASE_SIGN_IN: 'Please sign in to your account',
        SIGN_IN: 'Sign in',
        CREATE_ACCOUNT: 'Create an account',
        FORGOT_PASS: 'Forgot your password?',
        RE_PASSWORD: 'Re password?',
        CREATE_YOUR_ACCOUNT: 'Create your account',
        ACTIVE: 'Active',
        ADD_STAFF: 'Add staff',
        STAFF_LIST: 'Staffs list',
        ARE_YOU_SURE: 'Are you sure?',
        NO_CANCEL_PL:'No, cancel plx!',
        YES_DELETE:'Yes, delete it!',
        FREE_APP:'Free Application',
        PASS_FAIL:'password is required!',
        ENTER_PASS:'Enter password',
        ADD_FOOD:'Add new food',
        IMAGE:'Photo',
        PRICE:'PRICE',
        ADD_CATEGORIES:'Add category',
        SAVE_CATEGORIES:'Save categories',
        CATEGORIES: "Categories",
        OPTIONS: "Options",
        URL_PHOTO: "Url photo",
        DESCRIPTION: "Description",
        PERCENT: "Percent",
        DISCOUNT_LIST: "Discounts list",
        ADD_DISCOUNT: "Add discount",
        TAX_LIST: "Taxes list",
        ADD_TAX: "Add tax",
        ADD_TABLE: "Add table",
        TABLE_LIST: "Tables list",
        CATEGORIES_MANAGER: "Categories manager",
        EDIT_FOOD: "Edit menu",
        SHOW_MENU: "Show menu",
        ADD_CREATE: "Add & create new",
        ADD_NEW_FOOD: "Add new food",
        ADD_NEW_CATEGORY: "Add new ",
      })
      .translations('vi', {
        EMAIL_ADDRESS: 'Địa chỉ email',
        PASSWORD: 'Mật khẩu',
        LOGIN: 'Đăng nhập',
        REGISTER_ADMIN: 'Đăng ký',
        ADMIN: 'Quản trị',
        MENU: 'Menu',
        NAME_CATEGORY: 'Tên category',
        STAFF: 'Quản lý nhân viên',
        FULL_NAME: 'Tên đầy đủ',
        EMAIL: 'Email',
        ROLE: 'Chức vụ',
        ADD: 'Thêm',
        MANAGER: 'Quản lý',
        CASHIER: 'Thu ngân',
        WAITER: 'Phục vụ',
        BAR: 'Nhân viên bar',
        ACCOUNTANT: 'Kế toán',
        COLS: 'Số cột',
        SORT_BY: 'Sắp xếp theo',
        NAME: 'Tên',
        DATE: 'Ngày',
        SEARCH_FOOD: 'Tìm món',
        CANCEL: 'Hủy',
        NOTE: 'Ghi chú',
        TABLE: 'Bàn',
        CREATE_NEW_ORDER: 'Tạo order mới',
        PRINT: 'In',
        TAXES: 'Thuế',
        DISCOUNTS: 'Giảm giá',
        AMOUNT: 'Tiền',
        RATE: 'Phần trăm',
        TOTAL: 'Tổng tiền',
        TOTAL_TAXES: 'Tổng tiền thuế',
        TOTAL_DISCOUNTS: 'Tổng tiền giảm giá',
        RESEND: 'Gửi lại',
        RUNNING: 'Đang hoạt động',
        TAB_CREATE: 'Chọn <i class="mdi mdi-library-plus"></i> để tạo mới order',
        OR: 'hoặc',
        TAB_SELECT: 'Chọn <i class="mdi mdi-basket"></i> để xem danh sách orders',
        WITHDRAW: 'Rút tiền',
        DEPOSIT: 'Gửi tiền',
        BALANCE: 'Số dư',
        NO_TABLE: 'Chưa chọn bàn',
        TENDER: 'Khách đưa',
        CHANGE_MONEY: 'Trả lại',
        UPDATE: 'Cập nhật',
        DELETE: 'Xóa',
        CASH: 'Tiền mặt',
        CARD: 'Thẻ',
        HOLD: 'Nợ',
        LANGUAGE: 'Ngôn ngữ',
        WELCOME: 'Chào mừng',
        TO: 'đến',
        PLEASE_SIGN_IN: 'Vui lòng đăng nhập tài khoản của bạn',
        SIGN_IN: 'Đăng nhập',
        CREATE_ACCOUNT: 'Tạo tài khoản',
        FORGOT_PASS: 'Lấy lại mật khẩu của bạn?',
        RE_PASSWORD: 'Nhập lại mật khẩu?',
        CREATE_YOUR_ACCOUNT: 'Tạo tài khoản của bạn?',
        ACTIVE: 'Kích hoạt',
        ADD_STAFF: 'Thêm nhân viên',
        STAFF_LIST: 'Danh sách nhân viên',
        ARE_YOU_SURE: 'Bạn có chắc không?',
        NO_CANCEL_PL: 'Không, vui lòng hủy!',
        YES_DELETE: 'Đồng ý, hãy xóa nó!',
        FREE_APP:'Ứng dụng miễn phí',
        PASS_FAIL:'Sai password!',
        ENTER_PASS:'Nhập password',
        ADD_FOOD:'Thêm món mới',
        IMAGE:'Ảnh',
        PRICE:'Giá',
        ADD_CATEGORIES:'Thêm danh mục mới',
        SAVE_CATEGORIES:'Lưu sắp xếp danh mục',
        CATEGORIES:'Danh mục',
        OPTIONS:'tùy chọn thêm',
        URL_PHOTO:'Đường dẫn ảnh',
        DESCRIPTION:'Mô tả ngắn',
        PERCENT:'Phần trăm',
        DISCOUNT_LIST: "Danh sách giảm giá",
        ADD_DISCOUNT: "Thêm giảm giá",
        TAX_LIST: "Danh sách thuế",
        ADD_TAX: "Thêm thuế",
        ADD_TABLE: "Thêm bàn",
        TABLE_LIST: "Danh sách bàn",
        CATEGORIES_MANAGER: "Quản lý danh mục",
        EDIT_FOOD: "Sửa menu",
        SHOW_MENU: "Hiển thị trên menu",
        ADD_CREATE: "Thêm và tạo mới",
        ADD_NEW_FOOD: "Thêm mới món ăn",
        ADD_NEW_CATEGORY: "Thêm danh mục mới",
      });
    $translateProvider.preferredLanguage('vi');
  })
