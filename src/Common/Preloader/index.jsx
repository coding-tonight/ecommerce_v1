import { Spin } from "antd";

const Preloader = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <Spin
         size="large"
        />
      </section>
    </>
  );
};

export default Preloader;
