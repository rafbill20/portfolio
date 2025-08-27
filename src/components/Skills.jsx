import { PiShootingStar } from "react-icons/pi";

import { skillsData } from "../constants/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="bg-primary w-full h-fit pb-40 pt-20">
      <div className="flex justify-center items-center gap-10 text-white w-full flex-col">
        <div className="border-t-2 border-l-2 p-2 text-white rounded-full w-fit h-fit border-r-2 flex gap-2 items-center">
          <PiShootingStar className="text-xl" />
          <h1>Rafael Billy</h1>
        </div>
        <h1 className="text-4xl" data-aos="fade-up" data-aos-duration="1500">
          My <b>Skills & Portfolio</b>
        </h1>
      </div>
      <div className="mt-20">
        <div
          className="flex flex-col gap-10"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          <div className="flex flex-wrap px-4 md:px-0 gap-6 justify-center text-nowrap -ml- -rotate-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="flex hover:bg-white duration-150 hover:font-bold cursor-pointer hover:text-primary gap-2 items-center justify-center px-6 py-2 text-white w-fit border-2 border-white rounded-full bg-[#D9D9D9]/10 md:text-3xl"
              >
                {skill.icon}
                <h1>{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
