import { Divider, Button } from "antd";
import { info_3 } from "../../assets/js/image";

const Info = () => {
  return (
    <>
      <section className="container mx-auto mt-10">
        <Divider>About us</Divider>
        <div className="flex justify-center gap-2 flex-wrap">
          <div className="w-11/12 sm:w-1/4  place-self-center">
            <h1>Our Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius quis, libero aperiam expedita corporis labore
              nobis, debitis facere suscipit blanditiis cupiditate dicta.
              Inventore magnam nihil sunt, impedit nostrum rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dicta vel cumque a consequuntur temporibus molestias nobis adipisci inventore corrupti recusandae delectus iure exercitationem, officiis totam porro dolor quod distinctio nostrum!
            </p>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Shop Now</button>
          </div>
          <img src={info_3}
            alt="info section image"
            style={{
              filter: 'grayscale(100%)',
              height: '800px',
              objectFit: 'cover'
            }} />
        </div>
      </section>
    </>
  );
};

export default Info;
