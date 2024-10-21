import Link from "next/link";
interface MyProjectsProps {
    id:string
}
const MyProjects:React.FC<MyProjectsProps> = ({id}) => {
    
    return(
        <div id={id} className="py-6 px-6 lg:px-12">
            <div className="text-center">
                <p>Projects</p>
                <h1 className="text-4xl font-bold">My Projects</h1>
                <p className="mt-4">These are the projects that I completed in the past 2 years</p>
            </div>
          
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12">
                {/* First grid item with overlay */}
                <Link href="https://berihun101.github.io/Portfolio-updated/"> 
                <div className="relative group h-[250px] border-none rounded-xl shadow-2xl cursor-pointer"
                    style={{backgroundImage: "url('/frontend.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                   
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-white relative z-10">Front-End Projects</p>
                        <p className="text-white font-bold text-center">
                            These are Frontend projects that I have completed
                        </p>
                    </div>
                </div>
                </Link>

                {/* Other grid items */}
                <div className="relative group h-[250px] border-none rounded-xl shadow-2xl cursor-pointer"
                    style={{backgroundImage: "url('/Pasted image.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                   
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-white relative z-10">Study Buddy</p>
                        <p className="text-white font-bold text-center">
                            This is a Study buddy web app I built using React and Django Frameworks
                        </p>
                        <Link className="font-bold text-myColor hover:underline" href="https://github.com/Berihun101/Mychord_python_project">Visit Github</Link>
                    </div>
                </div>

                <div className="relative group h-[250px] border-none rounded-xl shadow-2xl cursor-pointer"
                    style={{backgroundImage: "url('/airbnb.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                   
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-white relative z-10">Airbnb Cloned</p>
                        <p className="text-white font-bold text-center">
                            This is an Airbnb cloned project I built using Next.js and Django Frameworks
                        </p>
                        <Link className="font-bold text-myColor_dark hover:underline" href="https://github.com/Berihun101/Airbnb_clone_Frontend">Visit Github</Link>
                    </div>
                </div>

                <div className="relative group h-[250px] border-none rounded-xl shadow-2xl cursor-pointer"
                    style={{backgroundImage: "url('/MintCafe.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-white relative z-10">MinT Cafe Desktop App</p>
                        <p className="text-white font-bold text-center">
                            This is a Desktop app i built using React and Electron.js
                        </p>
                        <Link className="font-bold text-myColor hover:underline" href="https://github.com/Berihun101/MinT_cafe_system_electron_desktop_app">Visit Github</Link>

                    </div>
                </div>

                

                
            </div>
        </div>
    );
}

export default MyProjects;
