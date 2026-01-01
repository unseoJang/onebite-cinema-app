import Searchbar from "@/components/searchbar"
import type { ReactNode } from "react"

export default function WithSearchbarLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div>
			<Searchbar />
			{children}
		</div>
	)
}
