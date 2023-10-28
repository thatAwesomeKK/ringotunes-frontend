import Banner from '@/components/Home/Banner'
import { fetchRingWithId } from '@/lib/apiCalls/rings'
import React from 'react'

interface PageProps {
    params: {
        ringId: string
    }
}

const RingPlayer = async ({ params: { ringId } }: PageProps) => {
    const ring = await fetchRingWithId(ringId)
    return (
        <Banner ring={ring} />
    )
}

export const revalidate = 0
export default RingPlayer