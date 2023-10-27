'use client'
import { storeUser } from '@/lib/redux/slices/userSlice';
import { store } from '@/lib/redux/store';
import { useRef } from 'react'

function PreLoader({ user }: { user: string }) {
    const loaded = useRef(false);
    if (!loaded.current) {
        store.dispatch(storeUser(user))
        loaded.current = true
    }
    return null
}

export default PreLoader