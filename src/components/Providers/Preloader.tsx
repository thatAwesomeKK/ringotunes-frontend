'use client'
import { storeToken } from '@/lib/redux/slices/accessTokenSlice';
import { store } from '@/lib/redux/store';
import { useRef } from 'react'

function PreLoader({ accessToken }: { accessToken: string }) {
    const loaded = useRef(false);
    if (!loaded.current) {
        store.dispatch(storeToken(accessToken))
        loaded.current = true
    }
    return null
}

export default PreLoader