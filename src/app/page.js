'use client'

import { addNewUser } from '@/services/userService';
import { useState } from 'react'
import Image from 'next/image';
import Getdata from './components/Getdata';


export default function Home() {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
    myFile: '',
  })


  const handleClick = (event) => {
    event.preventDefault();

    try {

      const result = addNewUser(userData)
      console.log(result)
      setUserData({
        name: '',
        email: '',
        message: '',
        myFile: '',
      })

    } catch (error) {

      console.log(error);

    }

  }


  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const base64 = await toBase64(file);
    setUserData({
      ...userData,
      myFile: base64,
    })
    // const file = event.target.files[0];
    // const base64 = await toBase64(file);
    // console.log(base64);
  }


  // Convert a file to base64 string
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };



  return (
    <div>
      <div className='flex justify-center rounded-full mt-[50px]'>

        <form onSubmit={handleClick} className='border border-gray-800 bg-gray-800 rounded pt-[15px]'>


          <div className='flex justify-center'>
            <label htmlFor='file-upload'>
              <Image src={userData.myFile || '/profile.png'} alt='profile' width={140} height={140} className='border rounded-full mb-[20px] mt-[7px]'></Image>
            </label>
          </div>
          <input type='file' label='Image'
            onChange={handleFileUpload}
            name='myFile' accept='.jpeg, .png, .jpg' id='file-upload' className='hidden'
          /><br />


          <label htmlFor="name" className='text-white m-[10px]'>Name:</label><br />
          <input type="text" id="name" name="name"
            onChange={(event) => {
              setUserData({
                ...userData,
                name: event.target.value,
              })
            }} value={userData.name} required
            className='bg-gray-500 w-11/12 rounded-full pl-[8px] m-[10px] text-white font-bold focus:outline-none'
          /><br />


          <label htmlFor="email" className='text-white m-[10px]'>Email:</label><br />
          <input type="email" id="email" name="email"
            onChange={(event) => {
              setUserData({
                ...userData,
                email: event.target.value,
              })
            }} value={userData.email} required
            className='bg-gray-500 w-11/12 rounded-full pl-[8px] m-[10px] text-white font-bold focus:outline-none'
          /><br />


          <label htmlFor="message" className='text-white m-[10px]'>Message:</label><br />
          <textarea id="message" name="message" rows="4" cols="50"
            onChange={(event) => {
              setUserData({
                ...userData,
                message: event.target.value,
              })
            }} value={userData.message} required
            className='bg-gray-500 w-11/12 rounded pl-[8px] m-[10px] text-white font-bold focus:outline-none' >
          </textarea><br />


          <div className='flex justify-center'>
            <input type="submit" value="Submit"
              className='text-white border-green-600 px-[10px] py-[5px] bg-green-600 m-[20px] rounded'
            />
          </div>
        </form>

      </div>

      <Getdata />

      {/* <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.message}</h1> */}
    </div>

  )
}