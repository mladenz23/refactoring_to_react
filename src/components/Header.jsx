import NavLink from './NavLink.jsx';

export default function Header() {
  return (
    <header className='flex fixed w-full h-20 bg-stone-100 shadow-[0_1px_2px_#fff] z-50 hover:opacity-100 hover:transition-opacity'>
      <ul className='flex items-center ml-8'>
        <NavLink link='#' label='Prenos' />
        <NavLink link='#info' label='Lastnosti' />
        <NavLink link='#interface' label='Vmesnik' />
        <NavLink link='#opinions' label='Mnenje' />
      </ul>
    </header>
  );
}
