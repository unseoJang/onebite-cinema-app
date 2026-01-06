"use client"

import { useRouter } from "next/navigation"
import { ReactNode, MouseEvent, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import style from "./modal.module.css"

export default function Modal({ children }: { children: ReactNode }) {
	const router = useRouter()
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal()
			dialogRef.current?.scrollTo({
				top: 0,
			})
		}
	}, [])

	return createPortal(
		<dialog
			ref={dialogRef}
			className={style.modal}
			onClick={(e: MouseEvent<HTMLDialogElement>) => {
				// 모달의 배경이 클릭이 된거면 -> 뒤로가기
				if ((e.target as HTMLElement).nodeName === "DIALOG") {
					router.back()
				}
			}}
		>
			{children}
		</dialog>,
		document.getElementById("modal-root") as HTMLElement
	)
}
