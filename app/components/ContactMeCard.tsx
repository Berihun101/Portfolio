import Link from "next/link";
const ContactMeCard = () => {

    return (
        <div className="xl:px-96 py-12 lg:px-32 p-3 md:px-12 bg-background_color">
            <h2 className="text-white text-3xl font-bold">Do you have a Project on your mind?</h2>
            <p className="text-white mt-2">I am available for freelance work. I am always looking for new projects and challenges. Let's work together!</p>
           <Link href="#contact"> <button className="rounded-xl border bg-myColor text-white p-4 mt-2 hover:bg-myColor_dark">Contact Me</button></Link>

        </div>
    )
}

export default ContactMeCard;