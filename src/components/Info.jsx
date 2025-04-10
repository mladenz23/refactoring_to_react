import infoData from '../utils/infoData.js';

export default function Info() {
  return (
    <section
      id='info'
      className='blurred bg-[var(--white)] min-h-[60vh] flex justify-center'
    >
      {infoData.map((file, i) => (
        <div className='my-40 mx-12 w-[280px]' key={i}>
          <div id='infoLogo' className='mb-3 ml-2'>
            <img
              src={file.image}
              alt={file.label}
              className={`${file.label === 'Calculator' ? 'w-8' : 'w-10'}`}
            />
          </div>
          <div className='text-2xl font-bold mb-4'>{file.title}</div>
          <div className='text-base'>{file.text}</div>
        </div>
      ))}
    </section>
  );
}
