import React from 'react'
import Layout from '../components/layout/Layout'
import { Breadcrumb, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Layout title={'Oops! Page Not Found - EcoMart'} description={"Lost in the wilderness of the internet? Don't worry! Navigate back to EcoMart's lush aisles. Shop sustainably. Shop smartly. Shop at EcoMart."} author={"Henna Maria"} keyword={" EcoMart, e-commerce, MERN stack, sustainable shopping, online marketplace, eco-friendly products, 404 page, lost page"}>
        <section>
    <div>
    <Breadcrumb className='py-10 px-5' aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" >
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">404 Error</Breadcrumb.Item>
    </Breadcrumb>
    </div>
        <div className='flex flex-col items-center h-full w-full pb-10 px-5'>
            <h1 className='text-4xl sm:text-6xl font-semibold line-clamp-2'>404 Not Found</h1>
            <p className='pt-5 pb-10'>Your visited page not found. You may go home page.</p>
            <Link to={'/'}>
            <Button color="info">
            Back to home page
              </Button>
              </Link>
        </div>
    </section>
    </Layout>
  )
}

export default NotFound