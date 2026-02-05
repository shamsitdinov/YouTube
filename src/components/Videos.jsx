import React from "react";

const Videos = ({ youtubeData, selectVideo, videoId, changeShow }) => {
  return (
    <div className="flex flex-col mt-[4vh]  items-center">

    <div
     className="grid-cols-3 grid gap-4  w-[95vw] my-4-0 mx-auto max-sm:grid-cols-1 max-lg:grid-cols-2 pb-10 min-h-[77vh]"
     >
      {youtubeData
        ? youtubeData.map((item, index) => (
            <div onClick={() => changeShow(index)} key={index} 
            className=" hover:border-2 hover:scale-110 duration-200 outline-white relative rounded-md  p-4 text-white cursor-pointer"
            >
              <iframe width="900" height="200" className="w-full rounded-lg" src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.snippet.title} />
              <div className=" top-0 absolute z-20 w-[450px] h-[220px]"></div>
              <h2>Title: {item.snippet.title.slice(0, 20)} ...</h2>
              <p>Description: {item.snippet.description.slice(0, 25)} ...</p>
              <p>Created: {item.snippet.publishedAt.slice(0, 10)}</p>
            </div>
          ))
        : ""}
    </div>
    </div>
  );
};

export default Videos;
