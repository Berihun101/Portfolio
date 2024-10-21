"use client"

interface ContactProps {  
  id:string
}

import { useState, useEffect } from "react";
const Contact: React.FC<ContactProps> = ({id}) => {

      const [isVisible, setIsVisible] = useState(false);


        useEffect(() => {
            setIsVisible(true);
        }, [])

    return(
        <div id={id} className="py-6 text-center px-6 lg:px-24 md:px-8 xl:pl-96 bg-background_color">

          <p>Contacts</p>
          <h1 className="text-4xl font-bold">Have a Project on Mind?</h1>

          <p className="mt-4">Let's get the work done then</p>

          
            <div className="md:flex mt-12">

                <div className="px-12 py-12 md:w-[800px] bg-custom-green">
                  <form action="">
                    <div className="flex space-x-2">
                    <div className="mb-4 flex-1">
                      
                      <input type="text" id="name" placeholder="Your Name" className="w-full p-3 focus:outline-none bg-white border border-myColor" />
                    </div>

                    <div className="mb-4 flex-1">
                     
                      <input type="email" id="email" placeholder="Your Email" className="w-full focus:outline-none focus:border-myColor focus:ring-0 p-3 bg-white border border-myColor" />
                    </div>
                    </div>

                    <div className="mb-4">
                      
                      <input type="text" id="subject" placeholder="Subject" className="w-full focus:outline-none p-3 bg-white border border-myColor" />
                    </div>

                    <div className="mb-4">
                      <textarea name="message" id="message" cols={30} rows={10} placeholder="Your Message" className="w-full p-3 focus:outline-none bg-white border border-myColor"></textarea>
                    </div>

                    <button type="submit" className="rounded-xl border bg-myColor text-white p-4 mt-2 hover:bg-myColor_dark">Send Message</button>
                  </form>
                </div>

                <div className="px-8 flex-col md:py-0 py-6 space-y-12">
                    <div className="flex space-x-4">
                        <div className={`w-12 h-12 p-3 rounded-full ${isVisible? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all bg-myColor`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      </div>
                      <div>

                   <p className="font-bold text-start">Phone:</p>
                     <p className="text-myColor">+234 810 000 0000</p>
                     </div>

                    </div>

                    <div className="flex space-x-4">
                        <div className={`w-12 h-12 p-3 rounded-full ${isVisible? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all delay-100 bg-myColor`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                       </svg>

                      </div>
                      <div>

                   <p className="font-bold text-start">Email:</p>
                     <p className="text-myColor">taberihun07@gmail.com</p>
                     </div>

                    </div>

                    <div className="flex space-x-4">
                        <div className={`w-12 h-12 p-3 rounded-full ${isVisible? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all delay-200 bg-myColor`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                         </svg>

                      </div>
                      <div>

                   <p className="font-bold text-start">Location:</p>
                     <p className="text-myColor">Ayat, Addis Ababa</p>
                     </div>

                    </div>

                    

                </div>
            </div>

          

        </div>
    )
}

export default Contact;