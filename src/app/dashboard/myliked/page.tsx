import FramerMotionDiv from '@/components/Providers/FramerMotionDiv';
import React from 'react'
import { Pacifico } from "next/font/google";
import Feed from '@/components/Dashboard/Feed';
import { fetchUserLikedRings } from '@/lib/apiCalls/profile';
import { store } from '@/lib/redux/store';

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
});

const MyLiked = async () => {
    const token = store.getState().accessToken.token
    const rings = await fetchUserLikedRings(token)

    return (
        <div className="flex flex-col justify-center space-y-10 mt-8">
            <div className="text-center">
                <h1 className={`${pacifico.className} font-bold text-5xl`}>
                    Your Liked Rings!
                </h1>
                <p className={`${pacifico.className} text-gray-400 text-xl`}>
                    You have a great taste!
                </p>
            </div>
            <FramerMotionDiv>
                <Feed rings={rings} del={false} />
            </FramerMotionDiv>
        </div>
    );
}

export default MyLiked