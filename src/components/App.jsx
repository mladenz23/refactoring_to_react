import Header from './Header.jsx';
import Download from './Download.jsx';
import Info from './Info.jsx';
import Interface from './Interface.jsx';

function App() {
  return (
    <main>
      <Header />
      <div id='content' className='flex flex-col'>
        <Download />
        <Info />
        <Interface />
      </div>
    </main>
  );
}

export default App;
