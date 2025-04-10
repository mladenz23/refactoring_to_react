import { useState } from 'react';
import fbLogo from '../assets/icons/fbLogo.png';
import fbLogoOff from '../assets/icons/fbLogoOff.png';
import instLogo from '../assets/icons/instLogo.png';
import instLogoOff from '../assets/icons/instLogoOff.png';
import twitLogo from '../assets/icons/twitLogo.png';
import twitLogoOff from '../assets/icons/twitLogoOff.png';

export default function Footer() {
  const [fb, setFb] = useState(fbLogo);
  const [inst, setInst] = useState(instLogo);
  const [twit, setTwit] = useState(twitLogo);

  return (
    <footer
      id='contactLinks'
      className='bg-[#ddd] flex items-center justify-evenly py-12'
    >
      <div id='links' className='w-[200px] flex justify-between'>
        <a href=''>
          <img
            className='w-[50px]'
            src={fb}
            alt='Facebook Logo'
            onMouseEnter={() => setFb(fbLogoOff)}
            onMouseLeave={() => setFb(fbLogo)}
          />
        </a>
        <a href=''>
          <img
            className='w-[50px]'
            src={inst}
            alt='Instagram Logo'
            onMouseEnter={() => setInst(instLogoOff)}
            onMouseLeave={() => setInst(instLogo)}
          />
        </a>
        <a href=''>
          <img
            className='w-[50px]'
            src={twit}
            alt='Twitter Logo'
            onMouseEnter={() => setTwit(twitLogoOff)}
            onMouseLeave={() => setTwit(twitLogo)}
          />
        </a>
      </div>
      <div id='arr'>&copy; 2024 BMI Tracker. Vse pravice pridržane.</div>
    </footer>
  );
}
