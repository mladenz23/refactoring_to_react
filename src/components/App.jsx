import Header from './Header.jsx';
import Download from './Download.jsx';
import Info from './Info.jsx';
import Interface from './Interface.jsx';
import Opinions from './Opinions.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main>
      <Header />
      <div id='content' className='flex flex-col'>
        <Download />
        <Info />
        <Interface />
        <Opinions />
      </div>
      <Footer />
    </main>
  );
}

export default App;
