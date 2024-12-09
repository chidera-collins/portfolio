import React from 'react'
import profile from './ProfilePictures/profile.jpg'
import { VscGithubInverted } from "react-icons/vsc";
import {motion} from "motion/react"


function Portfoliocomponent() {
  return (
    <div className='min-h-[440px] md:min-h-[320px] bg-mainBg '>
        <div className='min-h-[200px]  grid grid-cols-1 md:grid-cols-2 mb-2'>   
            <motion.div 
            initial={{ x: -30 , opacity:0}}
            animate={{ x: 0, opacity:1 }}
            transition={{delay:1, duration:3}}
            className='grid  justify-center p-[10px]'>
                <div className='h-[300px] w-[300px] rounded-[50%]  ' style={{transition:'1s ease-out',backgroundImage:`url(${profile})`,backgroundSize:"cover",boxShadow:'0 0 20px yellow'}}>

                </div>        
            </motion.div>
            <motion.div 
                initial={{ x: 30 , opacity:0}}
                animate={{ x: 0, opacity:1 }}
                transition={{delay:1.5, duration:4}}
            className='flex  flex-col md:justify-center'>
               <div className='p-[10px] text-white  '>
                    <p  className='text-[1.3rem]  font-semibold capitalize'>
                        i'm
                    </p>
                    <h1 className='text-[1.4rem] font-bold capitalize text-white'>chidera collins</h1>
               </div>
               <div className='flex items-center  gap-2'>
                <button className=' btn btn-accent bg-white text-mainBg w-[120px] hover:text-black hover:shadow-lg hover:shadow-[yellow]  font-custom text-[1.2rem] font-semibold'>
                    <a href="mailto:chideracollins24@gmail.com"> Hire me</a>
                </button>
                <button className='btn btn-accent bg-white text-mainBg w-[100px] hover:text-black hover:shadow-lg hover:shadow-[yellow] font-custom text-[1.2rem] '>
                    <a href="https://github.com/chidera-collins"><VscGithubInverted /></a>
                </button>
                <button   className='btn  btn-accent bg-white  text-mainBg w font-custom text-[1.2rem] hover:shadow-lg hover:shadow-[yellow] hover:text-black font-semibold'>
                    <a href="https://docs.google.com/file/d/1K9JCbKC2cZEgrnVFlZHIhLWFX4SGmUzw/edit?usp=docslist_api&filetype=msword">My Resume</a>
                </button>
               </div>
            </motion.div>

        </div>

    </div>
  )
}

export default Portfoliocomponent