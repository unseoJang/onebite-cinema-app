"use server"

import { revalidatePath } from "next/cache"

export async function createReviewAction(_: unknown, formData: FormData) {
	const movieId = formData.get("movieId")?.toString() as string
	const content = formData.get("reviewText")?.toString() as string
	const author = formData.get("author")?.toString() as string

	if (!movieId || !content || !author) {
		return {
			status: false,
			error: "리뷰 내용과 작성자를 입력해주세요",
		}
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					movieId,
					content,
					author,
				}),
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to create review: ${response.status}`)
		}

		console.log(response.status)
		revalidatePath(`/movie/${movieId}`)
		return {
			status: true,
			error: "",
		}
	} catch (err) {
		return {
			status: false,
			error: `리뷰 저장에 실패했습니다 : ${err}`,
		}
	}
}
