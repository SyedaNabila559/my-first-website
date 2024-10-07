import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  return (
    <div className='bg-blue-600 h-20' style={{ backgroundColor: '#044E83' }}>
      <ul className='font-semibold flex justify-center items-center gap-10 h-full'>
        <li className='flex gap-4 mr-11 font-sans items-center h-10'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5wPL1APETRp_RjOryubE4F38kobYEkRNLg&s" alt="Logo" className='h-28 mt-20' />
          <h3 className='text-2xl font-bold text-blue-200 mr-14 ml-28' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            Tuition Free Education Program on Latest Technologies
          </h3>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/apply">Apply</Link>
        </li>
        <li>
          <Link href="/job">Jobs</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
