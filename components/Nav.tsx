import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { RiQuillPenFill } from "react-icons/ri"
import { HiOutlineLogout } from "react-icons/hi"
import Link from "next/link"

export const Nav = () => {
  const { data: session } = useSession()
  return (
    <div className='flex border-b-[1px] py-3 px-10 items-center justify-between sticky top-0 z-10 bg-white'>
        <div>
            <Link href="/">
                <h1 className='text-3xl font-black'>
                    mark<span className='font-light'>Dium</span>.
                </h1>
            </Link>
        </div>
        <div>
            {
                session ? <div className="flex items-center space-x-5">
                    <div className='flex space-x-2 items-center'>
                        <Image 
                        src={session.user!.image!}
                        alt={`${session.user?.name} profile image`}
                        className="rounded-full"
                        width={40}
                        height={40}
                        />
                        <div className='flex flex-col'>
                            <p className="font-semibold">
                                {session.user?.name}
                            </p>
                            <p className='text-xs text-slate-500'>
                                {session.user?.email}
                            </p>
                        </div>
                    </div>
                    <div className="w-[2px] bg-slate-400 h-8"></div>
                    <div className="flex space-x-5 items-center">
                        <Link href="/create">
                            <button className="flex items-center space-x-1 px-5 py-1 font-medium bg-blue-100 text-blue-700">
                                <div>
                                    <RiQuillPenFill />
                                </div>
                                <div>
                                    Create
                                </div>
                            </button>                    
                        </Link>
                        <button
                        type="button"
                        onClick={() => signOut()}
                        className="p-2 cursor-pointer hover:bg-slate-100 rounded-md">
                            <HiOutlineLogout />
                        </button>
                    </div>
                </div> : 
                <button 
                type="button"
                onClick={() => signIn("google")}
                className="border-2 border-black py-2 px-8 font-medium ">
                    Sign in
                </button>
            }
        </div>
    </div>
  )
}
