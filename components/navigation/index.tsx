import Link from 'next/link'
import React from 'react'
import { Theme } from './Theme'

const Navbar = () => {
  return (
    <nav className='flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300'>
      <Link href="/" className="flex items-center gap-1">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 hidden sm:block">
          Stack<span className="text-primary-500">Mind</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className='flex-between gap-5'>
        <Theme/>
      </div>
    </nav>
  )
}

export default Navbar
