import { PiShootingStar } from "react-icons/pi";

const Education = () => {
  return (
    <section id="education" className="bg-primary w-full h-fit pb-20  pt-20">
      <div className="flex justify-center items-center gap-10 text-white w-full flex-col">
        <div className="border-t-2 border-l-2 p-2 text-white rounded-full w-fit h-fit border-r-2 flex gap-2 items-center">
          <PiShootingStar className="text-xl" />
          <h1>Rafael Billy</h1>
        </div>
        <h1 className="text-4xl" data-aos="fade-up" data-aos-duration="1500">
          My <b>Education</b>
        </h1>
      </div>
      <div className="wrapper mt-10">
        <div className="flex gap-10">
          <div className="flex">
            <hr className="border-l-2 border-t-0 border-white h-full md:h-72" />
            <div className="bg-second w-8 h-8 rounded-full -ml-4 mt-4" />
            <div className="bg-second w-8 h-8 rounded-full -ml-8 mt-[20rem] md:mt-[11rem]" />
          </div>
          <div className="flex flex-col gap-10 w-full">
            <div
              className="bg-white/20 w-full h-fit  rounded-xl px-8 py-6 text-white"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0 md:items-center">
                <h1 className="font-semibold text-2xl">
                  {" "}
                  Atma Jaya Yogyakarta University
                </h1>
                <p>2021 - 2025</p>
              </div>
              <p className="text-xl pt-4">Bachelor Of Computer Science</p>
            </div>
            <div
              className="bg-white/20 w-full h-fit  rounded-xl px-8 py-6 text-white"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0 md:items-center">
                <h1 className="font-semibold text-2xl">
                  {" "}
                  SMA Negeri 5 Purwokerto
                </h1>
                <p>2018-2021</p>
              </div>
              <p className="text-xl pt-4">Mathematics and Natural Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
