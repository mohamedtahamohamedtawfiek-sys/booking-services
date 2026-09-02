import React from 'react'
import logo from '../../assets/logo.jpg'

export default function Header() {
  const links = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'التصنيفات', href: '#categories' },
    { label: 'تصفح الخدمات', href: '#services' },
    { label: 'كيف يعمل', href: '#how-it-works' },
  ]

  return <header className="sticky top-0 z-50 border-b border-[#e5eee9] bg-white/95 shadow-[0_4px_20px_rgba(19,45,42,0.05)] backdrop-blur">
    <div className="mx-auto flex min-h-[76px] w-[calc(100%-32px)] max-w-[1160px] flex-wrap items-center justify-between gap-x-5 gap-y-3 py-3 md:w-[calc(100%-48px)] md:flex-nowrap md:py-0">
      <a className="flex shrink-0 items-center gap-3" href="#home" aria-label="خدمة - الصفحة الرئيسية">
        <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-[#d9ebe1] bg-[#eaf7f0] shadow-sm">
          <img className="h-full w-full object-cover" src={logo} alt="" />
        </span>
        <span className="hidden text-xl font-bold tracking-tight text-[#132d2a] sm:block">خدمة<span className="text-[#087f5b]">.</span></span>
      </a>

      <nav className="order-3 flex w-full items-center gap-1 overflow-x-auto rounded-xl bg-[#f6faf8] p-1 md:order-none md:w-auto md:rounded-full" aria-label="التنقل الرئيسي">
        {links.map((link, index) => <a className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition md:rounded-full md:px-4 ${index === 0 ? 'bg-white text-[#087f5b] shadow-sm' : 'text-[#647773] hover:bg-white hover:text-[#087f5b]'}`} href={link.href} key={link.label}>{link.label}</a>)}
      </nav>

      <div className="flex items-center gap-1 sm:gap-2">
        <button className="rounded-lg px-2 py-2 text-xs font-bold text-[#087f5b] transition hover:bg-[#eaf7f0] sm:px-3 sm:text-sm" type="button">دخول</button>
        <button className="rounded-lg bg-[#087f5b] px-2.5 py-2 text-xs font-bold text-white shadow-[0_8px_18px_rgba(8,127,91,0.18)] transition hover:-translate-y-0.5 hover:bg-[#056647] sm:px-4 sm:py-2.5 sm:text-sm" type="button">سجل الآن</button>
      </div>

    </div>
  </header>
}
