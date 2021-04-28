import pinky from "../assets/pink.jpg";
import prize4 from "../assets/albums/prize4.jpg";
import jungle from "../assets/jungle.jpg";
import racism from "../assets/racism.jpg";
import own from "../assets/own.jpg";
import pro from "../assets/pro.jpg";
import record from "../assets/record.jpg";
import studio from "../assets/studio.jpg";
import { React, useRef, useEffect, useState } from "react";

export default function Album() {
  return (
    <section className="album-section">
      <h1 className="album-title text-center mb-4">Pink</h1>
      <div className="row mx-0 album-row">
        <div className="col-md-4 album-col p-0">
          <div className="album-img small">
            <img src={pinky} alt="" />
          </div>
          <div className="album-img big">
            <img src={prize4} alt="" />
          </div>
          <div className="album-img small">
            <img src={jungle} alt="" />
          </div>
        </div>
        <div className="col-md-4 album-col">
          <div className="album-img small">
            <img src={racism} alt="" />
          </div>
          <div className="album-img small">
            <img src={own} alt="" />
          </div>
          <div className="album-img big">
            <img src={pro} alt="" />
          </div>
        </div>
        <div className="col-md-4 album-col p-0">
          <div className="album-img big">
            <img src={record} alt="" />
          </div>
          <div className="album-img small">
            <img src={studio} alt="" />
          </div>
          <div className="album-img small">
            <img src={pinky} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
