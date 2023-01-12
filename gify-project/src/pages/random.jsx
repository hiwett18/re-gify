import { useLoaderData, Link } from "react-router-dom";

export default function RandomPage() {
    const rangiphyData = useLoaderData();
    
    return (
      <div className="random-page">
        {rangiphyData ? (
          <ul>
            {rangiphyData.data.map((giphy) => (
              <li key={giphy.id}>
                <Link to={`/gif/${giphy.id}`}>{giphy.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
            <div>This is the Random page</div>
        )}
      </div>
    );
  }