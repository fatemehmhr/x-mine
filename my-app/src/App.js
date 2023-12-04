import './App.css';
import g1 from './image/g1.png';
import g2 from './image/g2.png';
import g3 from './image/g3.png';
import fram from './image/farm.png';
import group from './image/Group.png';
import group1 from './image/Group5.png';
import phone from './image/phone.png';
import mail from './image/mail.png';
import love from './image/love.png';
import home from './image/home.png';
import vector from './image/Vector.png';
import chat from './image/chat-circle.png';
import menu from './image/menu.png';




function App() {
  return (
    <div className="container m-auto font-vazir">
      {/* /////////////////////////header///////////////////////////////////////////////////       */}

      <header className='shadow-lg drop-shadow-2xl '>
        <div className='flex justify-between items-center mx-6'>
          <div className='flex items-center space-x-2 my-3'>
            <div className='bg-[#D9D9D9] w-11 h-11 text-[#AFB0B1] rounded-md flex justify-center items-center text-lg'>sign</div>
            <div className='border-[1.5px] border-orangeDark rounded-full  items-center justify-center '>
              <svg xmlns="http://www.w3.org/2000/svg" className=' w-5 h-5 m-[12px]  ' fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#D38402" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
          <div className='flex items-center border-orangeDark rounded-full border-[1.5px] space-x-2 py-2 px-3'>
            <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D38402" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>

            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D38402" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </div>
          </div>
        </div>
      </header>

      {/* ////////////////////////////searchbox/////////////////////////////////////////////////////// */}

      <div className='mt-6'>
        <p className='flex justify-center items-center mb-4 tracking-wide font-extrabold text-grayD '> <span className='text-orangeDark font-extrabold'>ایکس ماین</span>سامانه هوشمند تجاری-معدنی   </p>
        <div className='border border-orangeDark rounded-3xl flex justify-between mx-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col border border-orangeDark rounded-full ml-2 p-1'>
              <svg className='w-9 h-9' xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1" stroke="#D38402" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>

            </div>
            <div className='text-[0.9rem] w-1/3 '>
              <p className='text-orangeDark ml-1 min-[412px]:mr-3 min-[540px]:mr-10'>کجا؟</p>
            </div>
          </div>
          <div className='border-l w-2/3 stroke-orangeDark  border-orangeDark py-1 mx-4 rounded-3xl flex justify-between space-x-9 px-2 items-center'>
            <div>
              <div className='border border-orangeDark bg-orangeDark rounded-full  items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 m-2' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
            <div className='text-[0.8rem]  text-orangeDark'>به دنبال چه هستید؟</div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      <div className='flex items-center justify-center space-x-6 mt-7 text-[0.6rem] text-center '>
        <div className='w-16' >
          <img src={g2} />
          <h1 className='mt-2 m-auto'>ابزار و ماشین آلات</h1>
        </div>
        <div className='w-16' >
          <img src={g3} />
          <h1 className='mt-2 m-auto'>معادن</h1>
        </div>
        <div className='w-16 m-auto' >
          <img src={g1} />
          <h1 className='mt-2'>مواد معدنی</h1>
        </div>
      </div>
      {/* //////////////////////////////////////مواد معدنی///////////////////////////////////////// */}
      <div className='flex justify-between mt-7 px-5'>
        <div >
          <button className='flex justify-between space-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D38402" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <p className='text-orangeDark text-sm'>مشاهده بیشتر</p>

          </button>


        </div>
        <div className='font-bold text-grayD text-[1rem]'>مواد معدنی</div>
      </div>
      {/* ////////////////////////////////sliderمواد معدنی/////////////////////////////////////////////// */}
      <div className='flex gap-2 justify-center mt-10 '>
        <div className='w-40'>
          <div className='relative'>
            <img className='w-full h-14 bg-orange-500 m-auto ' />
            <span>
              <img className='absolute bottom-0 left-0 w-11' src={fram} />
            </span>
          </div>

          <div>
            <div className='flex justify-between mt-2'>
              <div className='flex justify-between space-x-1 items-center mb-1'>

                <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="#D38402" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <h2 className='text-[0.6rem]'>8.7</h2>
              </div>
              <div>
                <h2 className='text-[0.6rem]'>اصفهان-شیراز</h2>
              </div>
            </div>
            <div>
              <h2 className='text-[0.7rem] font-bold text-right mb-1'>سنگ آهک دانه بندی کاشان</h2>
            </div>
            <div className='flex justify-between space-x-2 items-center'>
              <div>
                <h2 className='text-[0.6rem]'>تناژ: <span className='font-semibold'>100000تن</span></h2>
              </div>
              <div className='-mt-1'>
                <span className='text-[0.7rem] '>|</span>
              </div>
              <div>
                <h2 className='text-[0.6rem]'>عیار: <span className='font-semibold'>22-18</span></h2>
              </div>
            </div>
          </div>

        </div>
        <div className='w-40 '>
          <div className='relative'>
            <img className='w-full h-14 bg-orange-500 m-auto ' />
            <span>
              <img className='absolute bottom-0 left-0 w-11' src={fram} />
            </span>
          </div>

          <div>
            <div className='flex justify-between mt-2 '>
              <div className='flex justify-between space-x-1 items-center mb-1 '>
                <h2 className='text-[0.6rem]'>8.7</h2>
              </div>
              <div>
                <h2 className='text-[0.6rem]'>اصفهان-شیراز</h2>
              </div>
            </div>
            <div>
              <h2 className='text-[0.7rem] font-bold text-right mb-1'>سنگ آهک دانه بندی کاشان</h2>
            </div>
            <div className='flex justify-between space-x-2 items-center'>
              <div>
                <h2 className='text-[0.6rem]'>تناژ: <span className='font-semibold'>100000تن</span></h2>
              </div>
              <div className='-mt-1'>
                <span className='text-[0.7rem] '>|</span>
              </div>
              <div>
                <h2 className='text-[0.6rem]'>عیار: <span className='font-semibold'>22-18</span></h2>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////معادن////////////////////////////////////// */}
      <div className='flex justify-between mt-7 px-5'>
        <div >
          <button className='flex justify-between space-x-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D38402" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <p className='text-orangeDark text-sm'>مشاهده بیشتر</p>

          </button>


        </div>
        <div className='font-bold text-grayD text-[1rem]'>معادن</div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div className='flex space-x-2 justify-center mt-10'>
        <div className='text-right p-3'>
          <div className="bg-orange-500 w-32 h-16 mb-2">
            <img />
          </div>
          <div className='text-[0.6rem]'>
            <h2 className="mb-1">ماده معدنی: <span className="font-semibold">دولومیت</span></h2>
            <h2 className="mb-1">نوع پروانه:<span className="font-semibold">پروانه بهره برداری</span></h2>
            <h2 className="">مساحت:<span className="font-semibold">9.7 کیلومتر مربع</span></h2>
          </div>
        </div>
        <div className='text-right p-3'>
          <div className="bg-orange-500 w-32 h-16 mb-2">
            <img />
          </div>
          <div className='text-[0.6rem]'>
            <h2 className="mb-1">ماده معدنی: <span className="font-semibold">دولومیت</span></h2>
            <h2 className="mb-1">نوع پروانه:<span className="font-semibold">پروانه بهره برداری</span></h2>
            <h2 className="">مساحت:<span className="font-semibold">9.7 کیلومتر مربع</span></h2>
          </div>
        </div>
      </div>

      {/* ///////////////////footer-fixed//////////////////////////////////////////////////////////// */}

      <div className='fixed bottom-0 w-full'>
        <div className='ml-5 -mb-5'>
          <img src={chat} className='bg-green-500 px-6 py-1  rounded-full w-20 mb-8' ></img>
        </div>

        <div className='w-full shadow-[0px_-14px_10px_-16px_rgba(0,0,0,0.3)]  text-sm '>

          <div className="mx-2 flex flex-row justify-between  ">

            <button className="flex flex-col justify-center items-center gap-3">
              <div className='w-8'>
                <img src={vector} ></img>
              </div>

              <div>
                <h2>ایکس ماین من</h2>
              </div>
            </button>



            <button className="flex flex-col justify-center items-center gap-3">
              <div className=' w-8'>
                <img src={love} />
              </div>
              <div >
                <h2>علاقه مندی ها</h2>
              </div>
            </button>



            <button className="flex flex-col justify-center items-center gap-3">

              <div className="w-8">
                <img src={menu}></img>
              </div>
              <div>
                <h2>داشبورد</h2>
              </div>
            </button>


            <button className="bg-[#FFCD7C] border-b-2 border-orange-600 px-2 py-4 flex flex-col justify-center items-center gap-3">
              <div className='w-8'>
                <img src={home}></img>
              </div>
              <div>
                <h2>صفحه اصلی</h2>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div className='mt-4'>
        <div className='text-[1rem]'>
          <p className='flex justify-center font-semibold mb-4'>سامانه هوشمند تجاری-معدنی ایکس ماین</p>
        </div>
        <div className='flex justify-center items-center space-x-5 text-sm'>
          <button className=' border border-[#625D63] rounded-full px-5 py-2 text-[#625D63] '>خریدار هستم</button>
          <button className=' border border-[#625D63] rounded-full px-5 py-2 text-[#625D63]'>فروشنده هستم</button>
        </div>
      </div>
      <div className='flex justify-between mt-7 px-5'>
        <div className='flex justify-between'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D38402" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
          <p className='text-orangeDark text-sm'>مشاهده بیشتر</p>

        </div>
        <div>
          <p className='text-[1rem] font-bold'>ابزار و ماشین آلات</p>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div className='flex space-x-2 justify-center m-10'>
        <div className='w-40'>
          <div className='relative'>
            <img className='w-full h-14 bg-orange-500 m-auto ' />
            <span>
              <img className='absolute bottom-0 left-0 w-11' src={fram} />
            </span>
          </div>

          <div>
            <div className='flex justify-between mt-2'>
              <div className='flex justify-between space-x-1 items-center'>

                <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="#D38402" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <h2 className='text-[0.5rem]'>9.7</h2>
              </div>
              <div>
                <h2 className='text-[0.5rem]'>تهران-رباط کریم</h2>
              </div>
            </div>
            <div>
              <h2 className='text-xs font-semibold text-right mb-1'>تولید نوارنقاله چرخ دار متحرک</h2>
            </div>
            <div className='text-right text-[0.6rem]'>
              <p className='mb-1'>تولید کننده: <span className='font-semibold'>شرکت هیدروسنتر</span></p>
              <p>وضعیت کالا: <span className='font-semibold'>قابل سفارش</span></p>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className='bg-[#A6DAE8] w-80 m-auto rounded-md text-center py-4 px-6 text-[0.8rem]'>
        <div><p className='font-bold'>سامانه هوشمند تجاری-معدنی <span className='text-orangeDark'>ایکس ماین</span></p></div>
        <div className='w-4/5 m-auto'>
          <img src={group} />
        </div>
        <div>
          <p className='font-bold'>امکان <span className='bg-orangeDark px-3 py-1 rounded-full'>خرید</span> و <span className='bg-orangeDark px-3 py-1 rounded-full'>فروش</span> ابزار و ماشین آلات</p>
        </div>
      </div>
      {/* ///////////////////////////orang card/////////////////////////////////////////////////////////////// */}
      <div className='flex flex-col items-center justify-center w-full py-3 bg-[#FFCD7C] text-center mt-5 mb-10'>
        <div className='pb-5'>
          <p><span className="font-bold">اخبار و مقالات </span>ایکس ماین</p>
        </div>
        <div>
          <div></div>
          <div className="w-[21rem] bg-white rounded-md flex p-3">
            <div className="w-1/2">
              <div className="text-right text-[0.6rem] font-semibold">
                <p className='pb-2'>دوره تخصصی «ژئوتکنیک و حفاری‌های ژرف اکتشافی معادن» برگزار می‌شود</p>
              </div>
              <div className='text-[0.5rem] text-right'>
                <p>
                  به گزارش روابط عمومی ایکس ماین اولین دوره تخصصی ”ژئوتکنیک و حفاری‌های ژرف اکتشافی معــــــادن” برای نخستین بار در کشور توسط دانشگاه امیرکبیر و با همکاری...
                </p>
              </div>
              <div className='flex justify-between items-center text-[0.6rem] mt-2 '>
                <div>
                  <p>26نظر</p>
                </div>
                <div>
                  <p>13:16-آبان1402</p>
                </div>
              </div>
              <div></div>

            </div>
            <div className="w-1/2 h-30 ml-2 bg-orange-300 rounded-sm ">
              {/* <img />  //add your img */}
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <p className='text-orangeDark mt-5'>مشاهده همه</p>
        </div>
      </div>
      {/* ////////////////////////////////gray-card////////////////////////////////////////////////////////// */}
      <div className='flex flex-col items-center justify-center p-5 w-full  bg-[#C5C6C8]'>
        <p className='font-bold mb-3 text-sm'>
          ایکس-ماین برای شما چه می‌کند؟
        </p>
        <p className='mb-5 text-right text-[0.7rem]'>
          لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
        </p>
        <img className='w-3/4' src={group1} />
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      <footer className="flex flex-col-reverse items-center bg-[#EAEBED] pt-5 ">
        <div className='w-full bg-[#AFB0B1] text-center py-1 mb-14'>
          <h2 className='text-[0.6rem] text-[#333434]'>Copyright © 2023 X-MINE | v 0.0.1 </h2>
        </div>
        <div className="flex gap-5 mt-5 mb-10">
          <div className="w-20 h-32 rounded-lg bg-white"></div>
          <div className="w-20 h-32 rounded-lg bg-white"></div>
          <div className="w-20 h-32 rounded-lg bg-white"></div>
        </div>
        <div className='flex flex-col justify-center w-52'> 
          <div className='text-center font-bold'>
            <p className='font-bold text-5xl mt-10 text-orangeDark'>X<span className='text-black'>-</span>MINE</p>
            <p className='font-semibold text-[1rem] mt-2'>سامانه هوشمند معاملات مواد معـدنی، معادن و ماشین‌آلات</p>
            <div className='flex justify-between items-center tracking-[0.4em] text-sm mt-5'>
              <p className='px-2'>021-11223344</p>
              <img src={phone} className='w-5 h-4 ml-3' />
            </div>
            <div className='flex mt-6 tracking-[0.3em] justify-between items-center text-sm px-2'>
              <p>info@xmine.com</p>
              <img src={mail} className='w-5 h-4 items-center ml-3' />
            </div>
          </div>
        </div>
        <ul className='flex flex-col gap-1 text-sm'>
          <div className='flex justify-end items-center'>
            <li>ثبت نام | ورود</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>درباره ایکس-ماین</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>ارتباط با ایکس-ماین</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>راهنمای سایت</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>مقاله های ایکس-ماین</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>ثبت نام | ورود</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>معادن</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>مواد معدنی</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
          <div className='flex justify-end items-center'>
            <li>ابزار و ماشین آلات</li>
            <svg class="h-8 w-8 text-orangeDark ml-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg>
          </div>
        </ul>
        <div>

        </div>
      </footer>


    </div>


  );
}

export default App;
