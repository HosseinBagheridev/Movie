
import { Pagination, Navigation } from 'swiper/modules';
import HeaderSwiper from '../Header/HeaderSwiper';
import React, { useState, useEffect } from 'react';



export const MainSwiper = ({
  setBgImage,
  apiPath = "/trending/all/day",
  title = "Trending",
  showTimeTabs = true,
}) => {
  const [timeWindow, setTimeWindow] = useState("day");
  const [currentApiPath, setCurrentApiPath] = useState(apiPath);

  useEffect(() => {
    if (title === "Trending") {
      setCurrentApiPath(`/trending/all/${timeWindow}`);
    }
  }, [timeWindow, title]);

  return (
    <div className="mt-8 w-full">
      <div className="bg-slate-800 py-5">
        <div className="container flex items-center gap-10 md:gap-15">
          <h2 className="text-2xl text-white ">{title}</h2>
          {showTimeTabs && (
            <div className="text-sm md:text-sm lg:text-lg flex items-center gap-4 border-1 border-white  rounded-2xl">
              <p
                className={`text-white cursor-pointer px-4 py-0.5 ${timeWindow === "day" ? "font-bold bg-slate-400 rounded-2xl" : ""}`}
                onClick={() => setTimeWindow("day")}
              >
                Today
              </p>
              <p
                className={`text-white cursor-pointer px-4 py-0.5 ${timeWindow === "week" ? "font-bold bg-slate-400 rounded-2xl" : ""}`}
                onClick={() => setTimeWindow("week")}
              >
                This Week
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <HeaderSwiper
          className="text-lg font-normal"
          slidesPerView={6}
          delay={4000}
          apiPath={currentApiPath}
          titleClass="text-sm font-medium"
          voteClass="text-sm"
          flex="flex-col-reverse"
          setBgImage={setBgImage}
        />
      </div>
    </div>
  );
};
