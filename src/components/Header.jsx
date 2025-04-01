import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);


    return (
        <nav>
            <div className='relative flex gap-4 justify-between itmes-center mb-2'>
                <Link to='/'>
                    <img src={logo} className='w-8' alt="Giphy logo" />
                    <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>    
                        GIPHY
                    </h1>
                </Link>
                {/* render categories */}
                <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
                    Reactions
                </Link>
            </div>
        </nav>
    )       
}

export default Header