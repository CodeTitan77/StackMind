import Navbar from '@/components/navigation'
import React from 'react'
import {ReactNode} from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  )
}

export default RootLayout
