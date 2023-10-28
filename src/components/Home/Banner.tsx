import React from 'react'
import FramerMotionDiv from '../Providers/FramerMotionDiv';
import Link from 'next/link';
import Time from '../ui/Time';
import Image from 'next/image';
import Activity from '../ui/Banner/Activity';
import Player from '../ui/Player';
import { ringtoneBody } from '@/lib/typings/typings';

interface PageProps {
    ring: ringtoneBody;
}

const Banner = ({ ring }: PageProps) => {
    return (
        <FramerMotionDiv>
            <div className="bg-gray-200 shadow-lg px-7 py-5">
                <h2 className="text-4xl font-extrabold">{ring?.title}</h2>
                <div className="text-gray-400 flex space-x-2">
                    <Link href={`/profile/${ring?.uid?._id}`}>
                        <p className="active:text-blue-300 whitespace-nowrap">
                            Uploaded By: {ring?.uid?.username}
                        </p>
                    </Link>
                    <div className='hidden md:flex'>
                        <Time createdAt={ring?.createdAt} />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-3 mt-5">
                    <div className="relative h-48 w-48">
                        <Image
                            className="object-cover rounded-lg"
                            src={ring?.thumbnail || ""}
                            alt="photu"
                            fill
                            priority
                        />
                    </div>
                    <div>
                        <div className="mb-6">
                            <p className="text-xl font-semibold text-center">
                                DOWNLOADS {ring?.downloads?.length} | LIKES {ring?.likes?.length}
                            </p>
                            <Activity
                                docId={ring?._id}
                                likes={ring?.likes}
                                ringId={ring?.ringID}
                                title={ring?.title}
                            />
                            <Player ringID={ring?.ringID} />
                        </div>
                    </div>
                </div>
            </div>
        </FramerMotionDiv>
    )
}

export default Banner