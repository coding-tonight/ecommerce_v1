import { useState, useEffect, useCallback } from "react";
import { Card, Image, Rate, Segmented, InputNumber, Button } from "antd";
import useEmblaCarousel from "embla-carousel-react";

import AppLayout from "../../../Layouts/AppLayout";
import { slides, colors } from "./libs/slides";

//  thumbnail for product images
const Thumb = (props) => {
  const { selected, imgSrc, onClick } = props;
  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};

const ProductPage = () => {
  const options = {};
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  // scroll with thumb
  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  // onSelect function

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <>
      <AppLayout>
        <section className="container mx-auto mt-5">
          <Card>
            <div className="flex gap-2 flex-wrap">
              <div className="flex-1 w-50">
                <div className="embla">
                  <div className="embla__viewport" ref={emblaMainRef}>
                    <div className="embla__container">
                      {slides.map((slide) => (
                        <div className="embla__slide" key={slide.key}>
                          <div className="embla__slide__number">
                            <span>{slide.key}</span>
                          </div>
                          <Image
                            className="embla__slide__img"
                            src={slide.image}
                            alt="Your alt text"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="embla-thumbs">
                    <div
                      className="embla-thumbs__viewport"
                      ref={emblaThumbsRef}
                    >
                      <div className="embla-thumbs__container">
                        {slides.map((slide, index) => (
                          <Thumb
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                            imgSrc={slide.image}
                            key={slide.key}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-50">
                <h1 className="font-bold">Product Name</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatum ea consectetur beatae eligendi eaque numquam vero
                  fugiat quo expedita officiis sit maxime provident, veritatis
                  quasi praesentium veniam incidunt consequuntur error?
                </p>
                <div className="flex flex-col">
                  <div className="my-2">
                    <Rate defaultValue={4} />
                  </div>
                  {/* sizes */}
                  <div className="my-2">
                    <h1 className="mb-2">Sizes:</h1>
                    <Segmented
                      options={["Sm", "M", "L", "XL", "XXL"]}
                      // className="w-50"
                    />
                  </div>
                  {/* color picker */}
                  <div className="mb-3">
                    <h1>Colors:</h1>
                    <div className="flex gap-3 mt-2">
                      {colors.map((color) => (
                        <div
                          style={{
                            backgroundColor: color.color,
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          key={color.key}
                        ></div>
                      ))}
                    </div>
                    {/* end here */}
                  </div>
                  {/* Quantity  */}
                  <div className="my-2">
                    <h1>Qunaitity:</h1>
                    <InputNumber min={1} max={10} defaultValue={3} />;
                  </div>
                  <div className="w-40">
                    <Button>Add TO Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default ProductPage;
