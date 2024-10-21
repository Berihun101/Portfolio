import Image from "next/image"

interface AboutProps {
    id: string;
  
}

const About: React.FC<AboutProps> = ({id}) => {
    return (
        <>
        <div className="w-full md:flex md:flex-row flex-col space-y-6  py-24 px-6 md:space-x-12 md:items-center bg-background_color  justify-center ">

            <div className="flex space-x-4">
                <div className="rounded-full w-24 h-24  p-4 bg-myColor">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  >
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>

                </div>
                <div className="flex-cols">
                    <h1 className="text-6xl font-bold text-second_color">10+</h1>
                    <p className="text-myColor lg:text-2xl">PROJECT COMPLETE</p>
                </div>

            </div>

            <div className="flex space-x-4">
                <div className="rounded-full w-24 h-24  p-4 bg-myColor">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>

                </div>
                <div className="flex-cols">
                    <h1 className="text-6xl font-bold text-second_color">0</h1>
                    <p className="text-myColor lg:text-2xl"> CUPS OF COFFEE</p>
                </div>

            </div>

            <div className="flex space-x-4">
                <div className="rounded-full w-24 h-24  p-4 bg-myColor">
                <svg className="size-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"/></svg>

                </div>
                <div className="flex-cols">
                    <h1 className="text-6xl font-bold text-second_color">2+</h1>
                    <p className="text-myColor lg:text-2xl">EXPERIANCES</p>
                </div>

            </div>

        </div>
        <div className="md:flex  mx-auto space-x-12 mb-12 md:mb-0 lg:px-24 md:px-12  xl:pl-96">
  <div id={id} className="md:relative w-[200px] flex-1 hidden md:block shadow-xl h-[600px] overflow-hidden">
    <Image 
      src="/myImage.jpg" 
      alt="my image" 
      fill
      className="object-cover object-top hidden md:block shadow-xl" // Ensures the image covers the container properly
    />
  </div>
  <div className="mt-6 flex-1">
   
    <p>My Intro</p>
    <h1 className=" text-4xl font-bold mt-3 text-black">About Me</h1>
    <p className="text-myColor mt-6 md:w-[600px] text-lg">I am a full-stack developer with 5 years of experience. I have worked on various projects and have a strong portfolio. I am a full-stack developer with 5 years of experience. I have worked on various projects and have a strong portfolio.</p>
    <div className="flex space-x-24 mt-6">
        <div className="flex-cols space-y-2">
            <p className="font-bold">Name</p>
            <p className="font-bold">Date of Birth</p>
            <p className="font-bold">Address</p>
            <p className="font-bold">Email</p>
            <p className="font-bold">Phone</p>

        </div>
        <div className="flex-cols space-y-2">
            <p>Berihun</p>
            <p>27/06/2001</p>
            <p>Ayat, Ethiopia</p>
            <p>taberihun07@gmail.com</p>
            <p>+251 960904976</p>
        </div>

    </div>
    <div className="flex mt-12 space-x-12">

        <div className="flex  border-l-2 border-myColor px-2 space-x-2">
            <div className="w-10 h-10 bg-myColor rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />

</svg>
</div>

   <p>Music</p>


        </div>

        <div className="flex  border-l-2 border-myColor px-2 space-x-2">
            <div className="w-10 h-10 bg-myColor rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>
</div>

   <p>Soprt</p>


        </div>


        <div className="flex  border-l-2 border-myColor px-2 space-x-2">
            <div className="w-10 h-10 bg-myColor rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
</div>

   <p>Books</p>


        </div>

    </div>

  </div>
</div>

        </>
    )
}

export default About