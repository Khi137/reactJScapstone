import React from "react";

export default function NewChild({ dataContent }) {
  return (
    <div className="xl:grid md:grid xl:grid-cols-6 md:grid-cols-2 gap-10 xl:px-20 py-6">
      {/* // ẢNH 1  */}
      <div className="xl:col-span-3 md:h-96 h-96 xl:h-96">
        <div className="xl:h-2/3 md:h-2/5 h-2/5">
          <img
            className="h-full w-full object-cover"
            src={dataContent[0].hinhAnh}
            alt=""
          />{" "}
        </div>
        <div className="font-medium text-xl mt-2">{dataContent[0].title}</div>
        <p className="mt-3">{dataContent[0].content}</p>
      </div>
      {/* // ẢNH 2  */}

      <div className="xl:col-span-3 md:h-96 h-96 xl:h-96">
        <div className="xl:h-2/3 md:h-2/5 h-2/5">
          <img
            className="h-full w-full object-cover"
            src={dataContent[1].hinhAnh}
            alt=""
          />{" "}
        </div>
        <div className="font-medium text-xl mt-2">{dataContent[1].title}</div>
        <p className="mt-3">{dataContent[1].content}</p>
      </div>
     
    </div>
  );
}
