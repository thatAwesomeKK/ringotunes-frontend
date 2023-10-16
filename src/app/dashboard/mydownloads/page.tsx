import FramerMotionDiv from '@/components/Providers/FramerMotionDiv';
import React from 'react'
import Feed from '@/components/Dashboard/Feed';
import { fetchUserDownloadedRings } from '@/lib/apiCalls/profile';
import { store } from '@/lib/redux/store';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
});

const MyDownloads = async () => {
    const token = store.getState().accessToken.token
    const rings = await fetchUserDownloadedRings(token)
    return (

        <div className="flex flex-col justify-center space-y-10 mt-8">
            <div className="text-center">
                <h1 className={`${pacifico.className} font-bold text-5xl`}>
                    Your Downloaded Rings!
                </h1>
                <p className={`${pacifico.className} text-gray-400 text-xl`}>
                    How are you liking your Downloads?!
                </p>
            </div>
            <FramerMotionDiv>
                <Feed rings={rings} del={false} />
            </FramerMotionDiv>
        </div>
    );
}

export default MyDownloads