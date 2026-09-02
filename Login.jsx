import React from 'react';

export default function Login() {
  return (
    <div dir="rtl" className="bg-[#faf8ff] text-[#131b2e] antialiased min-h-screen flex items-center justify-center p-4 md:p-8 font-sans">
      <main className="w-full max-w-[1024px] bg-white rounded-xl shadow-sm border border-[#bbcabf] overflow-hidden flex flex-col md:flex-row">
        
        <div className="hidden md:flex md:w-1/2 bg-[#f2f3ff] relative overflow-hidden flex-col justify-between p-12">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center opacity-30 mix-blend-multiply"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDjCMkseeVgm7GhfaL4X3GbEqHiuiEcmNvmIAFeylXTO6BwsvhAc6Uw2QqllXvvrlaEkkPjPfqb54B6fNg7N1svWZmWtILUz3DB6IEN2w6aHWFzY4s5cwA9cvSbpfDhU0R_4pf6Fn68DCX5W-2nMSMoomYzuERD4XsgEv0eeDoA5ppBx7CabWmv8AYwOc5dvH8YNKRbx-5L8TfzaYqxbNfxxEqUB1LriS5XgWEUdeOxGUBQ3dpkemb')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f2f3ff] via-transparent to-[#f2f3ff] opacity-80 z-10"></div>
          </div>

          <div className="relative z-20">
            <h1 className="text-4xl font-bold text-[#006c49] mb-4">Khedma</h1>
            <h2 className="text-3xl font-semibold text-[#131b2e] mb-6">أهلاً بك في منصة الخدمات المتكاملة</h2>
            <p className="text-lg text-[#3c4a42] max-w-sm leading-relaxed">
              اكتشف آلاف الخدمات الموثوقة أو انضم كمقدم خدمة لتبدأ رحلة نجاحك معنا. منصتنا تجمع بين الاحترافية والموثوقية لتلبية كافة احتياجاتك.
            </p>
          </div>

          <div className="relative z-20 flex gap-4 items-center mt-12">
            <div className="flex -space-x-2 space-x-reverse">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmFdklVLuGvm8EwcixhadekfLoJwCPGKvXSlmTjkOIUizq77Z_WEiJzcwbW6R7HlpB3I9yq8f9F4sxSHJbBsH7MCIeX-q55t5XbyGkVPi45hjVg1jgTO8JTGMwGeuF_Ffqz51DarDfxGpG6l37BxRg2M0KdU1utso5N5643wWLYcn4RXOeh5K5L7EZeNx4rZ_bSVDrAxsCU7r9NtfTVJRZDBWpWghnaLzpcUlEF9RDBOn21H-hfJq" 
                alt="مزود خدمة" 
                className="w-10 h-10 rounded-full border-2 border-white object-cover" 
              />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsxSlXu4OYqEBpryLPmokM2iOotPR7uUSQ_YYiK8aMw6R5pBIA2U6NfLxRZJZ-rmPi3voULWcuSCbv5xxfy4eivlNjb_4IGRroDIOrwQBfniyL3YFeekUVx_Q6nLjg-YTXaZPr2zt4SxeaU3FCO6bUH_rltHr4ukWgO01bsX1GCfatvJ7fUrjdF7eknaf0MnLDGhb6CqScCrKPNAUV2jjLfmnWkSi66ey_FbQ919VWrNWwBNu0JeD" 
                alt="عميل" 
                className="w-10 h-10 rounded-full border-2 border-white object-cover" 
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#dae2fd] flex items-center justify-center text-xs text-[#3c4a42] font-bold">
                +10k
              </div>
            </div>
            <div className="text-xs text-[#3c4a42] font-medium">مستخدم نشط يومياً</div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12 bg-white flex flex-col justify-center">
          <div className="mb-6 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#131b2e] mb-2">تسجيل الدخول</h2>
            <p className="text-base text-[#3c4a42]">يرجى إدخال بياناتك للوصول إلى حسابك</p>
          </div>

          <div className="flex bg-[#dae2fd] rounded-lg p-1 mb-6">
            <button
              type="button"
              className="flex-1 cursor-pointer py-2 text-center rounded-md text-sm font-medium bg-white text-[#006c49] shadow-sm"
            >
              عميل
            </button>
            <button
              type="button"
              className="flex-1 py-2 text-center rounded-md text-sm font-medium cursor-pointer text-[#3c4a42] hover:text-[#131b2e]"
            >
              مقدم خدمة
            </button>
          </div>

          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#3c4a42] mb-1">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#3c4a42]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-[#bbcabf] bg-white pr-10 pl-4 py-3 text-base text-[#131b2e] text-right focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#3c4a42] mb-1">
                كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#3c4a42]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  dir="ltr"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-[#bbcabf] bg-white pr-10 pl-4 py-3 text-base text-[#131b2e] text-right focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="h-4 w-4 text-[#006c49] rounded border-[#bbcabf] cursor-pointer focus:ring-[#006c49]"
                />
                <span className="text-[#3c4a42]">تذكرني</span>
              </label>
              <a href="#" className="text-[#006c49] font-medium hover:underline">
                نسيت كلمة المرور؟
              </a>
            </div>

            <button
              type="submit"
              className="mt-2 cursor-pointer w-full h-[48px] bg-[#006c49] text-white font-medium rounded-lg hover:bg-[#2b6954] transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>دخول</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#bbcabf]"></div>
              <span className="flex-shrink-0 mx-4 text-xs text-[#3c4a42]">أو</span>
              <div className="flex-grow border-t border-[#bbcabf]"></div>
            </div>

            <div className="text-center">
              <p className="text-base text-[#3c4a42]">
                ليس لديك حساب؟{' '}
                <a href="#" className="font-medium text-[#006c49] hover:underline mr-1">
                  سجل الآن
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}