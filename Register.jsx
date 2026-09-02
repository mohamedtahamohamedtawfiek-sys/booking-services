import React from 'react'

export default function Register() {
  return (
    <div dir="rtl" className="flex min-h-screen items-center justify-center bg-[#faf8ff] p-4 font-sans text-[#131b2e] antialiased md:p-8">
      <main className="flex w-full max-w-[1100px] overflow-hidden rounded-2xl border border-[#bbcabf] bg-white shadow-[0_18px_50px_rgba(19,45,42,0.08)]">
        <section className="relative hidden w-5/12 flex-col justify-between overflow-hidden bg-[#f2f3ff] p-10 lg:flex xl:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,108,73,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(218,226,253,0.9),transparent_45%)]"></div>
          <div className="relative z-10">
            <div className="mb-12 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border-2 border-white bg-white shadow-sm"><span className="text-xl font-bold text-[#006c49]">خ</span></span><span className="text-2xl font-bold text-[#131b2e]">خدمة<span className="text-[#006c49]">.</span></span></div>
            <span className="mb-4 inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#006c49]">انضم إلى مجتمعنا</span>
            <h1 className="mb-5 text-3xl font-bold leading-[1.35] text-[#131b2e] xl:text-4xl">ابدأ رحلتك مع أفضل الخدمات</h1>
            <p className="max-w-sm text-base leading-8 text-[#3c4a42]">أنشئ حسابك في دقائق، واكتشف متخصصين موثوقين يساعدونك في إنجاز كل ما تحتاجه.</p>
          </div>
          <div className="relative z-10 rounded-xl border border-white/70 bg-white/70 p-5 backdrop-blur-sm"><div className="mb-3 flex items-center gap-2"><span className="text-lg text-[#006c49]">✓</span><strong className="text-sm">لماذا خدمة؟</strong></div><p className="text-sm leading-7 text-[#3c4a42]">اختيارات موثوقة، أسعار واضحة، وتجربة حجز أسهل من أي وقت.</p></div>
        </section>

        <section className="w-full bg-white p-6 sm:p-9 lg:w-7/12 lg:p-12">
          <div className="mb-7"><span className="mb-3 inline-block text-sm font-semibold text-[#006c49]">حساب جديد</span><h2 className="mb-2 text-2xl font-bold text-[#131b2e] sm:text-3xl">إنشاء حساب</h2><p className="text-sm leading-6 text-[#647773]">سجل بياناتك وابدأ في استخدام منصة خدمة</p></div>
          <form className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-[#3c4a42]">الاسم بالكامل</label><input id="fullName" name="fullName" type="text" autoComplete="name" placeholder="اكتب اسمك بالكامل" className="w-full rounded-lg border border-[#bbcabf] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#9aa9a1] focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49]" /></div><div><label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#3c4a42]">رقم الهاتف</label><input id="phone" name="phone" type="tel" dir="ltr" autoComplete="tel" placeholder="05X XXX XXXX" className="w-full rounded-lg border border-[#bbcabf] bg-white px-4 py-3 text-left text-sm outline-none transition placeholder:text-[#9aa9a1] focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49]" /></div></div>
            <div><label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#3c4a42]">البريد الإلكتروني</label><input id="email" name="email" type="email" dir="ltr" autoComplete="email" placeholder="name@example.com" className="w-full rounded-lg border border-[#bbcabf] bg-white px-4 py-3 text-right text-sm outline-none transition placeholder:text-[#9aa9a1] focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49]" /></div>
            <div><span className="mb-1.5 block text-sm font-medium text-[#3c4a42]">نوع الحساب</span><div className="grid grid-cols-2 gap-3"><label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#006c49] bg-[#f2faf6] p-3 text-sm font-medium text-[#006c49]"><input className="h-4 w-4 accent-[#006c49]" type="radio" name="accountType" value="customer" defaultChecked />عميل</label><label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#bbcabf] p-3 text-sm font-medium text-[#3c4a42] transition hover:border-[#006c49]"><input className="h-4 w-4 accent-[#006c49]" type="radio" name="accountType" value="provider" />مقدم خدمة</label></div></div>
            <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[#3c4a42]">كلمة المرور</label><input id="password" name="password" type="password" autoComplete="new-password" placeholder="8 أحرف على الأقل" className="w-full rounded-lg border border-[#bbcabf] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#9aa9a1] focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49]" /></div><div><label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-[#3c4a42]">تأكيد كلمة المرور</label><input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" placeholder="أعد كتابة كلمة المرور" className="w-full rounded-lg border border-[#bbcabf] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#9aa9a1] focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49]" /></div></div>
            <label className="mt-1 flex cursor-pointer items-start gap-2 text-xs leading-6 text-[#647773]"><input className="mt-1 h-4 w-4 shrink-0 accent-[#006c49]" type="checkbox" name="terms" />أوافق على <a className="font-semibold text-[#006c49] hover:underline" href="#terms">الشروط والأحكام</a> و<a className="font-semibold text-[#006c49] hover:underline" href="#privacy">سياسة الخصوصية</a></label>
            <button className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#006c49] font-semibold text-white shadow-[0_8px_18px_rgba(0,108,73,0.16)] transition hover:bg-[#2b6954]" type="submit">إنشاء الحساب <span aria-hidden="true">←</span></button>
            <div className="mt-1 text-center text-sm text-[#647773]">لديك حساب بالفعل؟ <a className="font-semibold text-[#006c49] hover:underline" href="#login">تسجيل الدخول</a></div>
          </form>
        </section>
      </main>
    </div>
  )
}
