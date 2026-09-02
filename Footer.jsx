import React from 'react'
import logo from '../../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-[#132d2a] text-white">
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1160px] flex-col items-center gap-8 py-10 md:w-[calc(100%-48px)] md:flex-row md:justify-between">
        <a className="shrink-0" href="#home" aria-label="خدمة - الصفحة الرئيسية"><span className="grid h-16 w-24 place-items-center overflow-hidden rounded-xl border border-white/20 bg-white shadow-sm"><img className="h-full w-full object-cover" src={logo} alt="شعار خدمة" /></span></a>
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-[#b7cbc3]" aria-label="روابط التذييل"><a className="transition hover:text-[#46b986]" href="#home">عن الخدمة</a><a className="transition hover:text-[#46b986]" href="#categories">الشروط والأحكام</a><a className="transition hover:text-[#46b986]" href="#services">سياسة الخصوصية</a><a className="transition hover:text-[#46b986]" href="#how-it-works">اتصل بنا</a></nav>
      </div>
      <div className="border-t border-white/10"><p className="mx-auto w-[calc(100%-32px)] max-w-[1160px] py-5 text-center text-xs text-[#91aaa0] md:w-[calc(100%-48px)]">خدمة © 2024. جميع الحقوق محفوظة.</p></div>
    </footer>
  )
}
