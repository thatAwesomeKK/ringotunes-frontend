import { store } from "@/lib/redux/store"
import PreLoader from "./Preloader"
import { cookies } from "next/headers"
import { getUser } from "@/lib/apiCalls/profile"
import { storeUser } from "@/lib/redux/slices/userSlice"
import { User } from "@/lib/typings/typings"

async function AuthProvider({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    const user: User = await getUser(accessToken!)

    store.dispatch(storeUser(user))

    return (
        <>
            <PreLoader user={user} />
            {children}
        </>
    )
}
export default AuthProvider