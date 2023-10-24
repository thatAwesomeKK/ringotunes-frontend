import React from 'react'
import { fetchUserDashboard } from '@/lib/apiCalls/profile';
import Widget from '@/components/Dashboard/Widget';
import { BsHeart, BsMusicNoteList } from "react-icons/bs";
import { HiFolderDownload } from "react-icons/hi";
import { Unbounded } from "next/font/google";
import Feed from '@/components/Dashboard/Feed';
import FramerMotionDiv from '@/components/Providers/FramerMotionDiv';
import { cookies } from 'next/headers';

const unbounded = Unbounded({
    subsets: ["latin"],
    weight: ["500"],
});

const Dashboard = async () => {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value as string
    const dash = await fetchUserDashboard(accessToken)

    return (
        <main className="flex flex-col justify-center items-center mt-24 space-y-24">
            <h1 className={`${unbounded.className} text-4xl`}>Welcome, {dash?.uid.username}!</h1>
            <section className="flex flex-col sm:flex-row space-y-2 items-center justify-between w-[80%]">
                <Widget
                    key={1}
                    name={"Liked Rings"}
                    analytic={dash?.likesCount}
                    Icon={BsHeart}
                    color={"bg-red-300"}
                    iconColor={"text-red-700"}
                />
                <Widget
                    key={2}
                    name={"Your Rings"}
                    analytic={dash?.rings?.length}
                    Icon={BsMusicNoteList}
                    color={"bg-yellow-300"}
                    iconColor={"text-yellow-700"}
                />
                <Widget
                    key={3}
                    name={"Downloaded Rings"}
                    analytic={dash?.downloadsCount}
                    Icon={HiFolderDownload}
                    color={"bg-blue-300"}
                    iconColor={"text-blue-700"}
                />
            </section>
            <section className='w-full'>
                <FramerMotionDiv>
                    <Feed rings={dash?.rings} del={true} />
                </FramerMotionDiv>
            </section>
        </main>
    );
}

export default Dashboard