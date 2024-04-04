import { Dropdown, Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getTheme } from '../../redux/features/theme/themeSlice';

const Header = () => {
  const [categoryId, setCategoryId] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector(state => state.userAuth.user);
  console.log('user--------->', user);
  const [categoryLists, setCategoryLists] = useState([]);
  const isAuthenticated = useSelector(state => state.userAuth.isAuthenticated)
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [theme]);
  const handleSignOut = (e) => {
    // console.log('event->' ,e);
    // e.preventDefault();
    dispatch(userAuth({
      user: null,
      token: null,
      isAuthenticated: false
    }));
    Cookies.remove("accessToken");
    // navigate("/login");
  }
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await instance.get('/api/v1/category/all-categories', { withCredentials: true });
        // console.log(res.data);
        if (res.data.success) {
          setCategoryLists(res.data.category);
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    getCategory();
  }, [])
  // console.log(user)
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    dispatch(getTheme({ theme: newTheme }));
  }
  const handleClick = async (id) => {
    setCategoryId(id);
  }
  // useEffect(() => {
  //   dispatch(getCategoryId({categoryId}))
  // }, [categoryId])
  return (
    <header className='fixed w-full z-50 '>
      <div className='bg-[#043E44] h-14 grid grid-cols-3 place-items-center px-5 text-white'>
        <div className='me-auto' >
          <p>logo</p>
        </div>
        <div className="flex justify-center">
          <div className="relative text-gray-600">
            <input type="search" className="bg-purple-white shadow rounded border-0 p-2 w-[200px] sm:w-[400px]" placeholder="search here..." />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <span className="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </div>
        <div className='flex md:gap-2'>
          <Link to={'/seller/request'}>
            <button type="button" className="text-gray-900 rounded-md hidden lg:flex bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium text-sm px-5 py-2.5 ">Become a seller</button>
          </Link>
          <div onClick={handleThemeToggle} className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer">
            {theme === "light" ? (
              <span className="material-symbols-outlined">
                dark_mode
              </span>
            ) : (
              <span className="material-symbols-outlined">
                light_mode
              </span>
            )}
          </div>
        </div>
      </div>
      <nav>
        <Navbar fluid className='bg-[#8CB9BD] dark:bg-[#8CB9BD]'>
          <Dropdown color='light' label="All Categories">
            {/* {categoryLists && categoryLists.map((category) => (
                <Dropdown.Item key={category._id} onClick={(e) => handleClick(category._id)} >{category.name}</Dropdown.Item>
              ))} */}
          </Dropdown>

          <div className="flex md:order-2">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined">
                favorite
              </span>
              <span className="material-symbols-outlined pe-4">
                garden_cart
              </span>
            </div>
            {isAuthenticated ? (<Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user.image.avatar} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </Dropdown.Header>
              {user && user.role === "admin" ? (
                <>
                  <Link to={'/admin'}><Dropdown.Item>Admin Dashboard</Dropdown.Item></Link>
                </>
              ) : ""}
              <Link to={'/user'}><Dropdown.Item>Settings</Dropdown.Item></Link>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>) : (<Link className=' flex items-center' to={'/login'}><p className='text-gray-900 font-semibold cursor-pointer'>
              Sign in
            </p></Link>)}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link to={'/'} className='text-gray-900 dark:text-gary-900'>
              Home
            </Link>
            <Link to={'/trending'} className='text-gray-900 dark:text-gary-900'>Best Seller</Link>
            <Link to={'/products'} className='text-gray-900 dark:text-gary-900'>Products</Link>
            {/* <Link to={'/sales'} className='text-gray-900 dark:text-gary-900'>Sales</Link> */}
            <Link to={'/faq'} className='text-gray-900 dark:text-gary-900'>FAQ</Link>
            <Link to={'/seller/request'} className='text-gray-900 lg:hidden block'>Become a seller</Link>
          </Navbar.Collapse>
        </Navbar>

      </nav>
    </header>
  )
}

export default Header