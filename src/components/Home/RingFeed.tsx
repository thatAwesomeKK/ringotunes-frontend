import React from 'react'
import Results from './RingFeed/Results'
import { ringtoneBody } from '@/lib/typings/typings'
import { fetchRings } from '@/lib/apiCalls/rings'
import ProvidesQueryClient from '../Providers/ProvidesQueryClient'
import FramerMotionDiv from '../Providers/FramerMotionDiv'

const RingFeed = async () => {
    const rings: ringtoneBody[] = await fetchRings(5, 1)
    return (
        <FramerMotionDiv>
            <section className='bg-gray-200 overflow-hidden overflow-y-scroll mx-4 h-[50vh] mt-10 shadow-lg rounded-lg scrollbar-hide'>
                <ProvidesQueryClient>
                    <Results initialRings={rings} />
                </ProvidesQueryClient>
            </section>
        </FramerMotionDiv>
    )
}

export default RingFeed