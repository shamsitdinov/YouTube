import React from "react";

const BigVideo = (props) => {
  return (
    <>
      {props.currentVideo ? (
        <div className="p-2 fixed pt-[22vh] w-[65vw] max-md:w-full max-md:static">
          <iframe
            width="900"
            height="200"
            className="h-[60vh] w-full"
            src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`}
            title={props.currentVideo.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <h2>Title: {props.currentVideo.snippet.title} </h2>
          <p>Description: {props.currentVideo.snippet.description}</p>
          <p>Created: {props.currentVideo.snippet.publishedAt.slice(0, 10)}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BigVideo;
