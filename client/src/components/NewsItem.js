import { Item } from "../css/NewsList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts, setCount } from "../features/NewsSlice";

const NewsItem = () => {
  const dispatch = useDispatch();
  const { loading, error, articles } = useSelector((state) => state.posts);

  const savePost = (post) => {
    console.log(post);
    try {
      const oldinfo = JSON.parse(localStorage.getItem("bookmark")) || [];
      const newinfo = [...oldinfo, post];
      localStorage.setItem("bookmark", JSON.stringify(newinfo));
      dispatch(setCount(newinfo.length));
    } catch (error) {
      localStorage.setItem("bookmark", JSON.stringify([]));
    }
  };

  const getSavedLengh = () => {
    if (localStorage.getItem("bookmark") != null) {
      const len = JSON.parse(localStorage.getItem("bookmark")).length;
      return len;
    }
  };

  useEffect(() => {
    console.log(loading, error);
    dispatch(getPosts());
    dispatch(setCount(getSavedLengh()));
  }, []);
  return (
    <>
      {loading ? (
        <div>Not Here {error}</div>
      ) : (
        articles.data?.hits?.map((post, i) => {
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
                <button onClick={() => savePost(post)}>Save</button>
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
