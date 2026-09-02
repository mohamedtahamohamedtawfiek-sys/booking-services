import React from 'react'

export default function BrowseServices() {
  return <>
  
  <div dir="rtl" className="bg-[#faf8ff] text-[#131b2e] font-sans antialiased min-h-screen flex flex-col">

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-8 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl font-semibold text-[#131b2e]">خدمات التنظيف والصيانة</h1>
            <div className="relative w-full md:w-80">
              <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-[#3c4a42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                className="w-full bg-[#faf8ff] border border-[#bbcabf] rounded-lg py-2 pr-10 pl-4 text-base focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors placeholder:text-[#3c4a42] outline-none" 
                placeholder="ابحث عن خدمة..." 
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <aside className="w-full md:w-72 shrink-0 bg-[#faf8ff] border border-[#bbcabf] rounded-xl p-6 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#bbcabf] pb-2">
              <h2 className="text-xl font-semibold text-[#131b2e]">تصفية النتائج</h2>
              <button className="text-xs cursor-pointer font-medium text-[#006c49] hover:underline">مسح الكل</button>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-[#131b2e] font-bold">نطاق السعر</h3>
              <div className="flex items-center gap-2">
                <input className="w-full bg-[#f2f3ff] border border-[#bbcabf] rounded-md py-1 px-3 text-base focus:border-[#006c49] outline-none" placeholder="من" type="number"/>
                <span className="text-[#3c4a42]">-</span>
                <input className="w-full bg-[#f2f3ff] border border-[#bbcabf] rounded-md py-1 px-3 text-base focus:border-[#006c49] outline-none" placeholder="إلى" type="number"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-[#131b2e] font-bold">التقييم</h3>
              <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded text-[#006c49] focus:ring-[#006c49] border-[#bbcabf]" type="checkbox"/>
                  <div className="flex text-[#ffb95f]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#3c4a42] group-hover:text-[#131b2e]">5 نجوم</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded text-[#006c49] focus:ring-[#006c49] border-[#bbcabf]" type="checkbox"/>
                  <div className="flex text-[#ffb95f]">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-[#bbcabf] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <span className="text-xs text-[#3c4a42] group-hover:text-[#131b2e]">4 نجوم فأكثر</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-[#131b2e] font-bold">المدة المتوقعة</h3>
              <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded text-[#006c49] focus:ring-[#006c49] border-[#bbcabf]" type="checkbox"/>
                  <span className="text-sm text-[#3c4a42] group-hover:text-[#131b2e]">أقل من ساعة</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded text-[#006c49] focus:ring-[#006c49] border-[#bbcabf]" type="checkbox"/>
                  <span className="text-sm text-[#3c4a42] group-hover:text-[#131b2e]">1 - 3 ساعات</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded text-[#006c49] focus:ring-[#006c49] border-[#bbcabf]" type="checkbox"/>
                  <span className="text-sm text-[#3c4a42] group-hover:text-[#131b2e]">أكثر من 3 ساعات</span>
                </label>
              </div>
            </div>

            <button className="w-full cursor-pointer bg-[#10b981] text-[#00422b] font-medium py-2 rounded-lg hover:bg-[#006c49] hover:text-white transition-colors mt-2">
              تطبيق الفلاتر
            </button>
          </aside>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
              <div className="relative h-48 w-full overflow-hidden bg-[#f2f3ff]">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="تنظيف شامل للشقق السكنية"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7CdRzKsSU-QrRuAnNtxh1CWIlL35reqrjL7ftEpv0f-pkW93dHokCJgdjZba1jY7u9A0vr7cc5a0XcgC8jPysXDz3iNIELS9X_4abXwnLYaA_qYUZ9FAYtjXwqf24AV_1ww6bb-9jet4fTShJ2gLB9Pd9eFLsIbg5ZKedMeHxwf883lXih20yrC_85hc4Lmu_s9V4l-X-epTrOSnlo_F--VT-vUi3pnx2CjBIz82h_HDnJqzUcmtz"
                />
                <div className="absolute top-2 right-2 bg-[#faf8ff]/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 border border-[#bbcabf]">
                  <svg className="w-4 h-4 text-[#ffb95f] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-xs font-medium text-[#131b2e]">4.9</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold text-[#131b2e] line-clamp-2 group-hover:text-[#006c49] transition-colors">
                  تنظيف شامل للشقق السكنية
                </h3>
                <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#bbcabf]">
                  <div className="w-8 h-8 rounded-full bg-[#dae2fd] overflow-hidden border border-[#bbcabf]">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="أحمد محمود"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx2nU4bnqmUGeCHcQuzZaz3YoI6CnXIXhWFc2TnNJx72Lw1WWWGXUi_Qm4QnGfqb0_hnCn86H3-TCdkCDQKLxAiVZ03EnTbxw2UwQZAH5DNQC0uI8SyqQGzJyjp98L5I8AOldBj2VdkIULTz0DKlJHQn7nDySc04BZG38hzk3FsxT0WhFFxhink3rQ4YStT0mc4botWxwpONt1WffGiTtdqLXRA-a_4D_wxpYua1M0HJ9zdFwpaEGr"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-[#131b2e]">أحمد محمود</span>
                    <span className="text-[10px] text-[#3c4a42]">مزود معتمد</span>
                  </div>
                  <div className="mr-auto text-left">
                    <span className="block text-xs text-[#3c4a42]">يبدأ من</span>
                    <span className="text-xl text-[#006c49] font-bold">150 ر.س</span>
                  </div>
                </div>
                <button className="w-full cursor-pointer mt-2 py-2 border border-[#bbcabf] text-[#006c49] font-medium rounded-lg group-hover:bg-[#006c49] group-hover:text-white transition-colors">
                  احجز الآن
                </button>
              </div>
            </div>

            <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
              <div className="relative h-48 w-full overflow-hidden bg-[#f2f3ff]">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="صيانة مكيفات سبليت دورية"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyRBppwR2FafWBSbUKuu6qpfHvBi482ueaVv5DJM47kzFsnbwhwSjWHdcbz2l5HE8sSxiUhkZcG4Cnbmxqt89kHMeFUiUe1dGQWNt9zk8Sz-kr8s6bOIMccPn1yPaT0UEqT7OwXncnrTW2A9cSo6Df0XEDEzMiqWQz4fWcnU0LC-9Ie8RtQ4xDq7G_eKsn-D8RD30X6yGCE-h2x34HaB1KGUDDeb_JEMaA9Ag_AemgYOOxm2ZtuufN"
                />
                <div className="absolute top-2 right-2 bg-[#faf8ff]/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 border border-[#bbcabf]">
                  <svg className="w-4 h-4 text-[#ffb95f] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-xs font-medium text-[#131b2e]">4.7</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold text-[#131b2e] line-clamp-2 group-hover:text-[#006c49] transition-colors">
                  صيانة مكيفات سبليت دورية
                </h3>
                <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#bbcabf]">
                  <div className="w-8 h-8 rounded-full bg-[#dae2fd] overflow-hidden border border-[#bbcabf]">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="شركة الصفا"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KD-naU_NhjWaoV3zdn4WVbaWEY9YX9lKWQn3v9w66ZL-LotbVgOLrWDZQ5A78xRWk_70LB7aRFYmsjBYiF0DcZLzCX7lHbEvt3NXlIorrMOpoLwdYQIBsSM8Mh2u67MLfJSbYsl5FYUKRtsgXXxa4R5-TNRW0zHwXWR3m6gRL6OG_GqhAjM9mxyLxBm3DTw6leKIwPxR0eI41RMaBb9qHy274tDi6fPRFWUmXbvxbwaiOHyRJkS7"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-[#131b2e]">شركة الصفا</span>
                    <span className="text-[10px] text-[#3c4a42]">مزود معتمد</span>
                  </div>
                  <div className="mr-auto text-left">
                    <span className="block text-xs text-[#3c4a42]">يبدأ من</span>
                    <span className="text-xl text-[#006c49] font-bold">80 ر.س</span>
                  </div>
                </div>
                <button className="w-full cursor-pointer mt-2 py-2 border border-[#bbcabf] text-[#006c49] font-medium rounded-lg group-hover:bg-[#006c49] group-hover:text-white transition-colors">
                  احجز الآن
                </button>
              </div>
            </div>

            <div className="bg-[#faf8ff] border border-[#bbcabf] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
              <div className="relative h-48 w-full overflow-hidden bg-[#f2f3ff]">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="إصلاح تسربات المياه وتأسيس السباكة"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4MJQn4vVDDNCEkOAZo21Q4WVkG0kDPHGT2iLTQSjIjQDKlQlTh8Dqv0Xja_OOI98jEfJO58C-_ROeOHpVZGSQ4ksbrQXi2qrbVJK1pmrsrlGbseuOZI00amCRN0-8JjwiYQBdFjzyCNdWM9XSP_AXdu3PDiFZXio6iIMibiI6pFkRBMsDaq4X_8Rq6OqC7G2LoPnTCtv5CR7CeYyjA4zjyljbhIpUAh1LgUrIwa2L0um1edG0-6F"
                />
                <div className="absolute top-2 right-2 bg-[#faf8ff]/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 border border-[#bbcabf]">
                  <svg className="w-4 h-4 text-[#ffb95f] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-xs font-medium text-[#131b2e]">4.8</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-semibold text-[#131b2e] line-clamp-2 group-hover:text-[#006c49] transition-colors">
                  إصلاح تسربات المياه وتأسيس السباكة
                </h3>
                <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#bbcabf]">
                  <div className="w-8 h-8 rounded-full bg-[#dae2fd] overflow-hidden border border-[#bbcabf]">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="مؤسسة الإتقان"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDY7OCcWCWyiqag0dQ2Li3f4LI3KKLzbSTlq097qKbPyN6_l-sA1olHk_kkckic4yNDHRlHLlgM_F7HrlsO5o2s-WVeVNL4TN0zPNwBlP4tAl2SOwh6jzddFPCIEH54cgES32LXj8TAd7nGwjtQQ70XwIil5V3u7FQqWoD6Yk_Omhfqr_IeAsxT2rfAa3AneteB0wPgwSqa0GwWvPr5GFZr8MHThwev1QKOisA_dym_9C_hLfhMPd"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-[#131b2e]">مؤسسة الإتقان</span>
                    <span className="text-[10px] text-[#3c4a42]">مزود معتمد</span>
                  </div>
                  <div className="mr-auto text-left">
                    <span className="block text-xs text-[#3c4a42]">يبدأ من</span>
                    <span className="text-xl text-[#006c49] font-bold">120 ر.س</span>
                  </div>
                </div>
                <button className="w-full cursor-pointer mt-2 py-2 border border-[#bbcabf] text-[#006c49] font-medium rounded-lg group-hover:bg-[#006c49] group-hover:text-white transition-colors">
                  احجز الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
}
