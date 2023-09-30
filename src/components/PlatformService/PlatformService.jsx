/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineFlag} from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { SlSupport } from "react-icons/sl";

const PlatformService = () => {
    return (
        <div className='mt-20'>
            <div className='lg:flex '>
                <div className='w-[300px] text-center container mx-auto '>
                    <p className=' hover:animate-bounce ml-28 item-center'><AiOutlineFlag className='text-6xl text-green-400'></AiOutlineFlag></p>
                    <p className='text-2xl font-semibold'>Expert Teachers</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt.</p>
                </div>
                <div className='w-[300px] text-center container mx-auto '>
                    <p className=' ml-28 item-center hover:animate-bounce'><FaConnectdevelop className='text-6xl text-green-400'></FaConnectdevelop></p>
                    <p className='text-2xl font-semibold'>Self Development</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt.</p>
                </div>
                <div className='w-[300px] text-center container mx-auto '>
                    <p className=' ml-28 item-center hover:animate-bounce'><FiVideo className='text-6xl text-green-400'></FiVideo></p>
                    <p className='text-2xl font-semibold'>Remote Learning</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt.</p>
                </div>
                <div className='w-[300px] text-center container mx-auto '>
                    <p className=' ml-28 item-center hover:animate-bounce'><SlSupport className='text-6xl text-green-400'></SlSupport></p>
                    <p className='text-2xl font-semibold'>Life Time Support</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt.</p>
                </div>
              
                
            </div>
        </div>
    );
};

export default PlatformService;