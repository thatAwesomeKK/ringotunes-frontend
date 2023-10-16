'use client'
import MusicItem from '@/components/ui/MusicItem'
import { fetchRings } from '@/lib/apiCalls/rings'
import { ringtoneBody } from '@/lib/typings/typings'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

interface PageProps {
    initialRings: ringtoneBody[]
}

const Results = ({ initialRings }: PageProps) => {
    const lastRingRef = useRef<HTMLElement>(null)

    const { ref, entry } = useIntersection({
        root: lastRingRef.current,
        threshold: 1,
    });

    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(['infinite-query'], async ({ pageParam = 1 }) => {
        const rings = await fetchRings(5, pageParam)
        return rings as ringtoneBody[]
    },
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1
            },
            initialData: { pages: [initialRings], pageParams: [1] }
        }
    )

    useEffect(() => {
        if (entry?.isIntersecting) {
            fetchNextPage()
        }
    }, [entry, fetchNextPage])

    const rings = data?.pages.flatMap(page => page) ?? initialRings

    return (
        <ul className='flex flex-col justify-center items-center space-y-3 py-6'>
            {rings?.map((ring, i) => {
                if (i === rings.length - 1)
                    return <li key={i} ref={ref} className='w-full'><Link
                        className="w-full flex justify-center items-center"
                        href={`/${ring._id}`}
                        key={ring._id}
                    >
                        <MusicItem
                            ring={ring}
                            del={false}
                        />
                    </Link></li>
                else
                    return <li key={i} className='w-full'><Link
                        className="w-full flex justify-center items-center"
                        href={`/${ring._id}`}
                        key={ring._id}
                    >
                        <MusicItem
                            ring={ring}
                            del={false}
                        />
                    </Link>
                    </li>
            })}
        </ul>
    )
}

export default Results