export default function NavLink({ link, label }) {
  return (
    <li>
      <a
        href={link}
        className='group text-2xl mx-4 px-1 flex flex-col items-center text-stone-800 transition-colors duration-300 hover:text-[var(--orange)]'
      >
        {label}
        <div className='h-[2px] w-[10%] rounded-[5px] bg-[var(--orange)] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full'></div>
      </a>
    </li>
  );
}
