import React from "react";

const Progress = ({ progress }) => {
  return (
    <div className="mt-10">
      {progress.map((item, index) => (
        <div key={index}>
          <h4 className="font-normal mt-6 mb-2 text-gray-800">{item.title}</h4>
          <div className="w-full bg-gray-200 rounded-full h-[6px] relative">
            <div
              className="h-[6px]  rounded-full relative"
              style={{
                width: item.progress,
                backgroundColor: item.color,
              }}
            >
              <span
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                  top: "-50%",
                  right: "0",
                }}
              ></span>
              <span
                className="text-xs  font-semibold absolute"
                style={{
                  color: item.color,
                  bottom: "10px",
                  right: "0",
                }}
              >
                {item.progress}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
