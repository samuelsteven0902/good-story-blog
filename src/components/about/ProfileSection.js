import React from 'react'
import { Button } from 'flowbite-react'

import Image from '@material-tailwind/react/Image'; 
import LeadText from '@material-tailwind/react/LeadText';
import { MdPlace , MdSchool} from "react-icons/md";

import profile_1 from '../../assets/imgs/home2.jpg'
import { Link } from 'react-router-dom';

function ProfileSection() {
  return (
    
    <section className="relative py-16 bg-[#1E1E1E] ">
    <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-[#2e2e2e] w-full mb-6 shadow-xl rounded-2xl -mt-64">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                            <div className="w-40 -mt-20">
                                <Image
                                    src={profile_1}
                                    alt="Profile picture"
                                    raised
                                    rounded
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                        <Button color="dark">
                           <Link color='dark' to='/contact'> Contact </Link>
                        </Button>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                                    22
                                </span>
                                <span className="text-sm text-gray-400">
                                    Total Blog
                                </span>
                            </div>
                            <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                                    10
                                </span>
                                <span className="text-sm text-gray-400">
                                    Total User
                                </span>
                            </div>
                            <div className="lg:mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-100">
                                    89
                                </span>
                                <span className="text-sm text-gray-400">
                                    Comments
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center my-8">
                    <h3 className='text-4xl font-bold text-slate-500'>Good Story Blog</h3>
                    <div className="mt-10  text-gray-400 font-medium flex items-center justify-center gap-2">
                       <MdPlace />
                        Surakarta
                    </div>
                    <div className=" mb-2 text-gray-400 mt-2 flex items-center justify-center gap-2">
                        <MdSchool />
                       Universitas Sebelas Maret - Informatics Engineering
                    </div>
                </div>

                <div className="mb-10 py-2 border-t border-gray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                            <p className='font-sans text-lg font-thin text-slate-200'>
                            Good Story Blog is Blog that provides a place for everyone who wants to realize creativity and innovation, from Vocational Higher Education to all in the form of a blog. This blog is useful for us during this pandemic period which can realize creativity and innovation through this blog so that every student and other people can interact with each other, among others.
                            </p>
                            <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Button
                                    color="dark"
                                    buttonType="link"
                                    ripple="dark"
                                    className='bg-slate-800'
                                >
                                    Show more
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default ProfileSection