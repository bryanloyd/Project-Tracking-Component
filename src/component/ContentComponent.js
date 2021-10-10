import React from "react";

const ContentComponent = () => {
  return (
    <>
      <section className="content-upper">
        <div>
          <p className="content-upper_alpha">NEW</p>
        </div>
        <div>
          <p className="content-upper_bravo">monograph dashboard</p>
        </div>
      </section>
      <div className="content-mid">
        <p className="content-mid_charlie">powerful insights into your team</p>
        <p className="content-mid_delta">
          Project planning and time tracking for agile teams
        </p>
      </div>
      <section className="content-lower">
        <div>
          <button className="content-lower_echo">schedule a demo</button>
        </div>
        <div>
          <p className="content-lower_foxtrot">to see a preview</p>
        </div>
      </section>
    </>
  );
};

export default ContentComponent;
