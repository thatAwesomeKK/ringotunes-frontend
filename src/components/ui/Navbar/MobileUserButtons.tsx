'use client'
import React from 'react'
import ProfilePic from './ProfilePic'
import DropDown from '../DropDown'
import ReduxProvider from '@/components/Providers/ReduxProvider'
import { useMediaQuery } from '@mantine/hooks'
import { useAppDispatch, useAppSelector } from '@/lib/redux/store'
import { toggleState } from '@/lib/redux/slices/dropdownSlice'

const MobileUserButtons = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')
    const isOpen = useAppSelector(store=>store.dropdown.isOpen)
    const dispatch = useAppDispatch()

    if (isTabletOrMobile)
        return (
            <div className=''>
                <div onClick={() => dispatch(toggleState(!isOpen))}>
                    <ProfilePic />
                </div>
                <ReduxProvider>
                    <DropDown />
                </ReduxProvider>
            </div>
        )
}

export default MobileUserButtons