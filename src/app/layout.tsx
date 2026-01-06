import "./globals.css"
import Link from "next/link"
import style from "./layout.module.css"
import { ReactNode } from "react"

export default function RootLayout({
	modal,
	children,
}: Readonly<{
	children: ReactNode
	modal: ReactNode
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<div className={style.container}>
					<header>
						<Link href={"/"}>ONEBITE CINEMA</Link>
					</header>
					<main>{children}</main>
				</div>
				{modal}
				<div id="modal-root"></div>
			</body>
		</html>
	)
}
