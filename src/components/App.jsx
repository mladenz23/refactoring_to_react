import Header from './Header.jsx';
import Download from './Download.jsx';
import Info from './Info.jsx';

function App() {
  return (
    <main>
      <Header />
      <div id='content' className='flex flex-col'>
        <Download />
        <Info />
      </div>
    </main>
  );
}

export default App;
