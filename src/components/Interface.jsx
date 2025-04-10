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
            Ergonomski
            <br />
            <span>vmesnik</span>
          </h1>
          <p className='text-[var(--white)] w-[55%]'>
            Naš ergonomski vmesnik je ključnega pomena za uporabniško izkušnjo,
            da bo le-ta učinkovita in prijetna. To vključuje skrbno postavljene
            elemente, ki omogočajo intuitivno navigacijo in enostavno uporabo.
            Poleg tega je naš vmesnik prilagodljiv za vse naprave, kar
            zagotavlja optimalno berljivost in uporabnost na različno velikih
            zaslonih. Jasna organizacija informacij ter dosledna uporaba barv,
            tipografije in simbolov prispevajo k enostavni prepoznavnosti in
            razumevanju vmesnika. V celoti, naš vmesnik omogoča gladko in
            prijetno uporabniško izkušnjo, ki spodbuja produktivnost in
            zadovoljstvo uporabnika.
          </p>
          <button id='interfaceButton' className={btn}>PREIZKUSITE ZDAJ</button>
        </div>
      </div>
    </section>
  );
}
