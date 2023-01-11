import Link from "next/link";
import React from "react";
import { experence } from "../data";

const Work = () => {
 
  return (
    <div className="work-wrapper" id="work">
      {experence.map(({ img, desc:{ title, desc, link}}, index) => {
        return (
          <div key={index}>
            {index % 2 !== 0 ? (
              <div className="project">                
                <div className="img-container">
                  <img src={img} alt="" className="project-img" />
                </div>
                <div className="project-desc" >
                  <h2>{title}</h2>
                  <p className="desc">{desc}</p>
                  <Link className="view-project" href={link} target='_blank'>
                    View Project
                    <img src="/ArrowRight.svg" alt="" id="arrow-right" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="project">
                <div className="img-container">
                  <img src={img} alt="" className="project-img" />
                </div>
                <div className="project-desc-even">
                  <h2>{title}</h2>
                  <p className="desc">{desc}</p>
                  <Link className="view-project" href={link}>
                    {" "}
                    View Project{" "}
                    <img src="/ArrowRight.svg" alt="" id="arrow-right" />
                  </Link>
                </div>
              </div>
            )}
          </div>      
        );
      })}
    </div>
  );
};

export default Work;
