import { Divider, Image } from "antd";
import { images } from "./image";

const Info = () => {
  return (
    <>
      <section className="container mx-auto mt-10 mb-5">
        <Divider>About us</Divider>
        <div className="flex justify-center gap-2 flex-wrap">
          {images.map((image) => (
            <>
              <Image
                src={image.image}
                alt="info section image"
                width={400}
                height={500}
                style={{
                  filter: "grayscale(100%)",
                  // height: "800px",
                  objectFit: "cover",
                }}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Info;
