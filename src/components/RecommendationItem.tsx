type RecommendationItemProps = {
    title: string,
    imageSrc: string,
    score: number
}

function RecommendationItem({ title, imageSrc, score }: RecommendationItemProps) {
    return (
        <>
            <div className="recommendation-item">
                <div className="gradient"/>
                <img src={imageSrc} alt={title}/>
                <div className="info">
                    <span className="info-title">{title}</span>
                    <span className="info-score">{score}</span>
                </div>
            </div>
        </>
    )
}

export default RecommendationItem
