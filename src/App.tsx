import SearchBar from "./components/SearchBar.tsx";
import RecommendationItem from "./components/RecommendationItem.tsx";
import {tempRecommendations} from "./consts.ts";

function App() {
  return (
    <>
        <SearchBar />
        <div className="recommendation-container">
            {
                tempRecommendations.map((item, idx) => {
                    return <RecommendationItem key={"ri" + idx} title={item.title} imageSrc={item.imageSrc} score={item.score}/>
                })
            }
        </div>
    </>
  )
}

export default App
