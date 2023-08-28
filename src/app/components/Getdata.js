import { getDataFromDatabase } from '@/services/userService';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Getdata = () => {

    const [data, getData] = useState([]);


    // async function getDataOnClick(event) {
    //     event.preventDefault();

    //     const data1 = await getDataFromDatabase();
    //     console.log(data1);
    //     setData(data1);
    // }

    async function getDataOnRender() {
        const data1 = await getDataFromDatabase();
        console.log(data1);
        getData(data1);
    }

    useEffect(() => {
        getDataOnRender();
    }, [])



    return (
        <div>
            {data.map((element) => {
                return (
                    <div className='text-white' key={element._id}>
                        <h1>Name:{element.name}</h1>
                        <h1>Email:{element.email}</h1>
                        <h1>Message:{element.message}</h1>
                        {element.myFile && (<Image src={`${element.myFile}`} alt="decoder" width={200} height={200} />)}
                        {/* {element.myFile && (<p>{element.myFile}</p>)} */}
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Getdata