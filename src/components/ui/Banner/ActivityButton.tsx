'use client'
import React from 'react'
import { downloadRing, handleLike as liking } from '@/lib/apiCalls/profile';
import { saveAs } from "file-saver";
import { useRouter } from 'next/navigation';

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

interface PageProps {
    docId: string
    ringId: string
    title: string
    like: boolean
}

const ActivityButton = ({docId, ringId, title, like }: PageProps) => {
    const router = useRouter()
    //Handle Download
    const handleDownload = async () => {
        const payload = await downloadRing(docId);
        if (payload === true) {
            saveAs(`${hostname}/ring/download/${ringId}`, `${title}: Ringotunes`);
        }
    };

    //Handle Like
    const handleLike = async () => {
        await liking(docId)
        router.refresh()
    };

    return (
        <>
            <button
                onClick={() => handleDownload()}
                className="bg-green-400 w-36 py-3 rounded-xl"
            >
                Download
            </button>
            {!like ? (
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