import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbMenu2 ,TbMenu3 } from "react-icons/tb";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu,setShowMenu]=useState(false);
    const[isScrolled , setIsScrolled]=useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
      const handleScroll=()=>{
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll',handleScroll)
      return()=>window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]':''}` }>
        <nav className="max-w-[1400px] mx-auto px-10 flex justify-between  md:h-[14vh] h-[12vh] items-center">
            {/*LOGO*/}
            <Link to="/" className="text-3xl font-bold">
                Gr<span className="text-orange-500">O</span>cify
            </Link>

            {/*Desktop Menu*/}
            <ul className="md:flex items-center gap-x-15 hidden">
                <li>
                    <a href="#"className="font-semibold tracking-wider text-orange-500">Home</a>
                </li>
                 <li>
                    <a href="#"className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About us</a>
                </li>
                 <li>
                    <a href="#"className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
                </li>
                 <li>
                    <a href="#"className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact us</a>
                </li>
                
            </ul>


            {/*Nav Action*/}

            <div className="flex items-center  gap-x-5 ">
                {/*Input Field*/}
                 <div className="md:flex  p-1 border-2 border-orange-500 rounded-full hidden">
                    <input type="text" name="Text" id="text" placeholder="Search..." autocomplete='off' className="flex-1 h-[5vh] px-3 focus:outline-none"/>
                    <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 rounded-full flex justify-center items-center text-xl">
                        <FaSearch />
                    </button>
                 </div>

                <a href="#" className="text-zinc-800 text-2xl"><FaHeart /></a>
                 <a href="#" className="text-zinc-800 text-2xl"><FaBagShopping /> </a>

                 {/* Hamburger */}
                 <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>{showMenu ? <RiMenu3Line /> : <TbMenu2 /> } </a>
            </div>

            {/* Mobile emn */}
             <ul className={`flex flex-col  gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 shadow-xl items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2':""}`}>
                <li>
                    <a href="#"className="font-semibold tracking-wider text-orange-500">Home</a>
                </li>
                 <li>
                    <a href="#"className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About us</a>
                </li>
                 <li>
                    <a href="#"className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
                </li>
                 <li>
                    <a href="#"className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact us</a>
                </li>
                
                 
                 <li className="flex  p-1 border-2 border-orange-500 rounded-full md:hidden">
                    <input type="text" name="Text" id="text" placeholder="Search..." autocomplete='off' className="flex-1 h-[5vh] px-3 focus:outline-none"/>
                    <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 rounded-full flex justify-center items-center text-xl">
                        <FaSearch />
                    </button>
                 </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar


  