import opinionsData from '../utils/opinionsData.js';

export default function Opinions() {
  return (
    <section
      id='opinions'
      className='blurred flex flex-col items-center bg-[var(--white)] py-20'
    >
      <h1 className='text-3xl mb-10'>User feedback</h1>

      <div id='opinion-boxes' className='flex w-1/2'>
        {opinionsData.map((opinion, i) => (
          <div className='flex flex-col items-center px-[1.2rem]' key={i}>
            <img
              src={opinion.image}
              alt='User avatar'
              className='w-24 rounded-full'
            />
            <p className='text-center mt-4'>{opinion.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
