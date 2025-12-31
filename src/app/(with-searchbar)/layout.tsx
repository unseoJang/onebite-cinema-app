export default function WithSearchbarLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<div>Searchbar Layout</div>
			{children}
		</div>
	)
}
