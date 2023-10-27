'use client'
import Link from 'next/link'
import React from 'react'
import { IoMdCloudUpload } from 'react-icons/io'
import ProfilePic from './ProfilePic'
import { IoLogInSharp } from 'react-icons/io5'
import { useAppSelector } from '@/lib/redux/store'
import { useMediaQuery } from '@mantine/hooks'

const DesktopUserButton = () => {
    const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)')
    const user = useAppSelector(store => store.user.user)

    if (isDesktopOrLaptop)
        return (
            <div className='flex space-x-2'>
                {
                    user ? (
                        <div className="flex justify-center items-center space-x-2" >
                            <Link
                                href={"/upload"}
                                className="flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full cursor-pointer"
                            >
                                <IoMdCloudUpload className="h-6 w-6 text-blue-400" />
                                <p className="text-blue-500">Upload</p>
                            </Link>
                            <ProfilePic />
                        </div >
                    ) : (
                        <>
                            <Link
                                href={"/signin"}
                                className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
                            >
                                <IoLogInSharp className="h-6 w-6 text-blue-400" />
                                <p className="text-blue-500">SignIn</p>
                            </Link>

                            <Link
                                href={"/signup"}
                                className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
                            >
                                <IoLogInSharp className="h-6 w-6 text-blue-400" />
                                <p className="text-blue-500">SignUp</p>
                            </Link>
                        </>
                    )}
            </div>
        )
    return <></>
}

export default DesktopUserButton