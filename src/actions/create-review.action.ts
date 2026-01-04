"use server"

import { revalidatePath } from "next/cache"

export async function createReviewAction(formData: FormData) {
	const movieId = formData.get("movieId")?.toString() as string
	const content = formData.get("reviewText")?.toString() as string
	const author = formData.get("author")?.toString() as string

	if (!movieId || !content || !author) return

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
		// revalidatePath(`/movie/${movieId}`)
	} catch (err) {
		console.error(err)
		return
	}
}
