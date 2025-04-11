import { useBlurOnScroll } from '../hooks/useBlurOnScroll.js';
import { changeHeaderOpacity } from '../hooks/changeHeaderOpacity.js';
import Header from './Header.jsx';
import Download from './Download.jsx';
import Info from './Info.jsx';
import Interface from './Interface.jsx';
import Opinions from './Opinions.jsx';
import Footer from './Footer.jsx';

function App() {
  const showBackToTop = changeHeaderOpacity();
  useBlurOnScroll();

  return (
    <main>
      <Header />

      <div id='content' className='flex flex-col'>
        <Download />
        <Info />
        <Interface />
        <Opinions />
      </div>

      {showBackToTop && (
        <button className='fixed right-0 bottom-[9.1rem] bg-[var(--orange)] py-2 px-4 text-lg rounded-xl'>
          <a
            href='#'
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top
          </a>
        </button>
      )}

      <Footer />
    </main>
  );
}

export default App;
