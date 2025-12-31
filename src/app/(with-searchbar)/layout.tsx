import Searchbar from "../searchbar"

export default function WithSearchbarLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<Searchbar />
			{children}
		</div>
	)
}
