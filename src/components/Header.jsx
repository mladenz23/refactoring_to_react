import { useEffect, useRef } from 'react';
import NavLink from './NavLink.jsx';

export default function Header() {
  const navbarRef = useRef(null);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 70) {
        navbar.style.opacity = '0.7';
        navbar.style.transition = 'opacity 0.5s';
        isScrolledRef.current = true;
      } else {
        navbar.style.opacity = '1';
        navbar.style.transition = 'opacity 0.5s';
        isScrolledRef.current = false;
      }
    };

    const handleMouseOver = () => {
      if (isScrolledRef.current) {
        navbar.style.opacity = '1';
        navbar.style.transition = 'opacity 0.5s';
      }
    };

    const handleMouseOut = () => {
      if (isScrolledRef.current) {
        navbar.style.opacity = '0.7';
        navbar.style.transition = 'opacity 0.5s';
      }
    };

    window.addEventListener('scroll', handleScroll);
    navbar.addEventListener('mouseover', handleMouseOver);
    navbar.addEventListener('mouseout', handleMouseOut);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navbar.removeEventListener('mouseover', handleMouseOver);
      navbar.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <header className='flex fixed w-full h-[70px] bg-stone-100 shadow-[0_1px_2px_#fff] z-50 hover:opacity-100 transition-opacity duration-500' ref={navbarRef}>
      <ul className='flex items-center ml-8'>
        <NavLink link='#' label='DOWNLOAD' />
        <NavLink link='#info' label='FEATURES' />
        <NavLink link='#interface' label='INTERFACE' />
        <NavLink link='#opinions' label='FEEDBACK' />
      </ul>
    </header>
  );
}
