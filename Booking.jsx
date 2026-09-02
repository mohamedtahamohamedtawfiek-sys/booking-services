import React from 'react'

export default function Booking() {
  return <>
  <div dir="rtl" className="bg-[#faf8ff] text-[#131b2e] font-sans antialiased min-h-screen flex flex-col">

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-start py-12 px-8 md:px-16 max-w-[1280px] mx-auto w-full gap-8">
        {/* Progress Bar */}
        <div className="w-full max-w-3xl flex justify-between items-center relative mb-6">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#dae2fd] z-0"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#006c49] z-0 w-1/3"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#006c49] text-white flex items-center justify-center font-bold">1</div>
            <span className="text-xs text-[#006c49] font-bold">اختيار الموعد</span>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#dae2fd] text-[#3c4a42] flex items-center justify-center font-bold">2</div>
            <span className="text-xs text-[#3c4a42]">مراجعة الحجز</span>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#dae2fd] text-[#3c4a42] flex items-center justify-center font-bold">3</div>
            <span className="text-xs text-[#3c4a42]">الدفع</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Main Form Area */}
          <div className="flex-grow bg-white border border-[#bbcabf] rounded-xl p-8 shadow-sm flex flex-col gap-6">
            <h1 className="text-xl font-semibold text-[#131b2e]">حدد وقت وتاريخ الخدمة</h1>
            
            {/* Calendar */}
            <div className="border border-[#bbcabf] rounded-lg p-4 bg-[#faf8ff]">
              <div className="flex justify-between items-center mb-4">
                <button className="p-1 rounded hover:bg-[#dae2fd]">
                  <svg className="w-5 h-5 text-[#3c4a42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <h2 className="text-sm font-medium text-[#131b2e]">أكتوبر 2026</h2>
                <button className="p-1 rounded hover:bg-[#dae2fd]">
                  <svg className="w-5 h-5 text-[#3c4a42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#3c4a42] mb-2">
                <div>أحد</div><div>إثن</div><div>ثلا</div><div>أرب</div><div>خمي</div><div>جمع</div><div>سبت</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-base text-[#131b2e]">
                <div></div><div></div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">1</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">2</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">3</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer text-[#6c7a71]">4</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer text-[#6c7a71]">5</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">6</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">7</div>
                <div className="p-2 rounded bg-[#006c49] text-white font-bold cursor-pointer">8</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">9</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">10</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer text-[#6c7a71]">11</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer text-[#6c7a71]">12</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">13</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">14</div>
                <div className="p-2 rounded hover:bg-[#dae2fd] cursor-pointer">15</div>
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="text-sm font-medium text-[#131b2e] mb-2">الأوقات المتاحة (8 أكتوبر)</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                <button className="py-2 px-4 border border-[#bbcabf] rounded-lg text-[#131b2e] hover:border-[#006c49] hover:text-[#006c49] transition-colors text-center text-base">09:00 ص</button>
                <button className="py-2 px-4 border border-[#bbcabf] rounded-lg text-[#6c7a71] bg-[#dae2fd] cursor-not-allowed text-center text-base">10:00 ص</button>
                <button className="py-2 px-4 border-2 border-[#006c49] bg-[#10b981]/10 rounded-lg text-[#006c49] font-bold text-center text-base">11:00 ص</button>
                <button className="py-2 px-4 border border-[#bbcabf] rounded-lg text-[#131b2e] hover:border-[#006c49] hover:text-[#006c49] transition-colors text-center text-base">01:00 م</button>
                <button className="py-2 px-4 border border-[#bbcabf] rounded-lg text-[#131b2e] hover:border-[#006c49] hover:text-[#006c49] transition-colors text-center text-base">02:00 م</button>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-[#131b2e] mb-1" htmlFor="notes">ملاحظات إضافية لمقدم الخدمة</label>
              <textarea 
                className="w-full border border-[#bbcabf] rounded-lg p-4 bg-[#faf8ff] text-[#131b2e] focus:ring-[#006c49] focus:border-[#006c49] text-base outline-none" 
                id="notes" 
                placeholder="أضف أي تفاصيل خاصة هنا..." 
                rows={3}
              />
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-4">
            <div className="bg-white border border-[#bbcabf] rounded-xl p-6 shadow-sm flex flex-col gap-4 sticky top-8">
              <h2 className="text-xl font-semibold text-[#131b2e] border-b border-[#bbcabf] pb-2">ملخص الحجز</h2>
              <div className="flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-lg bg-[#dae2fd] flex-shrink-0 overflow-hidden bg-cover bg-center" 
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWdA4ZI-x5nOve2RpsR3qvQVod9mOWCzVb77LLEh6zDM0pHjiDlTlTzxvRY9KEFmH3PnDiIHDXJMWr2tU1Zdz8rR4xqE2z2bJYRMEJiQ5YGOoeT953qlmf6bJ_lzM0N-i7oq_KLEB7iprlB6_wDBlix_5kiEfWtGxvuZ-t3167cDXjpWUI9oE5VDbNJIOkn81Sta9tf9uca5Cv14oO9k6S_vcKPJEkTXiHr5sBJI8cQcdAfy5qu6rF')`
                  }}
                />
                <div>
                  <h3 className="text-sm font-bold text-[#131b2e]">صيانة سباكة منزلية</h3>
                  <p className="text-xs text-[#3c4a42] flex items-center gap-1 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ساعتين (تقديري)
                  </p>
                </div>
              </div>
              <div className="border-t border-[#bbcabf] pt-4 flex flex-col gap-2">
                <div className="flex justify-between text-base">
                  <span className="text-[#3c4a42]">التاريخ</span>
                  <span className="text-[#131b2e] font-medium">8 أكتوبر 2026</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-[#3c4a42]">الوقت</span>
                  <span className="text-[#131b2e] font-medium">11:00 صباحاً</span>
                </div>
              </div>
              <div className="border-t border-[#bbcabf] pt-4 flex justify-between items-center text-xl">
                <span className="text-[#131b2e]">السعر المبدئي</span>
                <span className="text-[#006c49] font-bold">150 ر.س</span>
              </div>
              <button className="w-full bg-[#006c49] text-white py-3 rounded-lg text-sm font-medium mt-2 hover:bg-[#10b981] transition-colors duration-200">متابعة لمراجعة الحجز</button>
              <p className="text-center text-xs text-[#3c4a42]">لن يتم خصم أي مبلغ الآن</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  
  </>
}
