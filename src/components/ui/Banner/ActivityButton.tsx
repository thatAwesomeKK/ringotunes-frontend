'use client'
import React, { useState } from 'react'
import { downloadRing, handleLike as liking } from '@/lib/apiCalls/profile';
import { saveAs } from "file-saver";
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

interface PageProps {
    docId: string
    ringId: string
    title: string
    like: boolean
}

const ActivityButton = ({ docId, ringId, title, like }: PageProps) => {
    const router = useRouter()

    const [isLiked, setIsLiked] = useState(like)

    const { mutate: handleLike, isLoading } = useMutation({
        mutationFn: async () => {
            await liking(docId)
        },
        onMutate: () => {
            const previousLikeState = isLiked
            setIsLiked(!isLiked)
            return { previousLikeState }
        },
        onError: (_, __, context: any) => {
            setIsLiked(context?.previousLikeState)
        },
        onSettled: () => {
            router.refresh()
        }
    })

    //Handle Download
    const handleDownload = async () => {
        const payload = await downloadRing(docId);
        if (payload === true) {
            saveAs(`${hostname}/ring/download/${ringId}`, `${title}: Ringotunes`);
        }
    };

    return (
        <>
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
        </>
    )
}

export default ActivityButton