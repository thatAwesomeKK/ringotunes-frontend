import { store } from "@/lib/redux/store"
import PreLoader from "./Preloader"
import { cookies } from "next/headers"
import { getPfp } from "@/lib/apiCalls/profile"
import { storeUser } from "@/lib/redux/slices/userSlice"

async function AuthProvider({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    const user = await getPfp(accessToken!)

    store.dispatch(storeUser(user))

    return (
        <>
            <PreLoader user={user} />
            {children}
        </>
    )
}
export default AuthProvider