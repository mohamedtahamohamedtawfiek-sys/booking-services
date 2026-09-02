import React from 'react'

export default function DoneBooking() {
  return<>
  <div dir="rtl" className="bg-[#faf8ff] text-[#131b2e] font-sans min-h-screen flex flex-col antialiased">
      <header className="w-full py-8 px-4 md:px-8 flex justify-center items-center">
        <div className="text-4xl text-[#006c49] font-bold tracking-tight">Khedma</div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 w-full max-w-[1280px] mx-auto">
        <div className="bg-[#faf8ff] rounded-xl shadow-sm border border-[#bbcabf] max-w-[480px] w-full p-6 md:p-12 flex flex-col items-center text-center animate-fade-in">
          <div className="mb-4">
            <svg className="w-20 h-20 text-[#006c49] fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-[#131b2e] mb-2">
            تم إنشاء الحجز بنجاح
          </h1>

          <div className="bg-[#f2f3ff] border border-[#bbcabf] rounded-full py-1 px-4 mb-8 inline-flex items-center gap-1">
            <span className="text-sm text-[#3c4a42]">رقم الحجز:</span>
            <span className="text-sm text-[#131b2e] font-bold tracking-wider" dir="ltr">#KHD-8924A</span>
          </div>

          <div className="w-full bg-[#faf8ff] border border-[#bbcabf] rounded-lg p-4 mb-8 flex flex-col gap-2 text-right relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent pointer-events-none"></div>

            <div className="flex justify-between items-center py-1 border-b border-[#dae2fd] z-10">
              <span className="text-sm text-[#3c4a42]">الخدمة</span>
              <span className="text-base text-[#131b2e] font-medium">صيانة تكييف شاملة</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#dae2fd] z-10">
              <span className="text-sm text-[#3c4a42]">الموعد</span>
              <span className="text-base text-[#131b2e] font-medium">الخميس، ٢٤ أكتوبر - ١٠:٠٠ ص</span>
            </div>
            <div className="flex justify-between items-center py-1 z-10">
              <span className="text-sm text-[#3c4a42]">مقدم الخدمة</span>
              <span className="text-base text-[#131b2e] font-medium">مؤسسة الأفق الفنية</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="w-full cursor-pointer bg-[#006c49] text-white rounded-lg h-[48px] text-sm font-medium flex items-center justify-center gap-1 hover:bg-[#2b6954] transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>عرض تفاصيل الحجز</span>
            </button>
            <button className="w-full cursor-pointer bg-[#faf8ff] text-[#006c49] border border-[#bbcabf] rounded-lg h-[48px] text-sm font-medium flex items-center justify-center hover:bg-[#eaedff] transition-colors duration-200">
              العودة للرئيسية
            </button>
          </div>
        </div>
      </main>
    </div>
  
  </>
}
