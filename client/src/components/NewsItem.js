import { Item } from "../css/NewsList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/NewsSlice";

const NewsItem = () => {
  const dispatch = useDispatch();
  const { loading, error, articles } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
    console.log(typeof articles);
  }, []);
  return (
    <>
      {articles.data.hits.map((post, i) => {
        return (
          <Item>
            <div className="infoTop">
              <p>{post.url}</p>
              <h1>{post.title}</h1>
              <p>{post.author}</p>
            </div>

            <div className="infoBott">
              <p>{post.created_at}</p>
            </div>
          </Item>
        );
      })}
    </>
  );
};

export default NewsItem;
