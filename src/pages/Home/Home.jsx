import React from 'react'

export default function Home() {
  return <>
  <section>
<div className='bg-[#f4f6ff] p-10 flex flex-col md:flex-row justify-between items-center gap-4'>
  <div className='flex flex-col gap-4'>
    <h1 className='text-2xl font-extrabold'>احجز الخدمة التي تحتاجها <span className='text-[#006c49]'>بسهولة</span></h1>
    <p className='text-gray-600'>منصة خدمة توفر لك أفضل المتخصصين في مختلف المجالات بضغطة زر.</p>
    <p className='text-gray-600'>ابحث وقارن واحجز بكل ثقة وأمان</p>

    <div className='relative w-96'>

    <input className='border border-gray-300 p-4 w-96 shadow rounded-4xl' placeholder='ما هي الخدمة التي تبحث عنها؟' type='text' name='service'  />
    <button className='bg-[#006c49] text-white p-4 rounded-2xl hover:bg-[#005a3d] absolute left-2 cursor-pointer'>بحث</button>
    </div>

    <p className='my-10' >شائع : <span className='text-[#006c49] p-3 bg-[#eaedff] rounded-2xl cursor-pointer hover:text-[#eaedff] hover:bg-[#006c49]'>تنظيف منازل</span>, <span className='text-[#006c49] p-3 bg-[#eaedff] rounded-2xl cursor-pointer hover:text-[#eaedff] hover:bg-[#006c49] '> سباكة</span>, <span className='text-[#006c49] p-3 bg-[#eaedff] rounded-2xl cursor-pointer hover:text-[#eaedff] hover:bg-[#006c49]'> كهرباء</span></p>

  </div>
  <div>
    <img src='https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9ry6j2sh0d4THnQsj_wApQw1iEz5n-qsuVWloYb7M4QUn1CRjaC2cw1ybg0_s4NEl5_bozm_lJ3IO4PK9m33043H991jaUVuIIzhfzmlWq9q21YL_gNF0NDZoaVKd3vvlTKdIqtZqBb1UgZTi4O_01iglbJxI_14--dKzhjYezkFSWtV2uLlT8E1z1_Uuzzh_8DaXTdTDUvfpn7apHuBwiG-VcEJ3Me-I9sovsI_7-i_30eoKQWm' alt='Service Image' />
  </div>
</div>
<div className='flex flex-row justify-between items-center p-4'>
  <div className='mt-10 bg-[#faf8ff] p-6 flex flex-col gap-4'>
    <h2 className='text-2xl font-bold'>التصنيفات الشائعة</h2>
    <p className='text-gray-600'>استكشف الخدمات الأكثر طلبا لدينا</p>
  </div>
  <div>
     <p className='text-[#006c49] font-bold cursor-pointer hover:text-[#005a3d]'>عرض المزيد</p>
      </div>
</div>
<div className='p-4 my-6'>
  <button className='bg-[#ffffff]  text-blank p-4 mr-3 px-7 border-2 rounded-2xl hover:bg-[#006c49] hover:text-[#ffffff] cursor-pointer'>تنظيف</button>
   <button className='bg-[#ffffff]  text-blank p-4 mr-3 px-7 border-2 rounded-2xl hover:bg-[#006c49] hover:text-[#ffffff] cursor-pointer'>سباكة</button> <button className='bg-[#ffffff]  text-blank p-4 mr-3 px-7 border-2 rounded-2xl hover:bg-[#006c49] hover:text-[#ffffff] cursor-pointer'>كهرباء</button> <button className='bg-[#ffffff]  text-blank p-4 mr-3 px-7 border-2 rounded-2xl hover:bg-[#006c49] hover:text-[#ffffff] cursor-pointer'>تجارة</button> <button className='bg-[#ffffff]  text-blank p-4 mr-3 px-7 border-2 rounded-2xl hover:bg-[#006c49] hover:text-[#ffffff] cursor-pointer'>تكييف</button> <button className='bg-[#ffffff] mt-4 text-blank p-4 mr-3 px-7 border-2 rounded-2xl hover:bg-[#006c49] hover:text-[#ffffff] cursor-pointer'>دهانات</button>
</div>
<div>
  <div className='text-center p-10 bg-[#f2f3ff]'>
    <h3  className='text-2xl font-bold'>خدمات مميزة</h3>
    <p className='text-gray-600'>نقدم لك مجموعة من أفضل الخدمات المختارة بعناية لضمان جودة عالية وتجربة مرضية</p>
  <div className='flex gap-4'>
    <div className='shadow rounded-3xl w-1/3 my-3'>
     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMUFxffyzos393wVhLP4VjQkQcIZcNS8qO8p0wVLZpNATzCmY97rbVnHfpjRB4TVQbklDdjnhNokUIt2sWoxpGiRZHrW4FJwTFApHJqfhbIDIHIY1en0yLeS0i8Zi5j5zLM932rGB66tx1Cr5Via18BNVzxbodZmNeCwe0YcgQXuYbYxmb5zJXfploTi-APx5HWqECbqmnqSioctUbhmldD_3A9TNA9nZloYzRxpgf8n8gilODIGb3" className='rounded-3xl' alt="" />
     <div className='p-4 flex justify-between '>
      <h1 className='font-bold'> تنظيف شامل للمنزل </h1>
      <span className='text-[#006c49] font-bold'>150ر.س</span>
     </div>
     <p className='text-gray-600 p-3'>خدمة تنظيف عميق تشمل جميع الغرف و المطابخ و الحمامات باستخدام أفضل المواد الآمنة و الفعالة.</p>
     <p className='text-gray-600 p-3'><span className='font-bold text-black'>بواسطة :</span>شركة النظافة المتقدمة</p>

    </div>
 
  <div className='shadow rounded-3xl w-1/3 my-3'>
     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMUFxffyzos393wVhLP4VjQkQcIZcNS8qO8p0wVLZpNATzCmY97rbVnHfpjRB4TVQbklDdjnhNokUIt2sWoxpGiRZHrW4FJwTFApHJqfhbIDIHIY1en0yLeS0i8Zi5j5zLM932rGB66tx1Cr5Via18BNVzxbodZmNeCwe0YcgQXuYbYxmb5zJXfploTi-APx5HWqECbqmnqSioctUbhmldD_3A9TNA9nZloYzRxpgf8n8gilODIGb3" className='rounded-3xl' alt="" />
     <div className='p-4 flex justify-between '>
      <h1 className='font-bold'> تنظيف شامل للمنزل </h1>
      <span className='text-[#006c49] font-bold'>150ر.س</span>
     </div>
     <p className='text-gray-600 p-3'>خدمة تنظيف عميق تشمل جميع الغرف و المطابخ و الحمامات باستخدام أفضل المواد الآمنة و الفعالة.</p>
     <p className='text-gray-600 p-3'><span className='font-bold text-black'>بواسطة :</span>شركة النظافة المتقدمة</p>

    </div>

     <div className='shadow rounded-3xl w-1/3 my-3'>
     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMUFxffyzos393wVhLP4VjQkQcIZcNS8qO8p0wVLZpNATzCmY97rbVnHfpjRB4TVQbklDdjnhNokUIt2sWoxpGiRZHrW4FJwTFApHJqfhbIDIHIY1en0yLeS0i8Zi5j5zLM932rGB66tx1Cr5Via18BNVzxbodZmNeCwe0YcgQXuYbYxmb5zJXfploTi-APx5HWqECbqmnqSioctUbhmldD_3A9TNA9nZloYzRxpgf8n8gilODIGb3" className='rounded-3xl' alt="" />
     <div className='p-4 flex justify-between '>
      <h1 className='font-bold'> تنظيف شامل للمنزل </h1>
      <span className='text-[#006c49] font-bold'>150ر.س</span>
     </div>
     <p className='text-gray-600 p-3'>خدمة تنظيف عميق تشمل جميع الغرف و المطابخ و الحمامات باستخدام أفضل المواد الآمنة و الفعالة.</p>
     <p className='text-gray-600 p-3'><span className='font-bold text-black'>بواسطة :</span>شركة النظافة المتقدمة</p>

    </div>
    </div>
  </div>
</div>
<div>
<div className='text-center p-10 bg-[#faf8ff]'>
  <h1 className='text-2xl font-bold py-3'>كيف يعمل موقعنا؟</h1>
  <p className='text-gray-600'>خطوات بسيطة للحصول على الخدمة التي تحتاجها</p>
</div>

<div className='flex justify-center'>

    <div className="w-1/3 max-w-[600px] mx-5  border border-blue-200 rounded-lg p-6 text-center bg-white">
  
  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500 flex items-center justify-center mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
    </svg>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mb-3">
    1. ابحث عن الخدمة
  </h2>

  <p className="text-gray-600 text-lg leading-8">
    تصفح تصنيفاتنا الواسعة واختر الخدمة التي تناسب
    <br />
    احتياجاتك بدقة.
  </p>

</div>

 <div className="w-1/3 max-w-[600px] mx-5  border border-blue-200 rounded-lg p-6 text-center bg-white">
  
  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500 flex items-center justify-center mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
    </svg>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mb-3">
    2. اختر الموعد المناسب 
  </h2>

  <p className="text-gray-600 text-lg leading-8">

حدد التاريخ والوقت الذي يناسبك لاستقبال مقدم 
        <br />
الخدمة بكل مرونة.          </p>

</div>
  

 <div className="w-1/3 max-w-[600px] mx-5  border border-blue-200 rounded-lg p-6 text-center bg-white">
  
  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500 flex items-center justify-center mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
    </svg>
  </div>

  <h2 className="text-2xl font-bold text-gray-900 mb-3">
    3. استمتع بخدمتك
  </h2>

  <p className="text-gray-600 text-lg leading-8">
    سيصلك المتخصص لإنجاز العمل باحترافيةوبعدها
        <br />
        يمكنك تقييم التجربة.
          </p>

</div>

</div>
</div>
  </section>
  </> 
}
