import { Item } from "../css/NewsList.styled";
import { useEffect } from "react";
import { useState } from "react";

const LocalNews = () => {
  const [isValid, setIsValid] = useState(false);
  const [localArt, setLocalArt] = useState([]);
  useEffect(() => {
    try {
      const oldinfo = JSON.parse(localStorage.getItem("bookmark"));
      if (oldinfo == null) {
        setIsValid(false);
        return;
      }
      setIsValid(true);
      setLocalArt(oldinfo);
    } catch (error) {
      setIsValid(false);
    }
  }, []);

  return (
    <>
      <h1 className="save">Saved Posts</h1>
      <hr></hr>
      {isValid ? (
        localArt.map((post) => {
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
