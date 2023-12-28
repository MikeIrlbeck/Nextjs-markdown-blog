import Image from 'next/image';

function About() {
  return (
    <div className='w-full flex justify-center font-Bai'>
      <div className='md:w-2/3 px-12 py-6 text-xl'>
        <div className='md:w-1/3 mx-auto border-2 border-black rounded-2xl my-3'>
          <Image
            src='/images/profilepic.jpg'
            width='300px'
            height='300px'
            layout='responsive'
            alt='profile image'
            className='rounded-xl'
          />
        </div>
        <h3>
          Hi there, my name is{' '}
          <span className='font-semibold text-gray-700'>Mike Irlbeck</span>, and
          I am a software engineer at a robotics company.
        </h3>
        <h1 className=' text-2xl font-semibold text-gray-700 my-2'>Hobbies</h1>
        <h3>
          I enjoy venturing out into Colorado&apos;s great outdoors, reading
          books, and drinking coffee.
        </h3>
        <h1 className=' text-2xl font-semibold text-gray-700 my-2'>Connect</h1>
        <ul className='px-5  font-semibold text-gray-500 my-2'>
          <li>
            <a href='https://github.com/MikeIrlbeck'>Github</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mike-irlbeck'>LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
