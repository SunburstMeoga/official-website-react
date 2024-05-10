import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-svh flex flex-col justify-center items-center'>
            {/* <div className='w-1/4 lg:w-1/12 lg:hidden'>
                <img src='/images/logo.png'></img>
            </div> */}
            {/* <div className='w-full lg:w-1/4 -mt-4-0 lg:mt-0-1'>
                <img src='/images/loading.gif'></img>
            </div> */}
            <div className='text-primary-green font-bold text-2-0 animate-bounce '>
                Loading...
            </div>
        </div>
    )
}

export default Loading
