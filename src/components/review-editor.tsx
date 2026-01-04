import { createReviewAction } from "@/actions/create-review.action"
import style from "./review-editor.module.css"

export function ReviewEditor({ movieId }: { movieId: string }) {
	return (
		<section>
			<form className={style.form_container} action={createReviewAction}>
				<input type="hidden" name="movieId" value={movieId} readOnly />
				<textarea
					name="reviewText"
					placeholder="영화에 대한 리뷰를 작성해주세요."
					required
				/>
				<div className={style.submit_container}>
					<input required name="author" placeholder="작성자" />
					<button type="submit">작성하기</button>
				</div>
			</form>
		</section>
	)
}
