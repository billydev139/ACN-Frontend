"use client"
import React from 'react'
import MainButton from '../accets/MainButton'
import { useRouter } from 'next/navigation'

function Magzin() {
    const router= useRouter()
    return (
        <div className='flex flex-col w-full h-auto text-white custom-career-page-gradient bg-black custom-career-page-gradient'>
            {/* theam page */}
            <div className='w-full h-1/2 md:h-[75vh] relative'>
                <img src="/career/theam (1).jpeg" alt="loading" loading='lazy' className='md:block hidden w-full h-full object-cover' />
                <img src="career/theam (1).jpeg" alt="loading" loading='lazy' className='md:hidden block w-full h-full object-cover' />
                <div className='absolute top-[50%] left-[50%] font-bold md:text-5xl text-4xl translate-x-[-50%] translate-y-[-50%]'>CAREER</div>
            </div>

            <div className='w-full h-auto p-3 '>
                <div className=' relative w-full md:h-[75vh] h-auto px-3 py-5 flex justify-center items-center custom-gradient'>
                    <div className='flex flex-col items-center gap-2 md:mt-0 w-full '>
                        <div className='md:text-4xl text-2xl font-bold md:mt-0'>CAREER
                            OPPORTUNITIES</div>
                        <div className='md:text-lg text-[14px] font-medium text-center '>Working at Ferrari means being part of a unique, passionate, future-focused team in which our people are our greatest asset. Together, we compete on the track and in markets all over the world. If you are ready to make a difference, please look at the job offers or send us your spontaneous application at the Careers site.</div>
                        <div className='flex items-center gap-1 md:text-2xl text-lg font-[100] cursor-pointer' onClick={()=>router.push('/community/')}>SUBMIT YOUR APPLICATION <MainButton /></div>
                    </div>
                    <div className='text-[red] absolute md:top-[8%] top-[2%] left-[5%] gap-2 flex items-center md:text-xl text-sm'><p>1</p> <div className='w-[6rem] h-[0.3px] bg-[red] '></div><p>OPPORTUNITIES</p></div>
                </div>
            </div>



{/* panel 1 */}
            <div className='w-full h-screen p-3 md:block hidden'>
                <div className='custom-gradient w-full h-full flex relative'>
                    <div className='flex w-[40%] h-full items-center justify-center'>
                        <div className='flex flex-col w-[80%] gap-3'>
                            <div className='font-bold text-4xl'>FOCUS ON PEOPLE</div>
                            <div className='font-medium text-base'>We believe that an inclusive, enabling and inspiring work environment is key to unleashing everyone’s talent. Unparalleled individual and team performance goes hand-in-hand with a quality working life and an emphasis on professional development.</div>
                        </div>
                    </div>
                    <div className='text-[red] absolute top-[8%] left-[5%] gap-2 flex items-center'><p>2</p> <div className='w-[6rem] h-[0.3px] bg-[red] '></div><p>PEOPLES</p></div>
                    <div className='w-[60%] h-full flex justify-start mt-16 pr-16'>
                        <img src="/career/peopel.avif" alt="loading" loading='lazy' className='rounded-xl w-[95%] h-[85%] object-cover' />
                    </div>
                </div>
            </div>





{/* panel 1  for mobile*/}
<div className='w-full h-auto p-3 md:hidden block'>
                <div className='custom-gradient w-full h-auto flex flex-col relative'>
                    <div className='flex w-full h-auto items-center justify-center '>
                        <div className='flex flex-col w-full gap-3 mt-5 p-3 py-5 '>
                            <div className='font-bold text-2xl'>FOCUS ON PEOPLE</div>
                            <div className='font-medium text-sm'>We believe that an inclusive, enabling and inspiring work environment is key to unleashing everyone’s talent. Unparalleled individual and team performance goes hand-in-hand with a quality working life and an emphasis on professional development.</div>
                        </div>
                    </div>
                    <div className='text-[red] absolute top-[8%] left-[5%] gap-2 flex items-center'><p>2</p> <div className='w-[6rem] h-[0.3px] bg-[red] '></div><p>PEOPLES</p></div>
                    <div className='w-full flex justify-center'>
                        <img src="/career/peopel.avif" alt="loading" loading='lazy' className='rounded-xl object-cover' />
                    </div>
                </div>
            </div>


            

{/* panel 2 */}
            <div className='w-full h-screen p-3 hidden md:block'>
                <div className='custom-gradient w-full h-full flex relative'>
                    <div className='w-[60%] h-full flex justify-start pl-16 mt-2'>
                        <img src="/career/passion.avif" alt="loading" loading='lazy' className='rounded-xl w-[95%] h-[80%] object-cover mt-20' />
                    </div>
                    <div className='flex w-[35%] h-full items-center justify-center'>
                        <div className='flex flex-col w-[90%] gap-3'>
                            <div className='font-bold text-4xl'>PASSION
                                AT
                                THE
                                CENTER</div>
                            <div className='text-base font-medium'>
                                From manufacturing processes to motorsport, Ferrari always puts the passion of its people at the centre of everything we do. This begins with our employees and their families, and extends out to our clients, tifosi, and the whole community.
                            </div>
                        </div>
                    </div>
                    <div className='text-[red] absolute top-[8%] left-[5%] gap-2 flex items-center'>
                        <p>3</p>
                        <div className='w-[6rem] h-[0.3px] bg-[red] '></div>
                        <p>PASSION</p>
                    </div>
                </div>
            </div>

{/* panel 2 mobile*/}
            <div className='w-full h-auto p-3 md:hidden block'>
                <div className='custom-gradient w-full h-auto flex flex-col relative'>
                    <div className='flex w-full h-auto items-center justify-center '>
                        <div className='flex flex-col w-full gap-3 mt-5 p-3 py-5 '>
                            <div className='font-bold text-2xl'>PASSION
                                AT
                                THE
                                CENTER</div>
                            <div className='font-medium text-sm'>From manufacturing processes to motorsport, Ferrari always puts the passion of its people at the centre of everything we do. This begins with our employees and their families, and extends out to our clients, tifosi, and the whole community.</div>
                        </div>
                    </div>
                    <div className='text-[red] absolute top-[8%] left-[5%] gap-2 flex items-center'><p>3</p> <div className='w-[6rem] h-[0.3px] bg-[red] '></div><p>PASSION</p></div>
                    <div className='w-full flex justify-center'>
                        <img src="/career/passion.avif" alt="loading" loading='lazy' className='rounded-xl object-cover' />
                    </div>
                </div>
            </div>




{/* panel 3  */}
            <div className='w-full h-screen p-3 md:block hidden'>
                <div className='custom-gradient w-full h-full flex relative'>
                    <div className='flex w-[40%] h-full items-center justify-center'>
                        <div className='flex flex-col w-[80%] gap-3'>
                            <div className='font-bold text-5xl'>FOCUS ON PEOPLE</div>
                            <div className='text-base font-medium'>We believe that an inclusive, enabling and inspiring work environment is key to unleashing everyone’s talent. Unparalleled individual and team performance goes hand-in-hand with a quality working life and an emphasis on professional development.</div>
                        </div>
                    </div>
                    <div className='text-[red] absolute top-[8%] left-[5%] gap-2 flex items-center'><p>4</p> <div className='w-[6rem] h-[0.3px] bg-[red] '></div><p>TALENT</p></div>
                    <div className='w-[60%] h-full flex justify-start mt-16 pr-16'>
                        <img src="AcnAG/Karriere/Home/Arbeit3.jpeg" alt="loading" loading='lazy' className='rounded-xl w-[95%] h-[85%] object-cover' />
                    </div>
                </div>
            </div>


{/* panel 3   mobile*/}

            <div className='w-full h-auto p-3 md:hidden block'>
                <div className='custom-gradient w-full h-auto flex flex-col relative'>
                    <div className='flex w-full h-auto items-center justify-center '>
                        <div className='flex flex-col w-full gap-3 mt-5 p-3 py-5 '>
                            <div className='font-bold text-2xl'>FOCUS ON PEOPLE</div>
                            <div className='font-medium text-sm'>We believe that an inclusive, enabling and inspiring work environment is key to unleashing everyone’s talent. Unparalleled individual and team performance goes hand-in-hand with a quality working life and an emphasis on professional development.</div>
                        </div>
                    </div>
                    <div className='text-[red] absolute top-[8%] left-[5%] gap-2 flex items-center'><p>4</p> <div className='w-[6rem] h-[0.3px] bg-[red] '></div><p>TALENT</p></div>
                    <div className='w-full flex justify-center'>
                        <img src="AcnAG/Karriere/Home/Arbeit3.jpeg" alt="loading" loading='lazy' className='rounded-xl object-cover' />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Magzin



