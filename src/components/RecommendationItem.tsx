type RecommendationItemProps = {
    title: string,
    description: string,
    imageSrc: string,
    score: number
}

function RecommendationItem({ title, description, imageSrc, score }: RecommendationItemProps) {
    return (
        <>
            <div>
                <span>{title}</span>
                <img src={imageSrc} alt={title}/>
                <span>Score: {score}</span>
            </div>
            <div>
                {description}
            </div>
        </>
    )
}

export default RecommendationItem
