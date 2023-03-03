import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  // catch data
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1 className=" text-light">{postInfo.title}</h1>
      <time className="text-light">
        {formatISO9075(new Date(postInfo.createdAt))}
      </time>
      {/* <div className="text-light">by {postInfo.author.username}</div> */}
      <div className="image">
        <img src={`http://localhost:/4000/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="text-light"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
