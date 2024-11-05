import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col space-y-[2%] items-center justify-center bg-gradient-to-b from-pink-400 via-red-300 to-pink-500 bg-opacity-90 p-8">
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full">
          <iframe
            style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/6ZAPhvyNmmGOMs1fNeCq9F?utm_source=generator"}
            width={"100%"}
            height={"352"}
            frameBorder={"0"}
            allowFullScreen={true}
            allow={
              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            }
            loading={"lazy"}
          />
        </div>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full">
          <iframe
            style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/2nOR9SQRr7QfFRiCf0SNVr?utm_source=generator"}
            width={"100%"}
            height={"352"}
            frameBorder={"0"}
            allowFullScreen={true}
            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
            loading={"lazy"}
          />
        </div>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full">
          <iframe
            style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/7ukdRXBwSj6bOdMM3QKV5X?utm_source=generator"}
            width={"100%"}
            height={"352"}
            frameBorder={"0"}
            allowFullScreen={true}
            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
            loading={"lazy"}
          />
        </div>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full">
          <iframe
            style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/6zKRZVo8IbHTAUkLxOiaTP?utm_source=generator"}
            width={"100%"}
            height={"352"}
            frameBorder={"0"}
            allowFullScreen={true}
            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
            loading={"lazy"}
          />
        </div>
      </div>
    </>
  );
};

export default page;


/**
 *  // old code
 * import React from "react";

const page = () => {
  return (
    <>
    <div className="flex flex-col space-y-[2%]">
        <div className="">
        <iframe
            style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/6ZAPhvyNmmGOMs1fNeCq9F?utm_source=generator"}
            width={"100%"}
            height={"352"}
            frameBorder={"0"}
            allowFullScreen={true}
            allow={
            "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            }
            loading={"lazy"}
        />
        </div>
        <div>
            <iframe style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/2nOR9SQRr7QfFRiCf0SNVr?utm_source=generator"}
            width={"100%"} height={"352"} frameBorder={"0"}
            allowFullScreen={true}
            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
            loading={"lazy"}></iframe>
        </div>
        <div>
            <iframe style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/7ukdRXBwSj6bOdMM3QKV5X?utm_source=generator"}
            width={"100%"} height={"352"} frameBorder={"0"}
            allowFullScreen={true}
            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
            loading={"lazy"}></iframe>
        </div>
        <div>
            <iframe style={{ borderRadius: "12px" }}
            src={"https://open.spotify.com/embed/playlist/6zKRZVo8IbHTAUkLxOiaTP?utm_source=generator"}
            width={"100%"} height={"352"} frameBorder={"0"}
            allowFullScreen={true}
            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
            loading={"lazy"}></iframe>
        </div>

    </div>
    </>
  );
};

export default page;
 */