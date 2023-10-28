'use client'
import React, { useEffect, useState } from 'react'
import { checkLike, downloadRing, handleLike as liking } from '@/lib/apiCalls/profile';
import { saveAs } from "file-saver";
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { ringtoneBody } from '@/lib/typings/typings';

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

interface PageProps {
    ring: ringtoneBody
    accessToken: string
}

const ActivityButton = ({ ring, accessToken }: PageProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(ring.likes.length)

    const checkingLike = async () => {
        const response = await checkLike(accessToken, ring._id)
        setIsLiked(response)
    }

    useEffect(() => {
        checkingLike()
    }, [])

    // useEffect(() => {
    //     setLikes(ring.likes.length)
    // }, [likes])


    const { mutate: handleLike, isLoading } = useMutation({
        mutationFn: async () => {
            await liking(ring._id)
        },
        onMutate: () => {
            const previousLikeState = isLiked
            const previousLikes = likes

            setIsLiked(!isLiked)

            if (previousLikeState === true)
                setLikes(previousLikes - 1)
            else
                setLikes(previousLikes + 1)
            return { previousLikeState, previousLikes }
        },
        onError: (_, __, context: any) => {
            setIsLiked(context?.previousLikeState)
            setLikes(context?.previousLikes)
        },
        onSettled: async () => {
            await checkingLike()
        }
    })

    //Handle Download
    const handleDownload = async () => {
        const payload = await downloadRing(ring._id);
        if (payload === true) {
            saveAs(`${hostname}/ring/download/${ring._id}`, `${ring.title}: Ringotunes`);
        }
    };

    return (
        <div className='flex flex-col mb-4  '>
            <p className="text-xl font-semibold text-center">
                DOWNLOADS {ring?.downloads?.length} | LIKES {likes}
            </p>
            <div className='flex gap-2'>
                <button
                    onClick={() => handleDownload()}
                    className="bg-green-400 w-36 py-3 rounded-xl"
                >
                    Download
                </button>
                {!isLiked ? (
                    <button
                        onClick={() => handleLike()}
                        className="bg-blue-500 w-36 py-3 rounded-xl"
                    >
                        Like
                    </button>
                ) : (
                    <button
                        onClick={() => handleLike()}
                        className="bg-red-500 w-36 py-3 rounded-xl"
                    >
                        UnLike
                    </button>
                )}
            </div>
        </div>
    )
}

export default ActivityButton