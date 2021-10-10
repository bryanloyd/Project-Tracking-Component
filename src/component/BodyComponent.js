import React from "react";
import ContentComponent from "./ContentComponent";
import HeaderComponent from "./HeaderComponent";
import hero from "../images/illustration-devices.svg";

const BodyComponent = () => {
  return (
    <>
      <section className="body-container">
        <div>
          <HeaderComponent />
        </div>
        <section className="body-hero">
          <div>
            <img src={hero} alt="" className="body-hero_image" />
          </div>
          <div>
            <ContentComponent />
          </div>
        </section>
      </section>
    </>
  );
};

export default BodyComponent;
