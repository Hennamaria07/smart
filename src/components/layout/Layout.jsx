import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <main className='pt-[117.6px] bg-gray-100 dark:bg-[#323232] '>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout