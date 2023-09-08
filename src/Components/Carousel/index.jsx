import { Carousel } from "antd";
import { slide1, slide2 } from "../../assets/js/image";

const Carousels = () => {
  const contentStyle = {
    margin: 0,
    height: "460px",
    objectFit: "cover",
    width: "100vw",
  };
  return (
    <>
      <Carousel draggable infinite lazyLoad>
        <div>
          <img src={slide1} style={contentStyle} />
        </div>
        <div>
          <img src={slide2} style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default Carousels;
