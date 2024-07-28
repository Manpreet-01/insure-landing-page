import logo from '../images/logo.svg';
import menuIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);


    return (
        <nav className={`bg-[--clr5] flex justify-around items-center p-6 md:p-4 relative z-10 ${open && 'open'}`}>

            <img src={logo} alt="logo" />

            {/* {open ?
                <img onClick={e => setOpen(false)} className='md:hidden hover:scale-105 ml-auto cursor-pointer' src={closeIcon} alt="close-icon" />
                :
                <img onClick={e => setOpen(true)} className='md:hidden ml-auto hover:scale-105 cursor-pointer' src={menuIcon} alt="menu-icon" />
            } */}


            <img onClick={e => setOpen(c => !c)} className='md:hidden hover:scale-105 ml-auto cursor-pointer' src={open ? closeIcon : menuIcon} alt="menu-icon" />


            <ul className='hidden md:flex items-center gap-x-8 text-[--clr4] font-bold'>
                <li>
                    <a className='hover:text-[--clr3]' href="#">How we work</a>
                </li>

                <li>
                    <a className='hover:text-[--clr3]' href="#">Blog</a>
                </li>

                <li>
                    <a className='hover:text-[--clr3]' href="#">Account</a>
                </li>

                <li>
                    <a className='text-[--clr1] hover:text-[--clr5] hover:bg-[--clr1] hover:scale-105 text-sm border-2 border-[--clr1] px-6 py-2 uppercase' href="#">View plans</a>
                </li>
            </ul>
        </nav>
    );
}
