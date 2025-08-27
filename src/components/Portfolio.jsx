import React from "react";
import { FaBootstrap, FaLaravel, FaReact } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { portfolioData } from "../constants/portfolioData";
import PropTypes from "prop-types";

const technologyIcons = {
  react: (
    <FaReact className="border-2 hover:-translate-y-2 duration-150 border-white bg-primary w-10 h-10 rounded-full p-[0.4rem] text-cyan-400" />
  ),
  bootstrap: (
    <FaBootstrap className="border-2 hover:-translate-y-2 duration-150 border-white bg-primary w-10 h-10 rounded-full p-[0.4rem] text-purple-400" />
  ),
  laravel: (
    <FaLaravel className="border-2 hover:-translate-y-2 duration-150 border-white bg-primary w-10 h-10 rounded-full p-[0.4rem] text-red-400" />
  ),
  mysql: (
    <SiMysql className="border-2 hover:-translate-y-2 duration-150 border-white bg-primary w-10 h-10 rounded-full p-[0.4rem] text-orange-200" />
  ),
  tailwind: (
    <SiTailwindcss className="border-2 hover:-translate-y-2 duration-150 border-white bg-primary w-10 h-10 rounded-full p-[0.4rem] text-orange-200" />
  ),
};

const PortfolioCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  technologies,
  link,
}) => (
  <div className="border-2 hover:scale-105 duration-150 hover:border-white border-[#252525] h-fit md:h-[33rem] rounded-[2rem] p-4">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="rounded-[2rem] h-56 w-full object-cover object-center"
    />
    <div className="flex mt-4 text-white flex-col">
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="text-md">{description}</p>
    </div>
    <div className="mt-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex -space-x-2">
          {technologies.map((tech) => (
            <React.Fragment key={tech}>{technologyIcons[tech]}</React.Fragment>
          ))}
        </div>
        <div className="text-white flex gap-2 items-center hover:scale-90 duration-150">
          {link && (
            <a
              href={link}
              target="_blank"
              className="flex gap-2 items-center"
              rel="noopener noreferrer"
            >
              Visit
              <GoArrowUpRight className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

PortfolioCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
};

PortfolioCard.defaultProps = {
  link: "",
};
const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-primary w-full h-fit pb-20">
      <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-stretch">
        {portfolioData.map((item, index) => (
          <>
            {(index === 3 || index === 5) && <div className="col-span-1"></div>}
            <PortfolioCard
              key={item.id}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              link={item.link}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
