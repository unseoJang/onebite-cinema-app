"use client"

import { KeyboardEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"

export default function Searchbar() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const q = searchParams.get("q")

	const [search, setSearch] = useState(q || "")

	useEffect(() => {
		setSearch(q || "")
	}, [q])

	const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const onSubmit = () => {
		if (!search) return
		router.push(`/search?q=${search}`)
	}

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") onSubmit()
	}

	return (
		<div>
			<input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
			<button onClick={onSubmit}>검색</button>
		</div>
	)
}
