import { ringtoneBody } from '@/lib/typings/typings'
import React from 'react'
import MusicItem from '../ui/MusicItem'
import { store } from '@/lib/redux/store'

interface PageProps {
    rings: ringtoneBody[]
    del: boolean
}

const Feed = ({ rings, del }: PageProps) => {
    const token = store.getState().accessToken.token
    return (
        <div className="flex flex-col justify-center items-center space-y-3 bg-gray-200 py-4 rounded-xl flex-1 mx-4">
            {rings?.map((ring: ringtoneBody) => {
                if (del === true) {
                    return <MusicItem
                        key={ring._id}
                        ring={ring}
                        del={del}
                        token={token}
                    />
                } else {
                    return <MusicItem
                        key={ring._id}
                        ring={ring}
                        del={del}
                        token={token}
                    />
                }
            })}
        </div>)
}

export default Feed