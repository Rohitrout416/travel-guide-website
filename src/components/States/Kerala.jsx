import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Kerala() {
  const name = "Kerala";
  const image =
    "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/4/w900X450/Alleppey.jpg?w=400&dpr=2.6";

  const visitLocationsData = [
    {
      name: "place name",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      desc: "Description of the place",
    },
  ];
  return (
    <div>
      <StatePage
        stateName={name}
        stateImage={image}
        visitLocationsData={visitLocationsData}
        stateDesc={
          <div className="state-desc">
            <span>
              {" "}
              State Description goes here <br />
              State Description goes here
            </span>
            <span>
              State Description goes here
              <br />
              State Description goes here
            </span>
          </div>
        }
      />
    </div>
  );
}

export default Kerala;