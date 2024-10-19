import React from 'react';
import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';

const page = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black text-white p-8'>
                <h1 className='text-4xl font-bold mb-8 text-center'>&lt;Portfolio/&gt;</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8 '>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60 '>
                        <Image
                            src="/blog-web.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6 '>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://my-blog-web-gilt.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/todo-list.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://to-do-listxyz.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/web-1.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://music-course-web.vercel.app/?vercelToolbarCode=C4F9jeV3oPGtVJH' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/calculator.png"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://calculator-seven-taupe-23.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/web-2.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://e-comerce-website-three.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/web_2.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://move-cursur.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default page