
import ContentLoader from "react-content-loader"

const CardLoader = () => (

    <div className="card-loader-container">
        <ContentLoader
            speed={2}
            width={320}
            height={460}
            viewBox="0 0 320 460"
            backgroundColor="#ecebeb"
            foregroundColor="#d6d2d2"

        >
            <rect x="57" y="250" rx="2" ry="2" width="140" height="10" />
            <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
            <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
        </ContentLoader>
    </div>
);

export default CardLoader

