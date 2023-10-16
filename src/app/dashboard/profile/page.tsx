import ProfileForm from '@/components/Forms/ProfileForm'
import ReduxProvider from '@/components/Providers/ReduxProvider'
import React from 'react'

const Profile = () => {
    return (
        <ReduxProvider>
            <ProfileForm />
        </ReduxProvider>
    )
}

export default Profile