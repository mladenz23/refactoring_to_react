import bmiSplash from '../assets/images/bmiBgSplash.png';
import phoneFrame from '../assets/images/phoneContainer.png';

export const btn =
  'mt-12 bg-[var(--orange)] text-lg font-bold cursor-pointer hover:bg-[var(--white)] transition-all duration-500 w-60 h-14';

export default function Download() {
  return (
    <section
      id='download'
      className='blurred py-28 flex justify-evenly items-center mt-[80px] px-[15%] bg-gradient-to-r from-[var(--blue)] to-[#222]'
    >
      <div>
        <h1 className='text-[5em] text-[var(--orange)]'>PRENESITE</h1>
        <h2 className='text-[4em] text-[var(--white)]'>
          našo novo
          <br />
          mobilno aplikacijo
        </h2>
        <hr className='h-3 w-28 mt-[5rem] mb-8 bg-[var(--orange)] border-0' />
        <h3 className='text-2xl text-[var(--white)] font-["Courier_New", monospace] '>
          DOSTOPNO NA VSEH PLATFORMAH
        </h3>
        <button className={btn}>PRENOS</button>
      </div>
      <div className='flex justify-center'>
        <img
          className='absolute rounded-[50px] w-[340px] h-[690px] mt-[5px]'
          id='downloadImgOne'
          src={bmiSplash}
          alt='BMI Logo on phone'
        />
        <img
          className='relative w-[350px] h-[700px]'
          id='downloadImgTwo'
          src={phoneFrame}
          alt='Phone frame'
        />
      </div>
    </section>
  );
}
