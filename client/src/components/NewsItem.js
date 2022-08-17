import { Item } from "../css/NewsList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/NewsSlice";

const NewsItem = () => {
  const dispatch = useDispatch();
  const { loading, error, articles } = useSelector((state) => state.posts);
  useEffect(() => {
    console.log(loading);
    dispatch(getPosts());
  }, []);
  return (
    <>
      {loading ? (
        <div>Not Here</div>
      ) : (
        articles.data.hits.map((post, i) => {
          return (
            <Item>
              <div className="infoTop">
                <p>
                  <a href={post.url} target="_blank">
                    {post.url}
                  </a>
                </p>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
              </div>

              <div className="infoBott">
                <p>{post.created_at}</p>
              </div>
            </Item>
          );
        })
      )}
    </>
  );
};

export default NewsItem;
