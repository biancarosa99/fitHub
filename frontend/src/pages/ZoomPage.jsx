import React from "react";
import ZoomVideo from "@zoom/videosdk";

const ZoomPage = () => {
  const client = ZoomVideo.createClient();
  client.init("en-US", "Global", { patchJsMedia: true });
  let stream;

  return <div>test zoom page</div>;
};

export default ZoomPage;
