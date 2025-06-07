import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios'
import { apikey, BaseURL ,imageBaseURL} from '../../apiconfig';
import { Link } from 'react-router-dom';




const HeaderSwiper = ({ 
  
  setBgImage,
  slidesPerView = 4,
  delay = 2000,
   apiPath = "/movie/popular",
   titleClass = "text-base font-semibold",
   imageClass = "w-full object-cover h-full",
   voteClass = "text-md",
   flex = "flex items-center justify-between",
   justify = "relative flex items-center bottom-15 "
   }) => {
  
  const [movies, setMovies] = useState([])
  

  async function getPopularMovies() {
    try {
      const { data } = await axios.get(`${BaseURL}${apiPath}?api_key=${apikey}`)
      console.log("✅ DATA:", data)
      setMovies(data.results || [])
    } catch (err) {
      console.error("❌ Error fetching movies:", err.response?.data || err.message)
    }
  }

  useEffect(() => {
    getPopularMovies()
  }, [apiPath])

  
  return (
    <div className="container w-full mt-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView, spaceBetween: 30 },
        }}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        loop={movies.length > 5} // برای جلوگیری از ارور loop
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Array.isArray(movies) && movies.map((movie) => (
          <SwiperSlide key={movie.id }>
            <Link to = {`/movie/${movie.id}` }>
            <div className='aspect-[2/3] rounded overflow-hidden hover:scale-105 transition'>
            
              <img
                className="max-w-100% object-cover h-full rounded-xl "
                src={`${imageBaseURL}w780/${movie.backdrop_path}`}
                alt=""
                onMouseEnter={() => setBgImage(`${imageBaseURL}w780/${movie.backdrop_path}`)}
              />
            </div>
            </Link>
            
            <div className='px-3'>
            <div className={`flex ${flex}`}>
              <h3 className={`relative bottom-15 text-white line-clamp-2 mr-5 ${titleClass}`}>{movie.title || movie.name}</h3>

              <div className={`${justify}`}>
                <span className={`relative text-white ${voteClass}`}>{movie.vote_average?.toFixed(1) || "N/A"}</span>
                <svg className='text-yellow-300 w-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
              </div>

            
            </div>
            </div>
            
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeaderSwiper;
