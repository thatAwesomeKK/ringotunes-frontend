import React from 'react'
import DesktopUserButton from './DesktopUserButton'
import ReduxProvider from '@/components/Providers/ReduxProvider';
import MobileUserButtons from './MobileUserButtons';

const UserButton = () => {
    return (
        <ReduxProvider>
            <DesktopUserButton />
            <MobileUserButtons />
        </ReduxProvider>
    )
}

export default UserButton