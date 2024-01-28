"use client";
import React, { useEffect } from "react";

const Calendly = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minHeight: "650px", width: "100%" }}
    ></div>
  );
};

export default Calendly;
