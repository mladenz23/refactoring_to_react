import { useState } from 'react';

import fbLogo from '../assets/icons/fbLogo.png';
import fbLogoOff from '../assets/icons/fbLogoOff.png';
import instLogo from '../assets/icons/instLogo.png';
import instLogoOff from '../assets/icons/instLogoOff.png';
import twitLogo from '../assets/icons/twitLogo.png';
import twitLogoOff from '../assets/icons/twitLogoOff.png';

const images = [
  {
    image: fbLogo,
    imageOff: fbLogoOff,
    alt: 'Facebook Logo',
    link: '#',
  },
  {
    image: instLogo,
    imageOff: instLogoOff,
    alt: 'Instagram Logo',
    link: '#',
  },
  {
    image: twitLogo,
    imageOff: twitLogoOff,
    alt: 'Twitter Logo',
    link: '#',
  },
];

export default function Footer() {
  return (
    <footer
      id='contactLinks'
      className='bg-[#ddd] flex items-center justify-evenly py-12'
    >
      <div id='links' className='w-[200px] flex justify-between'>
        {images.map((imageGroup, i) => {
          const [hover, setHover] = useState(false);

          return (
            <a href={imageGroup.link} key={i}>
              <img
                className='w-[50px]'
                src={hover ? imageGroup.imageOff : imageGroup.image}
                alt={imageGroup.alt}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </a>
          );
        })}
      </div>
      <div id='arr'>&copy; 2024 BMI Tracker. All rights reserved.</div>
    </footer>
  );
}
