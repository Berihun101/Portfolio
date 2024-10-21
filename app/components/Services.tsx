"use clinet"
import { useState } from "react";
interface ServicesProps {
    id: string
}

const Services: React.FC<ServicesProps> = ({id}) => {
    const [hover, setHover] = useState(false);
    return(
        <div id={id} className="py-6 px-6 lg:px-24 md:px-12 xl:px-32 2xl:pl-96 ">
           <div className="text-center">
          <p>Services</p>
          <h1 className="text-4xl font-bold">My Services</h1>

          <p className="mt-4">This are Services I would provide</p>
            </div>
          
          <div className="md:grid md:place-items-center mt-12 lg:grid-cols-2 gap-12 xl:grid-cols-4">
          <div onMouseEnter={() =>setHover(true)} onMouseLeave={() => setHover(false)} className={`py-6 pt-16 h-[250px] ${hover? 'bg-myColor' : '' }  relative border-none rounded-xl px-8 shadow-2xl`}>

            <div className={`absolute rounded-full h-20 w-20 p-4 ${hover? 'bg-white' : 'bg-myColor ' } ${hover? 'translate-x-12' : ' ' } transition  -top-8 left-6`}>
                
            <svg className="size-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
            </div>
               
               <p className={`text-2xl ${hover? 'text-white' : ''} font-bold`}>Web Design</p>
               <p className={`mt-2 ${hover? 'text-white' : 'text-myColor'} `}>
                   I will design a beautiful and responsive website for you
                   
               </p>
          </div>

          <div className="py-6 h-[250px] pt-16 relative border-none rounded-xl px-8 shadow-2xl ">

          <div className="absolute rounded-full h-20 w-20 p-4 bg-myColor  -top-8 left-6">
                
                <svg className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
                </div>
                <div className="absolute rounded-full h-20 w-20 p-4 bg-myColor  -top-8 left-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                </div>
               
               <p className="text-2xl font-bold">Frontend Development</p>
               <p className="mt-2 text-myColor">
                   I will develop a beautiful and responsive website for you
                   
               </p>
          </div>

          <div className="py-6 h-[250px] pt-16 relative border-none rounded-xl px-8 shadow-2xl ">

          <div className="absolute rounded-full h-20 w-20 p-4 bg-myColor  -top-8 left-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>
                </div>
               
               <p className="text-2xl font-bold">Backend Development</p>
               <p className="mt-2 text-myColor">
                   I will design and build a backend for your website
                   
               </p>
          </div>

          <div className="py-6 h-[250px] pt-16 relative border-none rounded-xl px-8 shadow-2xl ">

          <div className="absolute rounded-full h-20 w-20 p-4 bg-myColor  -top-8 left-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"/></svg>
                </div>
               
               <p className="text-2xl font-bold">Web Scraping</p>
               <p className="mt-2 text-myColor">
                   I will scrape data from the web for you
                   
               </p>
          </div>

          <div className="py-6 h-[250px] pt-16 relative border-none rounded-xl px-8 shadow-2xl ">

          <div className="absolute rounded-full h-20 w-20 p-4 bg-myColor  -top-8 left-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>
                </div>
               
               <p className="text-2xl font-bold">Wordpress Development</p>
               <p className="mt-2 text-myColor">
                     I will design and build a wordpress website for you
               </p>
          </div>

          <div className="py-6 h-[250px] pt-16 relative border-none rounded-xl px-8 shadow-2xl ">

          <div className="absolute rounded-full h-20 w-20 p-4 bg-myColor  -top-8 left-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>
                </div>
               
               <p className="text-2xl font-bold">Cloud Computing</p>
               <p className="mt-2 text-myColor">
                     I will deploy your website to the cloud and manage it
                   
               </p>
          </div>
          </div>

          

        </div>
    )
}

export default Services;