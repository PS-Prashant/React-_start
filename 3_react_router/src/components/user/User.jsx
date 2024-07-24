import React from 'react';
import { useParams } from 'react-router-dom';


export default function User () {
    const { userId } = useParams();

    return(
        <>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl my-2'>User: {userId}</h2>
            </div>
        </>
    )
}