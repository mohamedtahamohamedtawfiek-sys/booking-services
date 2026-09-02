
import React from 'react';

export default function CustomerDashboard() {
  return (
    <div dir="rtl" className="bg-[#faf8ff] text-[#131b2e] font-sans antialiased overflow-hidden">
      <div className="flex h-screen w-full">
        <nav className="hidden md:flex flex-col gap-2 p-4 bg-[#f2f3ff] h-screen sticky top-0 right-0 w-64 border-l border-[#bbcabf] shrink-0">
          <div className="flex flex-col items-center justify-center py-6 mb-4 border-b border-[#bbcabf]">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-[#dae2fd]">
              <img
                alt="صورة مقدم الخدمة"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPrDFQfstpsB_cNNbq1N0adQaGAB6K24cXwyN9JoR9XyopdZjiXglA6GN6sQ-IWxE-e2FNMYGasIff8CdtU8Ig45CqsdfPo3Qgim6zpSJkUci24dba13MghHR6pAh3eXUXQEUaAT-ulMJdcPruiXJGY_VDeY6MN9jIvH0u38H2DusPvQ6PwX84BK0h68-vBaTXlJy76V1buk3gqb4a7gw4CGyHVFCTm-s9M1aO1vuoAz9r6Vm2GQ8b"
              />
            </div>
            <h2 className="text-xl font-semibold text-[#131b2e]">أحمد محمد</h2>
            <p className="text-xs text-[#3c4a42] font-medium">مقدم خدمة معتمد</p>
          </div>

          <ul className="flex flex-col gap-1 flex-1">
            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 bg-[#adedd3] text-[#306d58] rounded-lg font-bold text-sm translate-x-[-4px] transition-transform"
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
                </svg>
                <span>لوحة التحكم</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium"
                href="#"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>حجوزاتي</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium"
                href="#"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM4 18h16" />
                </svg>
                <span>خدماتي</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium"
                href="#"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>المحفظة</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium"
                href="#"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>الإعدادات</span>
              </a>
            </li>
          </ul>

          <div className="mt-auto mb-4">
            <button className="w-full bg-[#006c49] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#10b981] transition-colors shadow-sm">
              إضافة خدمة جديدة
            </button>
          </div>

          <ul className="flex flex-col gap-1 pt-4 border-t border-[#bbcabf]">
            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium"
                href="#"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>مركز المساعدة</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium"
                href="#"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>تسجيل الخروج</span>
              </a>
            </li>
          </ul>
        </nav>

        <main className="flex-1 h-screen overflow-y-auto bg-[#faf8ff]">
          <div className="md:hidden bg-[#faf8ff] border-b border-[#bbcabf] p-4 flex items-center justify-between sticky top-0 z-10">
            <h1 className="text-2xl text-[#006c49] font-bold">Khedma</h1>
            <button className="text-[#131b2e]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="p-4 md:p-8 max-w-[1280px] mx-auto space-y-8">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-[#131b2e] mb-1">مرحباً بك، أحمد</h1>
                <p className="text-lg text-[#3c4a42]">إليك نظرة عامة على نشاطك وحجوزاتك اليوم.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 bg-[#faf8ff] border border-[#bbcabf] text-[#131b2e] px-4 py-2 rounded-lg hover:bg-[#eaedff] transition-colors text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>تحميل التقرير</span>
              </button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] flex flex-col justify-between shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] relative overflow-hidden group hover:border-[#4edea3] transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#006c49]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-xl font-semibold text-[#3c4a42]">الحجوزات القادمة</h3>
                  <div className="w-10 h-10 rounded-full bg-[#adedd3] text-[#306d58] flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="text-4xl font-bold text-[#131b2e]">12</span>
                  <span className="text-xs font-medium text-[#006c49] flex items-center mt-1">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +2 عن الأسبوع الماضي
                  </span>
                </div>
              </div>

              <div className="bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] flex flex-col justify-between shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] relative overflow-hidden group hover:border-[#b0f0d6] transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2b6954]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-xl font-semibold text-[#3c4a42]">الخدمات المكتملة</h3>
                  <div className="w-10 h-10 rounded-full bg-[#10b981] text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="text-4xl font-bold text-[#131b2e]">148</span>
                  <span className="text-xs font-medium text-[#3c4a42] flex items-center mt-1">
                    إجمالي هذا الشهر
                  </span>
                </div>
              </div>

              <div className="bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] flex flex-col justify-between shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] relative overflow-hidden group hover:border-[#ffddb8] transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#855300]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-xl font-semibold text-[#3c4a42]">رصيد المحفظة</h3>
                  <div className="w-10 h-10 rounded-full bg-[#e29100] text-[#523200] flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="text-4xl font-bold text-[#131b2e]">
                    2,450 <span className="text-xl font-normal text-[#3c4a42]">ر.س</span>
                  </span>
                  <span className="text-xs font-medium text-[#3c4a42] flex items-center mt-1">
                    متاح للسحب
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-[#131b2e]">أحدث الحجوزات القادمة</h2>
                  <a className="text-sm font-medium text-[#006c49] hover:underline" href="#">عرض الكل</a>
                </div>

                <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#eaedff] flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt="تنظيف شامل للمنزل"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4L1mSsAPaS3UKE1cwNHxu9rBemVUn3TpRTEZhukEHWLKEkWMJQU0l76zE0MFpt8qmWpgt5Ynzyc98K-FH0z6XiL_6kBupqWnVoWneQXlHN8S2xgTEmtvTVy5Kz3e0QVMUWXDPzykh1--TfEOdgL3dvDyLQ4u6ZbqxPcmZPDSSqYbIQ5Vv_CLQlZQ5n0n_jPYv9fy1ag4r2-IoVW3uhp9bNiRX2TAeMVgYPup3Vu_rH_m_rVxqUuf"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#131b2e]">تنظيف شامل للمنزل</h4>
                      <p className="text-xs text-[#3c4a42] flex items-center gap-1 mt-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>24 أكتوبر 2026 - 10:00 صباحاً</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
                    <span className="px-3 py-1 rounded-full bg-[#adedd3]/30 text-[#2b6954] font-medium text-xs border border-[#adedd3]">
                      مؤكد
                    </span>
                    <button className="p-2 text-[#3c4a42] hover:text-[#006c49] hover:bg-[#eaedff] rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#eaedff] flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt="صيانة سباكة طارئة"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gQZXhTx_-v14wxdLp-OT_bjIImZc3sPwPQm72RFmP6ivVfw-mU36LtBdvvmnirdqEBwC9Db8enAB57Z2TpkbLeuXBtrBIjZ-EwegD8CrOYU40zUVbDywWHeDChCNN_P_QCV-ekwLiL769B7yhz9WnHS_2EfwHvq2vJm7dWgNI2KbF8WfKzZw5Bz23MqNTcAGNhQ9mfiifXZu6DIzVKSq2WzLEqzu5uNDZn6HygciPsR9sbwQ5QIg"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#131b2e]">صيانة سباكة طارئة</h4>
                      <p className="text-xs text-[#3c4a42] flex items-center gap-1 mt-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>25 أكتوبر 2026 - 02:30 مساءً</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
                    <span className="px-3 py-1 rounded-full bg-[#e29100]/30 text-[#855300] font-medium text-xs border border-[#e29100]">
                      قيد الانتظار
                    </span>
                    <button className="p-2 text-[#3c4a42] hover:text-[#006c49] hover:bg-[#eaedff] rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#eaedff] flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt="تأسيس كهرباء الغرفة"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiv8GbuKpHx7NwPUdHFQYfXjia5KzlAlkym_FDUepRz8D2ot2fLyB-ObUwZ8u4tp1UbBE4LaY1pBOMeQ50AL4Yj_tR-bLW1z1hPfkj1U18MSzvVbiTM11rri4uxLXTHytXO-82JmisWtSwSrU21iQgPBgy7gp0BoBQnRDSX4hkKaSlZ_Hkq9P08hT2Q6CZctkIyjIflofm0jJOz-nkPMtcKMTXI9IF9qTFsPYBF-xcMPcNRMTNm_HJ"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#131b2e]">تأسيس كهرباء الغرفة</h4>
                      <p className="text-xs text-[#3c4a42] flex items-center gap-1 mt-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>28 أكتوبر 2026 - 09:00 صباحاً</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
                    <span className="px-3 py-1 rounded-full bg-[#adedd3]/30 text-[#2b6954] font-medium text-xs border border-[#adedd3]">
                      مؤكد
                    </span>
                    <button className="p-2 text-[#3c4a42] hover:text-[#006c49] hover:bg-[#eaedff] rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </section>

              <aside className="lg:col-span-1">
                <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl p-6 sticky top-6">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#bbcabf]">
                    <h2 className="text-xl font-bold text-[#131b2e]">أحدث الإشعارات</h2>
                    <span className="w-6 h-6 rounded-full bg-[#ba1a1a] text-white flex items-center justify-center text-xs font-medium">
                      3
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-2 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#eaedff] flex items-center justify-center flex-shrink-0 text-[#006c49]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base text-[#131b2e]">تم تأكيد حجزك لخدمة "تنظيف شامل" بنجاح.</p>
                        <span className="text-xs text-[#3c4a42] mt-1 block">منذ ساعتين</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#eaedff] flex items-center justify-center flex-shrink-0 text-[#855300]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base text-[#131b2e]">يرجى تحديث بيانات الدفع الخاصة بك لضمان استمرار الخدمة.</p>
                        <span className="text-xs text-[#3c4a42] mt-1 block">أمس، 04:30 مساءً</span>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#eaedff] flex items-center justify-center flex-shrink-0 text-[#2b6954]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base text-[#131b2e]">تم إضافة 150 ر.س إلى محفظتك كاسترداد نقدي.</p>
                        <span className="text-xs text-[#3c4a42] mt-1 block">22 أكتوبر 2026</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 border border-[#bbcabf] text-[#131b2e] hover:bg-[#eaedff] rounded-lg text-sm font-medium transition-colors">
                    عرض كل الإشعارات
                  </button>
                </div>
              </aside>
            </div>
          </div>
          <div className="h-8"></div>
        </main>
      </div>
    </div>
  );
}