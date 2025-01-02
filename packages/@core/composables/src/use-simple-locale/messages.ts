export type Locale = 'en-US' | 'vi-VN' | 'zh-CN';

export const messages: Record<Locale, Record<string, string>> = {
  'en-US': {
    cancel: 'Cancel',
    collapse: 'Collapse',
    confirm: 'Confirm',
    expand: 'Expand',
    reset: 'Reset',
    submit: 'Submit',
  },
  'vi-VN': {
    cancel: 'Hủy',
    collapse: 'Thu Gọn',
    confirm: 'Xác Nhận',
    expand: 'Mở Rộng',
    reset: 'Đặt Lại',
    submit: 'Gửi',
  },
  'zh-CN': {
    cancel: '取消',
    collapse: '收起',
    confirm: '确认',
    expand: '展开',
    reset: '重置',
    submit: '提交',
  },
};

export const getMessages = (locale: Locale) => messages[locale];
