import React from 'react'

export const Navigation = () => {
  return (
    <nav className='container flex items-center justify-between pt-5 uppercase text-teal-50'>
        <div className='flex items-center'>
            <a className='text-3xl text-sky-400'>ifilm</a>
            <ul className='flex gap-10 ml-25'>
                <li><a href="#">movies</a></li>
                <li><a href="#">tv shows</a></li>
                <li><a href="#">people</a></li>
                <li><a href="#">more</a></li>
            </ul>
        </div>
        <div className='flex gap-5'>
            <a className='px-5 py-1 rounded-xl bg-sky-400' href="#">login</a>
            <a className='px-5 py-1 rounded-xl bg-sky-400' href="#">sign up</a>
        </div>
    </nav>
  )
}
