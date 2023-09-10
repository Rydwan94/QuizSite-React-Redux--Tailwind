import { useInView } from "framer-motion";
import Vector2 from "../../assets/images/Vector2.png";
import InfoCard from "../../components/InfoCard";
import { infoList } from "../../constants";

import infoBookIcon from "../../assets/icons/infoBookIcon.png";
import checkIcon from "../../assets/icons/infoCheck.png";
import infoArrow from "../../assets/icons/infoArrow.png";
import infoNote from "../../assets/icons/infoNote.png";
import { useEffect, useRef } from "react";

const LearningInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("elemens is in ", isInView);
  }, [isInView]);

  const infoCardList = infoList.map((card) => (
    <InfoCard key={card.title} {...card} />
  ));

  return (
    <section ref={ref} id="learn">
      <div className="relative pt-96 pb-40 max-lg:px-4">
        <img
          className="absolute right-0 top-10"
          src={Vector2}
          alt="vector2"
          width={200}
        />
        <div className="max-container">
          <h2 className="font-allerta text-4xl ">
            Let’ checkout your <br />
            <span className="text-[#3A7CD9]"> learning</span> journey
          </h2>
          <div
            className={`lg:flex justify-between items-center max-md:flex max-md:flex-col-reverse max-lg:flex max-lg:flex-col max-lg:items:center ${
              isInView && "animate-fade-left animate-delay-500 animate-once"
            }`}
          >
            <div className="mt-40 grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {infoCardList}
            </div>
            <div className="flex flex-col justify-end max-md:pt-20 min-w-[400px]">
              <img src={infoBookIcon} alt="bookicon" width={150} />
              <img
                className="self-end"
                src={checkIcon}
                alt="checkicon"
                width={150}
              />
              <img src={infoArrow} alt="arrowicon" width={150} />
              <img
                className="self-end"
                src={infoNote}
                alt="noteicon"
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningInfo;
