import MovieItem from "@/components/movie-item"
import style from "./page.module.css"
// import movies from "@/dummy.json"
import { MovieData } from "@/types"
import { Suspense } from "react"
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton"
import { delay } from "@/util/delay"

async function AllMovies() {
	await delay(1500)
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
		{ cache: "force-cache" }
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
	await delay(3000)
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
		{ cache: "force-cache" }
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
				<Suspense
					fallback={
						<MovieListSkeleton count={3} className={style.reco_conatiner} />
					}
				>
					<RecoMovies />
				</Suspense>
			</section>
			<section>
				<h3>등록된 모든 영화</h3>
				<Suspense
					fallback={
						<MovieListSkeleton count={10} className={style.all_container} />
					}
				>
					<AllMovies />
				</Suspense>
			</section>
		</div>
	)
}
