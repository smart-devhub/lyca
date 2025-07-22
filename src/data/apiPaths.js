export const API_PATHS = {
  // ------------------------------- DASHBOARD ------------------------------- //
  MONTHLY_CHART_DETAILS: '/home/get-details',
  OBD_MONTHLY_CHART_DETAILS: '/home/obd-monthly-usage-detail',
  GET_DASHBOARD: '/api-dashboard/get-dashboard',
  GET_PACKAGE_EXPIRY: '/api-dashboard/get-package-history',
  GET_WEEKLY_USAGE: '/api-dashboard/get-weekly-package-history',

  // ------------------------------- SMS-MANAGEMENT ------------------------------- //
  SMS_MANAGEMENT_SEND_INSTANT_SMS: '/sms-management/send-instant-sms',
  SMS_MANAGEMENT_AUTO_ASSIGN_SMS: '/sms-management/auto-assign-sms',
  SMS_MANAGEMENT_GET_PACKAGES: '/sms-management/get-packages-name-dropdown',
  SMS_MANAGEMENT_GET_SCHEDULED_SMS: '/sms-management/get-scheduled-sms',
  SMS_MANAGEMENT_ADD_SCHEDULED_SMS: '/sms-management/send-scheduled-sms',
  SMS_MANAGEMENT_EDIT_SCHEDULED_SMS: '/sms-management/update-scheduled-sms',
  SMS_MANAGEMENT_DELETE_SCHEDULED_SMS: '/sms-management/delete-scheduled-sms',
  // ------------------------------- VOICE-OBD-MANAGEMENT ------------------------------- //
  VOICE_OBD_GET_AUDIO_DETAIL: '/voice-obd/upload-audio-file/get-audio-detail',
  VOICE_OBD_GET_CAMPAIGNS: '/voice-obd/obd-campaign/get-campaign',
  VOICE_OBD_MANAGE_CAMPAIGN: '/voice-obd/obd-campaign/manage-campaign',
  VOICE_OBD_UPLOAD_AUDIO: '/voice-obd/upload-audio-file/upload',
  VOICE_OBD_ADD_SCHEDULE_OBD_INPUT:
    '/voice-obd/scheduled-obd-user/campaign-start',
  VOICE_OBD_GET_SCHEDULE_USER_INPUT:
    '/voice-obd/scheduled-obd/view-schedule-obd',
  VOICE_OBD_DELETE_SCHEDULE_USER_INPUT:
    '/voice-obd/scheduled-obd/delete-schedule-obd',
  VOICE_OBD_EDIT_SCHEDULE_USER_INPUT:
    '/voice-obd/scheduled-obd/update-schedule-obd',

  // ------------------------------- MANAGE-PHONEBOOK ------------------------------- //
  // ------------------------------- OBD-REPORTS ------------------------------- //
  OBD_USER_SELECTED_KEY: '/obd-report/selected-key-dropdown',
  OBD_GET_POLLS_SURVEY_REPORT: '/obd-report/get-polls-survey-obd-reports',
  OBD_DAILY_OBD_USAGE_REPORT: '/obd-report/get-daily-obd-usage-report',
  OBD_MASKING_DAILY_REPORT: '/obd-report/get-masking-daily-obd-report',
  OBD_CAMPAIGN_DAILY_WISE_REPORT: '/obd-report/get-campaign-wise-daily-report',
  OBD_PREPAID_PACKAGE_HISTORY: '/obd-report/get-prepaid-obd-package-history',
  OBD_CAMPAIGN_WISE_MONTHLY_REPORT:
    '/obd-report/get-campaign-wise-monthly-report',
  OBD_CDR_REPORT: '/obd-report/get-cdr-report',
  OBD_GET_MASKING_LIST: '/obd-report/get-masking-list-report',
  GET_OBD_CAMPAIGN: '/obd-report/get-campaigns-name',
  // ------------------------------- MANAGE-TEMPLATES ------------------------------- //
  MANAGE_TEMPLATE_GET_TEMPLATE: '/message-template/get-all-message-template',
  MANAGE_TEMPLATE_ADD_TEMPLATE: '/message-template/save-message-template',
  MANAGE_TEMPLATE_EDIT_TEMPLATE: '/message-template/update-message-template',
  MANAGE_TEMPLATE_DELETE_TEMPLATE: '/message-template/delete-message-template',
  // ------------------------------- BUNDLES-SUBSCRIPTION ------------------------------- //
  // ------------------------------- MANAGE-PHONEBOOK ------------------------------- //
  // ------------------------------- MANAGE-OBD ------------------------------- //
  // ------------------------------- MANAGE-USER ------------------------------- //
  // ------------------------------- MANAGE-ROLES ------------------------------- //
  // ------------------------------- MANAGE-SUB-ACCOUNTS ------------------------------- //
  POSTPAID_SPECIAL_PACKAGE_LIST:
    '/assign-sms-quota/get-postpaid-special-package-list',
  POSTPAID_REVERT_SPECIAL_PACKAGE_LIST:
    '/assign-sms-quota/get-child-packages-postpaid',
  GET_CHILD_USERS: '/assign-sms-quota/get-child-user',
  ASSIGN_PACKAGE_TO_USER: '/assign-sms-quota/get-child-user',
  REVERT_PACKAGE: '/assign-sms-quota/revert-payment',
  INSERT_ASSIGNED_QUOTA: '/assign-sms-quota/insert-assigned-quota',
  // ------------------------------- REPORTS ------------------------------- //
  CURRENT_BROADCAST_LOGS: '/broadcast-logs/current-broadcast-logs',
  ARCHIVED_BROADCAST_LOGS: 'broadcast-logs/archived-broadcast-logs',
  BROADCAST_SUMMARY: '/broadcast-summary/get-broadcast-summary',
  DOWNLOAD_REPORT: '/report/download',
  DOWNLOAD_INVOICE_HISTORY: '/invoice/summary-download',
  // ------------------------------- SUB-USERS-REPORTS ------------------------------- //
  PACKAGE_HISTORY: '/package-history/get-package-history-by-user',
  SUB_USER_CURRENT_BROADCAST_LOGS:
    '/sub-user-broadcast-logs/sub-user-current-broadcast-logs',
  SUB_USER_BROADCAST_LOGS_BY_USER:
    '/broadcast-logs/get-archived-broadcast-logs-by-user',
  DOWNLOAD_ARCHIVED_BROADCAST_LOGS:
    'broadcast-logs/download-archived-broadcast-logs',
  DOWNLOAD_SUB_USER_ARCHIVED_BROADCAST_LOGS:
    'broadcast-logs/download-sub-user-archived-broadcast-logs',
};
