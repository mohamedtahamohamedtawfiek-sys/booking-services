import React from 'react'
export default function ServiceDetailes() {
  return <>
    <div dir="rtl" className="bg-[#faf8ff] text-[#131b2e] font-sans antialiased min-h-screen flex flex-col">

      <main className="flex-grow flex flex-col items-center pb-16">
        <section className="w-full max-w-[1280px] px-4 md:px-8 mt-6 md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h1 className="text-2xl md:text-3xl font-semibold text-[#131b2e]">
                    تنظيف شامل للمنزل - باقة احترافية
                  </h1>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#faf8ff] hover:bg-[#dae2fd] text-[#3c4a42] border border-[#bbcabf] transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-[#3c4a42] text-base mt-2">
                  <div className="flex items-center gap-1 text-[#2b6954] font-medium">
                    <svg className="w-5 h-5 fill-current text-[#e29100]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>4.8 (124 تقييم)</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-[#bbcabf]"></span>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>الرياض، يغطي جميع الأحياء</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-[#bbcabf]"></span>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>4 - 6 ساعات</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-4 h-[300px] md:h-[500px] rounded-xl overflow-hidden">
                <div className="col-span-4 md:col-span-3 row-span-2 relative group cursor-pointer">
                  <img
                    alt="Service main image"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiC920wuDxNHB_KH-2wSqW_hy8ejdRsOh3qwF3TePrx5AmrSYbEdnlLR5nwP-EQbJqH6ReNzjIVFB8831Lh7EWwxHq19wBMmL4waYic362O30VscKlFTsBUUlrT9tniuXlUPyjiLGb-qheEenkx4gDMGy36csAg-nHdIYe6xagspQYUBEZjvhqARujUGevcuKJwjwWsE_AKX6ybn0cK1P-O8iIYgamoQ2kjliPW1nHe6hzJSetJOtV"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden group cursor-pointer">
                  <img
                    alt="Service gallery image 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRTTFk0CxdsQVyDn3-y327raSnHfUjC3kBJFXpkOaPBQzS-BMqhopuwts5miEYY8arauczm2rW3Dbh7UuFYLnR76GP4_u_CX7ob82KCAqp1Q8AilFVUb_UpPkgJObgw6y0hWeYCB4Ywh4vCco29sRUfZMGxfMN91fFaB5EgNc8Kumw7VTDHI5vgelwaC0Twfy7R3qXADQo5u-Iny9-ArHg1EKyAXBaLDSV-kO4vIvhS6ZwWoDOnYI4"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden group cursor-pointer">
                  <img
                    alt="Service gallery image 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtCygVksAuvXY_0Z1VenngxGq-Wyhk3qk4yZBxMLy74OvJICTxPrYzyGLdb8sWKMXzRVdFgvy2s5z6mnCH0zV-w0_lyVrpyc7Qj4S0_pwGOk3zWUbuZNN2leH3pzy0ATkPDQ19Vj-ird23Vngtx_dEZgrAgY9CtUr_rfAAGw8M_E6-YzlekOFoChiWwFgbqYQ10Ve-FWOzRn-Zz9si-8QApUnVfo8c-PNIwXeoesIxlIfCjelv8CAt"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute inset-0 bg-[#131b2e]/40 flex items-center justify-center">
                    <span className="text-white text-sm font-medium flex items-center gap-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      +5 صور
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf8ff] rounded-xl p-4 md:p-8 border border-[#bbcabf]">
                <h2 className="text-xl font-semibold text-[#131b2e] mb-4">وصف الخدمة</h2>
                <p className="text-base text-[#3c4a42] leading-relaxed mb-6">
                  نقدم خدمة تنظيف شاملة وعميقة لمنزلك باستخدام أفضل المعدات والمواد الآمنة. تشمل خدمتنا تنظيف جميع الغرف، الحمامات، المطبخ، وتلميع الأرضيات والأسطح. نحرص على أدق التفاصيل لضمان بيئة صحية ونظيفة لك ولعائلتك.
                </p>
                <h3 className="text-sm text-[#131b2e] font-semibold mb-2">ماذا تتضمن الخدمة؟</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  <li className="flex items-start gap-2 text-[#3c4a42] text-base">
                    <svg className="w-5 h-5 text-[#006c49] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    تنظيف وتلميع جميع الأرضيات
                  </li>
                  <li className="flex items-start gap-2 text-[#3c4a42] text-base">
                    <svg className="w-5 h-5 text-[#006c49] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    تعقيم كامل للحمامات
                  </li>
                  <li className="flex items-start gap-2 text-[#3c4a42] text-base">
                    <svg className="w-5 h-5 text-[#006c49] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    إزالة الغبار عن جميع الأسطح والأثاث
                  </li>
                  <li className="flex items-start gap-2 text-[#3c4a42] text-base">
                    <svg className="w-5 h-5 text-[#006c49] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    تنظيف المطبخ من الداخل والخارج
                  </li>
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 md:p-8 border border-[#bbcabf] shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Provider Avatar"
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#faf8ff]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQi9wPIuSKCKMCtB5xW4PXyJC6ixOquxnufSNiU7JTXm7rwQi3ULVRc9pkPOiqe9Eyyd89aahvg6U0pR8tbTNdK-12Y5uR2vKXXjbRHPehc7EOeXy8WlXYPnJ-3knEnQYs9p1Kfgl4diMhjkAfUKnB_9NAmuzqz2_Dt7TuZsdgWO4t_KSKnxQZd8cdvzyw9qprTwtzbHRTpaNPAPjO-1gzkBJWTKHFqSCDCBtcaUTZyCGSE-SGNkK3"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#131b2e] flex items-center gap-1">
                        شركة النظافة المتميزة
                        <svg className="w-5 h-5 text-[#006c49] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </h3>
                      <p className="text-base text-[#3c4a42]">عضو منذ 2021 • 500+ مهمة مكتملة</p>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-[#006c49] border border-[#bbcabf] hover:bg-[#dae2fd] px-6 py-2 rounded-lg transition-colors duration-200">
                    تواصل مع المزود
                  </button>
                </div>
                <p className="text-base text-[#3c4a42] leading-relaxed">
                  نحن شركة متخصصة في تقديم خدمات التنظيف العميق والصيانة المنزلية بأعلى معايير الجودة. نضم فريقاً مدرباً ومجهزاً بأحدث التقنيات لضمان رضا عملائنا.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 relative mt-8 lg:mt-0">
              <div className="sticky top-[100px] bg-[#faf8ff] rounded-xl p-6 border border-[#bbcabf] shadow-[0_10px_15px_-3px_rgba(15,23,42,0.05)] flex flex-col gap-4">
                <div className="flex justify-between items-end border-b border-[#bbcabf] pb-4">
                  <div>
                    <span className="block text-sm text-[#3c4a42] mb-1">سعر الخدمة يبدأ من</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#131b2e]">250</span>
                      <span className="text-base text-[#3c4a42]">ر.س</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <div className="flex justify-between text-base text-[#3c4a42]">
                    <span>المدة المتوقعة:</span>
                    <span className="font-medium text-[#131b2e]">4 - 6 ساعات</span>
                  </div>
                  <div className="flex justify-between text-base text-[#3c4a42]">
                    <span>رسوم الزيارة:</span>
                    <span className="font-medium text-[#131b2e]">مشمولة</span>
                  </div>
                </div>
                <button className="w-full bg-[#006c49] hover:bg-[#2b6954] text-white text-lg font-semibold py-2 rounded-lg transition-colors duration-200 mt-2 flex items-center justify-center gap-2 shadow-sm h-12">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  احجز الآن
                </button>
                <p className="text-center text-xs text-[#3c4a42] mt-1">
                  لن يتم خصم المبلغ حتى يتم تأكيد الموعد
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
}
