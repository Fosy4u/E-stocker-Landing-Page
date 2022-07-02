import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";


const pics = [
  "https://preply.com/wp-content/uploads/2018/08/unnamed.png",
  "https://www.intellspot.com/wp-content/uploads/2020/03/Line-graph-example.png",
  "https://meetjohnsong.files.wordpress.com/2010/01/hockey-stick-graph1.png",
];

const Slide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ height: "15rem" }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={"2000"}
        className="mt-5"
        // nextIcon={navIcon("carousel-control-next-icon")}
        // prevIcon={navIcon("carousel-control-prev-icon")}
        // style={{ marginTop: '1000px' }}
      >
        {" "}
        {pics.map((pic, index) => (
          <Carousel.Item>
            <img
              key={index}
              // className="has-shadow"
              src={pic}
              alt="Hero"
              width="350px"
              height="25px"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
