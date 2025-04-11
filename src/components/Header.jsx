import NavLink from './NavLink.jsx';

export default function Header() {
  return (
    <header className='flex fixed w-full h-[70px] bg-stone-100 shadow-[0_1px_2px_#fff] z-50 hover:opacity-100 hover:transition-opacity'>
      <ul className='flex items-center ml-8'>
        <NavLink link='#' label='DOWNLOAD' />
        <NavLink link='#info' label='FEATURES' />
        <NavLink link='#interface' label='INTERFACE' />
        <NavLink link='#opinions' label='FEEDBACK' />
      </ul>
    </header>
  );
}
