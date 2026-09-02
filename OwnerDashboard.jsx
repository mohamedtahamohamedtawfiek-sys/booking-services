import React from 'react'

export default function OwnerDashboard() {
  return <>
  <div dir="rtl" className="bg-[#faf8ff] font-sans text-[#131b2e] antialiased flex overflow-hidden h-screen">
      <aside className="bg-[#f2f3ff] h-screen sticky top-0 right-0 w-64 border-l border-[#bbcabf] flex flex-col gap-2 p-4 shrink-0 z-20">
        <div className="mb-6 px-2">
          <h1 className="text-3xl font-bold text-[#006c49] mb-6">Khedma</h1>
          <div className="flex items-center gap-2">
            <img
              alt="صورة مقدم الخدمة"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqk8cbCH5eAan5y8NcF_4xTD2OfXZRjLs_tc8YKhwozbNj-D3hU6ZyHAl5_dtRU73Y4WMxyWUcSZufP562-8IfiuFT2s8pCjH0yWkLH3DCBSPQMn3EjxWb-P_XO5dAo9p0HOfKdA2Zx4_qJ42o4NXF6jxBU9YN-iFgJiBwsHbSVtnMxKGwR7K-PVSVQt4i5Wu6b7r_3qNVAtF7_haWH_4jfsv0PagGOogOon9jJy8CaYvLUgRJFcxw"
            />
            <div>
              <h2 className="text-xl font-semibold text-[#131b2e]">أحمد محمد</h2>
              <p className="text-xs text-[#3c4a42] font-medium">مقدم خدمة معتمد</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
          <a
            className="flex items-center gap-2 px-4 py-2 bg-[#adedd3] text-[#306d58] rounded-lg font-bold text-sm group transition-all"
            href="#"
          >
            <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
            </svg>
            <span>لوحة التحكم</span>
          </a>

          <a
            className="flex items-center gap-2 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium group"
            href="#"
          >
            <svg className="w-5 h-5 text-[#3c4a42] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>حجوزاتي</span>
          </a>

          <a
            className="flex items-center gap-2 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium group"
            href="#"
          >
            <svg className="w-5 h-5 text-[#3c4a42] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM4 18h16" />
            </svg>
            <span>خدماتي</span>
          </a>

          <a
            className="flex items-center gap-2 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium group"
            href="#"
          >
            <svg className="w-5 h-5 text-[#3c4a42] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>المحفظة</span>
          </a>

          <a
            className="flex items-center gap-2 px-4 py-2 text-[#3c4a42] hover:bg-[#e2e7ff] transition-all rounded-lg text-sm font-medium group"
            href="#"
          >
            <svg className="w-5 h-5 text-[#3c4a42] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>الإعدادات</span>
          </a>
        </nav>

        <div className="mt-auto pt-4 pb-2">
          <button className="w-full flex items-center justify-center gap-2 bg-[#006c49] text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>إضافة خدمة جديدة</span>
          </button>
        </div>

        <div className="border-t border-[#bbcabf] pt-2 mt-2 flex flex-col gap-1">
          <a
            className="flex items-center gap-2 px-4 py-2 text-[#3c4a42] hover:bg-[#dae2fd] transition-all rounded-lg text-sm font-medium group"
            href="#"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>مركز المساعدة</span>
          </a>
          <a
            className="flex items-center gap-2 px-4 py-2 text-[#3c4a42] hover:bg-[#dae2fd] transition-all rounded-lg text-sm font-medium group"
            href="#"
          >
            <svg className="w-5 h-5 text-[#ba1a1a] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-[#ba1a1a]">تسجيل الخروج</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto h-screen bg-[#faf8ff] relative">
        <header className="flex justify-between items-center px-8 py-8">
          <div>
            <h2 className="text-4xl font-bold text-[#131b2e] tracking-tight">نظرة عامة</h2>
            <p className="text-base text-[#3c4a42] mt-1">إليك ملخص أداء خدماتك لهذا الشهر.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#faf8ff] border border-[#bbcabf] flex items-center justify-center text-[#3c4a42] hover:text-[#006c49] hover:border-[#006c49] transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="px-8 pb-8 flex flex-col gap-8 max-w-[1280px]">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] shadow-sm relative overflow-hidden group hover:border-[#006c49]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#dae2fd] flex items-center justify-center text-[#006c49] group-hover:bg-[#10b981] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-[#006c49] bg-[#006c49]/10 px-2 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +12%
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#3c4a42] mb-1">إجمالي الحجوزات</p>
                <h3 className="text-3xl font-bold text-[#131b2e]">142</h3>
              </div>
            </div>

            <div className="bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] shadow-sm relative overflow-hidden group hover:border-[#855300]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#ffddb8]/40 flex items-center justify-center text-[#855300] group-hover:bg-[#e29100] group-hover:text-[#523200] transition-colors relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5a1.5 1.5 0 013 0v5.5m0-5.5a1.5 1.5 0 013 0v5.5" />
                  </svg>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#855300] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#855300]"></span>
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-[#3c4a42] mb-1">طلبات جديدة</p>
                <h3 className="text-3xl font-bold text-[#131b2e]">8</h3>
              </div>
            </div>

            <div className="bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] shadow-sm relative overflow-hidden group hover:border-[#2b6954]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#adedd3]/50 flex items-center justify-center text-[#2b6954] group-hover:bg-[#adedd3] group-hover:text-[#306d58] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-[#006c49] bg-[#006c49]/10 px-2 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +5%
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#3c4a42] mb-1">أرباح الشهر (ر.س)</p>
                <h3 className="text-3xl font-bold text-[#131b2e]">4,250</h3>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold text-[#131b2e]">الطلبات الحديثة</h3>
                <p className="text-xs text-[#3c4a42] mt-1">طلبات بانتظار المراجعة والقبول.</p>
              </div>
              <a className="text-sm font-medium text-[#006c49] hover:underline" href="#">عرض الكل</a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[#faf8ff] rounded-xl p-4 border border-[#bbcabf] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
                <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
                  <div className="relative">
                    <img
                      alt="صورة العميل"
                      className="w-14 h-14 rounded-full object-cover border border-[#bbcabf]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6-qwiJz_51fbLkRGxnQv27cmxwIBdvFxjiOJydZ7y441Vh82_low_3-pp-Gm0D23Np0wW5nVb_oBrDIMTXiQa76SApv-WofpviLLeEiB1OcxkJuCv-lqAynVrJjvmcQ5p1WT2iBfsUNh2MnhPirvFonR_pk2n7NUQSvR1r-I8OKfMEYmJztN6BEXawlTUVO-09p3PvF_QZDypGGo66fhPJGvWjQgsXkk2xCtlrVQTw-B7nFcd7lz"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e29100] rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#523200] fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V6h2v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#131b2e]">سارة عبدالله</h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-[#3c4a42]">
                      <span className="flex items-center gap-1 bg-[#eaedff] px-2 py-0.5 rounded-md text-[#131b2e]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        تنظيف شامل
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        غداً، 10:00 صباحاً
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        الرياض، حي الملقا
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0 border-t md:border-none border-[#bbcabf] pt-4 md:pt-0">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-1 text-sm font-medium px-6 py-2 rounded-lg bg-[#006c49] text-white hover:bg-[#006c49]/90 transition-colors shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    قبول
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-1 text-sm font-medium px-6 py-2 rounded-lg bg-[#faf8ff] border border-[#bbcabf] text-[#ba1a1a] hover:bg-[#ffdad6]/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    رفض
                  </button>
                </div>
              </div>

              <div className="bg-[#faf8ff] rounded-xl p-4 border border-[#bbcabf] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
                <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
                  <div className="relative">
                    <img
                      alt="صورة العميل"
                      className="w-14 h-14 rounded-full object-cover border border-[#bbcabf]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYcSqdxNbnCZM38dpo5uxNP7MqOfOLHTMYrM_mYpXarwDK6ewLaOJ7RAF6b6qTWVK_VfcxuveuTkSpOxsG3_Fz-6Wxyq7-t63LsTQjeLnzI07H69CDNNv2itYGQudyeLazLCywlEYoh7ePgisnnyy7rjbBrHAJXI9LEOqKiMeyOQe6iwdeZe0zgkwJ7SzU-i9m1CLxeTCaZneATTo-z0pGHdZDlVZcY0cBEbEvTHC8Uwgo1BEQf9Yt"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e29100] rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#523200] fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V6h2v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#131b2e]">خالد اليوسف</h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-[#3c4a42]">
                      <span className="flex items-center gap-1 bg-[#eaedff] px-2 py-0.5 rounded-md text-[#131b2e]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM4 18h16" />
                        </svg>
                        صيانة سباكة
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        اليوم، 04:30 مساءً
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        جدة، حي الشاطئ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0 border-t md:border-none border-[#bbcabf] pt-4 md:pt-0">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-1 text-sm font-medium px-6 py-2 rounded-lg bg-[#006c49] text-white hover:bg-[#006c49]/90 transition-colors shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    قبول
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-1 text-sm font-medium px-6 py-2 rounded-lg bg-[#faf8ff] border border-[#bbcabf] text-[#ba1a1a] hover:bg-[#ffdad6]/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    رفض
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </>
}
