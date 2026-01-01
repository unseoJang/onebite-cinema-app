import { notFound } from "next/navigation"
import style from "./page.module.css"
// import movies from "@/dummy.json"

export function generateStaticParams() {
	return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`,
		{ cache: "force-cache" }
	)
	if (!response.ok) {
		if (response.status === 404) {
			return notFound()
		}
		return <div>오류가 발생했습니다...</div>
	}

	const movies = await response.json()
	const {
		// id,
		title,
		subTitle,
		company,
		runtime,
		description,
		posterImgUrl,
		releaseDate,
		genres,
	} = movies

	return (
		<div className={style.container}>
			<div
				className={style.cover_img_container}
				style={{ backgroundImage: `url('${posterImgUrl}')` }}
			>
				<img src={posterImgUrl} />
			</div>
			<div className={style.info_container}>
				<div>
					<h2>{title}</h2>
					<div>
						{releaseDate} / {genres.join(", ")} / {runtime}분
					</div>
					<div>{company}</div>
				</div>
				<div>
					<div className={style.subTitle}>{subTitle}</div>
					<div className={style.description}>{description}</div>
				</div>
			</div>
		</div>
	)
}
