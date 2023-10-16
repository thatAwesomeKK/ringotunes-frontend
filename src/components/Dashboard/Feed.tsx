import { ringtoneBody } from '@/lib/typings/typings'
import React from 'react'
import MusicItem from '../ui/MusicItem'
import ReduxProvider from '../Providers/ReduxProvider'

interface PageProps {
    rings: ringtoneBody[]
    del: boolean
}

const Feed = ({ rings, del }: PageProps) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 bg-gray-200 py-4 rounded-xl flex-1 mx-4">
            {rings?.map((ring: ringtoneBody) => {
                if (del === true) {
                    return <ReduxProvider key={ring._id}>
                        <MusicItem
                            ring={ring}
                            del={del}
                        />
                    </ReduxProvider>
                } else {
                    return <MusicItem
                        ring={ring}
                        del={del}
                        key={ring._id}
                    />
                }
            })}
        </div>)
}

export default Feed