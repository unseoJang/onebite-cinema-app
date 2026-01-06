import Link from "next/link"
import { ReactNode } from "react"

export default function Layout({
	children,
	feed,
	sidebar,
}: {
	children: ReactNode
	feed: ReactNode
	sidebar: ReactNode
}) {
	return (
		<div>
			<div>
				<Link href={"/parallel"}>/parallel</Link>
				&nbsp;
				<Link href={"/parallel/setting"}>parallel/setting</Link>
			</div>
			{sidebar}
			{feed}
			{children}
		</div>
	)
}
