import { store } from "@/lib/redux/store"
import PreLoader from "./Preloader"
import { cookies } from "next/headers"
import { refreshAccessToken } from "@/lib/apiCalls/auth"
import { storeToken } from "@/lib/redux/slices/accessTokenSlice"

async function AuthProvider({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')?.value
    const accessToken = await refreshAccessToken(refreshToken!)

    store.dispatch(storeToken(accessToken))

    return (
        <>
            <PreLoader accessToken={accessToken!} />
            {children}
        </>
    )
}
export default AuthProvider