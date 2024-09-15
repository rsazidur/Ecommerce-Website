import React, { useState }from 'react'
import { FaBars, FaTimes, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import logo from '/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        {title: 'Shooting Games', path: '/'},
        {title: 'Soul Games', path: '/'},
        {title: 'Adventure Games', path: '/'},
        {title: 'Racing Games', path: '/'},
        {title: 'Horror Games', path: '/'},
        {title: 'Strategy Games', path: '/'},
        {title: 'Puzzle Games', path: '/'},
    ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3 '>
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block ' />

        {/* Logo */}
        <a href="/"><img src={logo} alt=""/></a>

        {/* account and shoping btn */}
        <div className='text-lg text-Black sm:flex items-center gap-4 hidden '>
          <a href='/' className='flex items-center gap-2'><FaUser /> Account</a>
          <a href='/' className='flex items-center gap-2'><FaShoppingBag /> Shopping</a>
        </div>

        {/* Mobile Menu */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {
            isMenuOpen ? <FaTimes className="w-5 h-5 text-Black"/> : <FaBars className="w-5 h-5 text-Black"/>
            }
          </button>
        </div>
      </nav>

      <hr />

      {/* Category Items */}
      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-black hidden'>
            {
                navItems.map(({title, path}) => (
                    <li key={title} className='hover:text-rose-600'>
                        <Link to={"/"}>{title}</Link>
                    </li>
                ))
            }
        </ul>
      </div>
        
      {/*Only Mobile Menu */}
      <div>
      <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
            {
                navItems.map(({title, path}) => (
                    <li key={title} className='hover:text-rose-600 my-3 cursor-pointer'>
                        <Link to={"/"}>{title}</Link>
                    </li>
                ))
            }
        </ul>
      </div>

    </header>
  )
}

export default Navbar