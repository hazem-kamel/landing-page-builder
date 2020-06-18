import React, { useState } from "react";
import io from "socket.io-client";
const Preview = (props) => {
  const socket = io();
  socket.emit("title-preview", (title) => console.log(title));
  socket.on("preview-logo", (logo) => console.log(logo));
  socket.on("preview-carousel", (carousel) => console.log(carousel));
  socket.on("preview-buttons", (buttons) => console.log(buttons));
  return <div></div>;
};

export default Preview;
