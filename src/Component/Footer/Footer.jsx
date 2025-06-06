import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-slate-800 mt-5 pt-10 pb-10'>
        <div className='container grid justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-15 gap-y-5 text-md text-black '>
            <ul className='flex flex-col gap-y-2'>
            <li className='text-xl font-extrabold'>
                <Link>The Basics</Link>
            </li>
            <li>
                <Link>About TMDB</Link>
            </li>
            <li>
                <Link>Contact Us</Link>
            </li>
            <li>
                <Link>Support Forums</Link>
            </li>
            <li>
                <Link>API Documentation</Link>
            </li>
            </ul>
            <ul className='flex flex-col gap-y-2'>
            <li className='text-xl font-extrabold'>
                <Link>Get Involved</Link>
            </li>
            <li>
                <Link>Contribution Bible</Link>
            </li>
            <li>
                <Link>Add New Movie</Link>
            </li>
            <li>
                <Link>Add New TV Show</Link>
            </li>
            </ul>
            <ul className='flex flex-col gap-y-2'>
            <li className='text-xl font-extrabold'>
                <Link>Community</Link>
            </li>
            <li>
                <Link>Guidelines</Link>
            </li>
            <li>
                <Link>Discussions</Link>
            </li>
            <li>
                <Link>Leaderboard</Link>
            </li>
            </ul>
            <ul className='flex flex-col gap-y-2'>
            <li className='text-xl font-extrabold'>
                <Link>Legal</Link>
            </li>
            <li>
                <Link>Terms of Use</Link>
            </li>
            <li>
                <Link>API Terms of Use</Link>
            </li>
            <li>
                <Link>Privacy Policy</Link>
            </li>
            <li>
                <Link>DMCA Policy</Link>
            </li>
            </ul>
        </div>
        
    </div>
    </div>
    
  )
}
