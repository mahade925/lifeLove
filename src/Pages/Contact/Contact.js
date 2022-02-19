import React from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className='pb-40'>
                <div className='py-20 contact-bg'>
                    <h1 className='text-6xl josefins-sans font-bold text-white mb-8'>Contact</h1>
                    <h1 className='text-xl poppins text-white'>Home / Contact</h1>
                </div>
                <div className="grid grid-cols-3 gap-10 w-6/12 m-auto pt-20 location-card">
                    <div className='bg-white contact-card py-10'>
                        <i className="text-blue-600 text-5xl fa fa-map-marker" aria-hidden="true"></i>
                        <h1 className='text-3xl josefins-sans py-4'>Address</h1>
                        <h1 className='text-lg text-slate-500 poppins'>7 Green Lake Street <br /> Crawfordsville, IN 47933</h1>
                    </div>

                    <div className='bg-white contact-card py-10'>
                        <i class="text-blue-600 text-5xl fa fa-envelope" aria-hidden="true"></i>
                        <h1 className='text-3xl josefins-sans py-4'>Email Us</h1>
                        <h1 className='text-lg text-slate-500 poppins'>lifelove@gmail.com</h1>
                        <h1 className='text-lg text-slate-500 poppins'>mahade.dev@gmail.com</h1>
                    </div>

                    <div className='bg-white contact-card py-10'>
                        <i class="text-blue-600 text-5xl fa fa-phone" aria-hidden="true"></i>
                        <h1 className='text-3xl josefins-sans py-4'>Call Now</h1>
                        <h1 className='text-lg text-slate-500 poppins'>+01401023133</h1>
                        <h1 className='text-lg text-slate-500 poppins'>+01711023133</h1>
                    </div>
                </div>
                <h1 className='text-4xl font-bold pt-28 josefins-sans'>Have Any Question ?</h1>
                <h1 className='poppins pt-4 text-lg pb-14'>It is a long established fact that a reader will be distracted <br /> content of a page when looking.</h1>
                <div className='contact-container m-auto py-20'>
                    <div className='w-full'>
                        <input type="text" placeholder='Your Name*' className='w-1/2 border border-slate-500 py-2 px-4 m-4 focus:border-sky-500' />
                        <input type="text" placeholder='Address' className='w-1/2 border border-slate-500 py-2 px-4' />
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder='Your Email' className='w-1/2 border border-slate-500 py-2 px-4 m-4' />
                        <input type="text" placeholder='Your Phone' className='w-1/2 border border-slate-500 py-2 px-4 mb-4' />
                    </div>
                    <textarea name="" id="" className='w-1/2 border border-slate-500 p-2 h-36' placeholder='Messages'></textarea><br />
                    <button class="button mt-8"> Get in touch</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;