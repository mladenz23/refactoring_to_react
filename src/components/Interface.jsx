import interfaceImg from '../assets/images/interfaceImg.png';
import { btn } from './Download.jsx';

export default function Interface() {
  return (
    <section
      id='interface'
      className='blurred flex justify-center items-center bg-gradient-to-r from-[#222] to-[var(--red)]'
    >
      <div id='interfaceBox' className='flex justify-between w-1/2 my-20'>
        <div id='interfaceImg' className='w-[43%]'>
          <img src={interfaceImg} alt='BMI Tracker UI' />
        </div>
        <div id='interfaceDesc' className='w-[57%]'>
          <h1 className='text-7xl text-[var(--orange)] mb-4'>
          Ergonomic
            <br />
            <span>Interface</span>
          </h1>
          <p className='text-[var(--white)] w-[55%]'>
          Our ergonomic interface plays a key role in ensuring an efficient and pleasant user experience. It features thoughtfully placed elements that allow for intuitive navigation and easy use. Additionally, our interface is fully responsive across all devices, ensuring optimal readability and usability on screens of all sizes. Clear organization of information, along with consistent use of colors, typography, and icons, contributes to easy recognition and understanding of the interface. Overall, our interface provides a smooth and enjoyable user experience that promotes productivity and user satisfaction.
          </p>
          <button id='interfaceButton' className={btn}>TRY NOW</button>
        </div>
      </div>
    </section>
  );
}
