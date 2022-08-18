import { Item } from "../css/NewsList.styled";
import { useEffect } from "react";
import { useState } from "react";
import { addPost, filterPost } from "../features/NewsSlice";
import { useDispatch, useSelector } from "react-redux";

const LocalNews = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const { savedPostsCopy } = useSelector((state) => state.posts);
  useEffect(() => {
    console.log(savedPostsCopy);
    try {
      const oldinfo = JSON.parse(localStorage.getItem("bookmark"));
      if (oldinfo == null) {
        setIsValid(false);
        return;
      }
      dispatch(addPost(oldinfo));
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
  }, []);

  const removePost = (idx) => {
    try {
      const oldinfo = JSON.parse(localStorage.getItem("bookmark"));

      oldinfo.splice(idx, 1);
      dispatch(filterPost(oldinfo));
      localStorage.setItem("bookmark", JSON.stringify(oldinfo));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="save">Saved Posts</h1>
      <hr></hr>
      {isValid ? (
        savedPostsCopy.payload.map((post, idx) => {
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
                <button className="del" onClick={() => removePost(idx)}>
                  Delete
                </button>
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
