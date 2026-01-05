"use client"

import { createReviewAction } from "@/actions/create-review.action"
import style from "./review-editor.module.css"
import { useActionState, useEffect } from "react"

export function ReviewEditor({ movieId }: { movieId: string }) {
	const [state, formAction, isPending] = useActionState(
		createReviewAction,
		null
	)

	useEffect(() => {
		if (state && !state.status) {
			alert(state.error)
		}
	}, [state])
	return (
		<section>
			<form className={style.form_container} action={formAction}>
				<input type="hidden" name="movieId" value={movieId} readOnly />
				<textarea
					disabled={isPending}
					name="reviewText"
					placeholder="영화에 대한 리뷰를 작성해주세요."
					required
				/>
				<div className={style.submit_container}>
					<input
						disabled={isPending}
						required
						name="author"
						placeholder="작성자"
					/>
					<button disabled={isPending} type="submit">
						{isPending ? "..." : "작성하기"}
					</button>
				</div>
			</form>
		</section>
	)
}
