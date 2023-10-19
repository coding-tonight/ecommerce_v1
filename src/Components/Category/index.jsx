import { Divider, Space } from "antd";
import { category } from "./icons/icons";

const Category = () => {
  return (
    <>
      <section className="mt-10 container mx-auto">
        <Divider>Categories</Divider>

        <Space className="flex justify-around flex-wrap">
          {category.map((item) => (
            <div
              key={item.title}
              className="hover:shadow-md cursor-pointer p-5"
            >
              <img
                src={item.icon}
                style={{
                  height: "60px",
                  width: "60px",
                  objectFit: "cover",
                }}
              />
              <h5 className="text-center bold mt-1">{item.title}</h5>
            </div>
          ))}
        </Space>
      </section>
    </>
  );
};

export default Category;
