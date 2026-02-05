import React from "react";

const Cards = ({ youtubeData, selectVideo, videoId }) => {
  return (
    <div className="flex flex-col gap-4 pt-20 w-[30vw] top-[10vh] px-4 absolute right-0 max-md:static max-md:grid max-md:grid-cols-1 max-md:w-full pb-10">
      {youtubeData
        ? youtubeData.map((item, index) => (
            <div onClick={() => selectVideo(index)} key={index} className=" relative rounded-md text-center p-4 text-white cursor-pointer">
              <iframe width="900" height="200" className="w-full" src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.snippet.title} />
              <div className="shadow w-[380px] h-[200px] absolute top-4 bg-[#00000018]"></div>
              <h2>Title: {item.snippet.title.slice(0, 20)} ...</h2>
              <p>Description: {item.snippet.description.slice(0, 25)} ...</p>
              <p>Created: {item.snippet.publishedAt.slice(0, 10)}</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Cards;
