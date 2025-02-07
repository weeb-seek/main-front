type RecommendationItemProps = {
    title: string,
    description: string,
    imageSrc: string,
    score: number
}

function RecommendationItem({ title, description, imageSrc, score }: RecommendationItemProps) {
    return (
        <>
            <div className="recommendation-item">
                <div className="gradient"/>
                <img src={imageSrc} alt={title}/>
                <div className="info">
                    <span className="info-title">{title}</span>
                    <span className="info-score"><span className="info-score">{score}</span></span>
                </div>
            </div>
        </>
    )
}

export default RecommendationItem
