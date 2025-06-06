import React from 'react'

export const Searchbar = () => {
  return (
    <div className='container mt-10 text-slate-800'>
        <h2 className='text-3xl font-bold md:text-5xl'>Welcome.</h2>
        <h2 className='mb-10 text-lg font-bold md:text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</h2>
        <div className='relative'>
            <input type="text" placeholder='Search for a movie, tv show, person......' className='w-full px-6 py-3 text-black bg-slate-400 outline-none rounded-3xl placeholder:text-black placeholder:text-sm md:placeholder:text-lg'/>
            <a className='absolute right-0 px-8 py-3 text-black rounded-3xl bg-slate-700 ' href="#">Search</a>
        </div>
    </div>
  )
}
