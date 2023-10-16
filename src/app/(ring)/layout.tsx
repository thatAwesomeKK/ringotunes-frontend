import RingFeed from "@/components/Home/RingFeed"

interface PageProps {
    children: React.ReactNode
}
export default function RingLayout({
    children,
}: PageProps) {
    return <main>
        {children}
        <RingFeed />
    </main>
}