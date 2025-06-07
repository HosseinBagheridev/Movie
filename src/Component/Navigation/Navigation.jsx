import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const[OpenMenu , setOpenMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  }, [darkMode]);

  return (
    <div className='py-2 bg-slate-800'>
      <nav className='container flex items-center justify-between uppercase py-2 text-teal-50'>
        <div className='flex items-center'>
            <Link className='text-3xl ' to='/'>MyFlix </Link>
            <ul className='hidden gap-4 ml-10 md:flex md:text-sm lg:ml-20 lg:text-lg'>
                <li className="relative group text-white uppercase cursor-pointer">
                  <span className="hover:text-slate-400 transition">TV Shows</span>

                  <ul className="absolute hidden group-hover:flex flex-col lg:text-sm bg-slate-600 rounded-md shadow-md top-full mt-.5 z-10 min-w-[160px] ">
                      <li className="px-4 py-2 hover:bg-slate-700" onClick={() => {
                        document.getElementById("Trending-tv")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                      Trending
                      </li>
                      <li className="px-4 py-2 hover:bg-slate-700" onClick={() => {
                        document.getElementById("top-rated-tv")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                      Top Rated
                      </li>
                  </ul>
                </li>
                <li className="hover:text-slate-400 transition"><Link to="/people">people</Link></li>
                <li className="hover:text-slate-400 transition"><Link  to="/genres">Genres</Link></li>
                <li className="hover:text-slate-400 transition mr-5"><Link to="/about">About</Link></li>
            </ul>
        </div>
        <div onClick={() => setDarkMode(!darkMode)} className={`w-10 h-5 lg:w-12 lg:h-6 rounded-full cursor-pointer lg:ml-10 flex items-center transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                <div className={`w-4 lg:w-5 h-4 lg:h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`}/>
              </div>
        <div className='hidden gap-3 md:flex md:ml-auto md:text-sm lg:text-lg'>
            <Link className='px-5 py-1 rounded-xl bg-slate-600' to="/login">login</Link>
            <Link className='px-5 py-1 rounded-xl bg-slate-600' to="/signup">sign up</Link>
        </div>
        <button onClick={()=>{setOpenMenu(!OpenMenu)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 md:hidden '
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
    </nav>
    <div className=" md:hidden">
      <ul className={OpenMenu ?  'flex flex-col gap-3 justify-center items-center mt-5 text-xl text-white uppercase border-t-2 pt-3 border-slate-600' : 'hidden'}>
                <li><Link to="/tvshows">Tv Shows</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/genres">Genres</Link></li>
                <li><Link to="/about">About</Link></li>
      </ul>
      <div className={OpenMenu ?  'flex gap-3 justify-center items-center mt-3 text-xl text-white uppercase border-t-2 pt-3 border-slate-600': 'hidden'}>
            <Link className='px-5 py-1 rounded-xl bg-slate-600' to="/login">login</Link>
            <Link className='px-5 py-1 rounded-xl bg-slate-600' to="/signup">sign up</Link>
      </div>
    </div>
    </div>
    
  )
}
