import { Item } from "../css/NewsList.styled";
import { useEffect } from "react";
import { useState } from "react";
import { addPost } from "../features/NewsSlice";
import { useDispatch, useSelector } from "react-redux";

const LocalNews = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const { savedPosts } = useSelector((state) => state.posts);
  useEffect(() => {
    try {
      const oldinfo = JSON.parse(localStorage.getItem("bookmark"));
      if (oldinfo == null) {
        setIsValid(false);
        return;
      }
      console.log("BEFORE");
      dispatch(addPost(oldinfo));
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
  }, []);

  return (
    <>
      <h1 className="save">Saved Posts</h1>
      <hr></hr>
      {isValid ? (
        savedPosts.payload.map((post) => {
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
                <button>DELETE</button>
                <p>{post.created_at}</p>
              </div>
            </Item>
          );
        })
      ) : (
        <h1>No saved Posts</h1>
      )}
    </>
  );
};

export default LocalNews;
