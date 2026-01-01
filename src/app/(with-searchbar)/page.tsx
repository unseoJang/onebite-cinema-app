import MovieItem from "@/components/movie-item"
import style from "./page.module.css"
// import movies from "@/dummy.json"
import { MovieData } from "@/types"

async function AllMovies() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
		{ next: { revalidate: 60 * 60 * 24 } }
	)

	if (!response.ok) {
		return <div>오류가 발생했습니다...</div>
	}

	const movies: MovieData[] = await response.json()

	return (
		<div className={style.all_container}>
			{movies.map((movie) => (
				<MovieItem key={`all-${movie.id}`} {...movie} />
			))}
		</div>
	)
}

async function RecoMovies() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
		{ next: { revalidate: 60 * 180 } }
	)

	if (!response.ok) return <div>오류가 발생했습니다...</div>
	const movies: MovieData[] = await response.json()

	return (
		<div className={style.reco_conatiner}>
			{movies.map((movie) => (
				<MovieItem key={`reco-${movie.id}`} {...movie} />
			))}
		</div>
	)
}

export default function Home() {
	return (
		<div className={style.conatiner}>
			<section>
				<h3>지금 가장 추천하는 영화</h3>

				<RecoMovies />
			</section>
			<section>
				<h3>등록된 모든 영화</h3>

				<AllMovies />
			</section>
		</div>
	)
}
