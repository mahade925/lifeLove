import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='my-48'>
            <h1 className='josefins-sans text-2xl mb-4'>News</h1>
            <h1 className='josefins-sans text-4xl mt-2 mb-16'>FROM OUR BLOG</h1>
            <div class="grid grid-cols-3 gap-10 w-8/12 m-auto text-left">
                <div className='hover:grayscale duration-700 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1594709286212-9b2e54ba08b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='h-3/4 w-full' />
                    <h1 className='text-xl poppins my-4 text-blue-500'>By Loura Sweety - 25 Sep 2021</h1>
                    <h1 className='text-3xl josefins-sans hover:text-blue-500 cursor-pointer duration-300'>Best wedding gift you may like & choose.</h1>
                </div>
                <div className='hover:grayscale duration-700 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1518049655356-4b957c5e604a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="" className='h-3/4 w-full' />
                    <h1 className='text-xl poppins my-4 text-blue-500'>By Loura Sweety - 25 Sep 2021</h1>
                    <h1 className='text-3xl josefins-sans hover:text-blue-500 cursor-pointer duration-300'>Photography is the important part of wedding.</h1>
                </div>
                <div className='hover:grayscale duration-700 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1549555989-eb134d5d0c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2xpbSUyMHdlZGRpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="" className='h-3/4 w-full' />
                    <h1 className='text-xl poppins my-4 text-blue-500'>By Loura Sweety - 25 Sep 2021</h1>
                    <h1 className='text-3xl josefins-sans hover:text-blue-500 cursor-pointer duration-300'>Top 10 wedding fresh flower decoration idea.</h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;