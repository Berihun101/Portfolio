interface MySkillsProps {
  id:string
}

const MySkills:React.FC<MySkillsProps> = ({id}) => {
    return(
        <div id={id} className="py-6 text-center px-6 lg:pl-12 md:px-8 xl:pl-32 2xl:pl-96 bg-background_color">

          <p>Skills</p>
          <h1 className="text-4xl font-bold">My Skills</h1>

          <p className="mt-4">This are set of my skill I have honed for the past 3 years</p>

          
          <div className="md:grid place-items-start md:place-content-center mt-12 md:grid-cols-2 gap-12 md:space-y-0 space-y-4 xl:grid-cols-3">
  {[
    { title: 'HTML', percent: 95 },
    { title: 'CSS', percent: 95 },
    { title: 'Nextjs', percent: 80 },
    { title: 'Django', percent: 85 },
    { title: 'WordPress', percent: 95 },
    { title: 'Tailwind', percent: 95 },
  ].map((item, index) => (
    <div key={index} className="text-center py-6 border-none rounded-xl bg-white px-16 shadow-2xl">
      {item.title}
      <div className="relative w-48 h-48 mt-4">
        <div
          className="absolute inset-0 rounded-full bg-white"
          style={{
            background: `conic-gradient(#4F46E5 ${item.percent * 3.6}deg, #e5e7eb 0deg)`,
          }}
        ></div>
        <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white text-second_color text-2xl font-bold">
          {item.percent}%
        </div>
      </div>
    </div>
  ))}
</div>


          

        </div>
    )
}

export default MySkills;