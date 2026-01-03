import MovieItemSkeleton from "./movie-item-skeleton"

export default function MovieListSkeleton({
	count,
	className,
}: {
	count: number
	className?: string
}) {
	return (
		<div className={className}>
			{new Array(count).fill(0).map((_, idx) => (
				<MovieItemSkeleton key={`movie-item-skeleton-${idx}`} />
			))}
		</div>
	)
}
