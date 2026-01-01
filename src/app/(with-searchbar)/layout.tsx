import Searchbar from "@/components/searchbar"
import { Suspense, type ReactNode } from "react"

export default function WithSearchbarLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Searchbar />
			</Suspense>
			{children}
		</div>
	)
}
