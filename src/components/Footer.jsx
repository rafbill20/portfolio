import {
  FaArrowAltCircleUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section
      id="contact"
      className="relative bg-primary h-[60rem] md:h-[60rem] w-full"
    >
      <div className="bg-main w-full h-[60rem] md:h-[60rem]">
        <div className="bg-gradient-to-t from-primary/20 via-primary/20 to-primary z-10 absolute top-0 w-full h-[60rem] md:h-[38rem]">
          <div className="wrapper text-white pt-40">
            <div className="md:px-40">
              <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
                <div
                  className="flex flex-col gap-6 items-center"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="bg-second p-2 text-3xl rounded-full">
                    <MdEmail />
                  </div>
                  <h1 className="text-xl">rafaelbilly6@gmail.com</h1>
                </div>
                <div
                  className="flex flex-col gap-6 items-center"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="bg-second p-2 text-3xl rounded-full">
                    <FaInstagram />
                  </div>
                  <h1 className="text-xl">rafaelbilly_</h1>
                </div>
                <div
                  className="flex flex-col gap-6 items-center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="bg-second p-2 text-3xl rounded-full">
                    <FaWhatsapp />
                  </div>
                  <h1 className="text-xl">+62 8122-5559-700</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <div className="flex items-center gap-10">
                <a
                  href="https://github.com/rafaelbilly"
                  target="_blank"
                  className="bg-second  hover:scale-90 duration-150 p-3 text-3xl rounded-full"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafaelbilly/"
                  target="_blank"
                  className="bg-second  hover:scale-90 duration-150 p-3 text-3xl rounded-full"
                >
                  <FaLinkedin />
                </a>
                <a
                  href=""
                  className="bg-second  hover:scale-90 duration-150 p-3 text-3xl rounded-full"
                >
                  <FaXTwitter />
                </a>
                <a
                  href=""
                  className="bg-second  hover:scale-90 duration-150 p-3 text-3xl rounded-full"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="mt-20 text-center flex flex-col text-xl gap-4 items-center text-white">
              <h1>Copyright &copy; Rafael | All Right Reserved</h1>
              <a href="#hero">
                <FaArrowAltCircleUp className="animate-bounce text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
