import MoviePage from "@/app/movie/[id]/page"
import Modal from "@/components/modal"
import { JSX } from "react"

export default function Page(
	props: JSX.IntrinsicAttributes & { params: Promise<{ id: string }> }
) {
	return (
		<Modal>
			<MoviePage {...props} />
		</Modal>
	)
}
