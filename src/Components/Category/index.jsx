// import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Space } from "antd";
import { category } from "./icons/icons";

import {
  fetchCategory,
  selectALLCategory,
} from "@/Redux/Features/Category/CategorySlice";
import { useEffect } from "react";

const Category = () => {
  const dispatch = useDispatch();
  const categories =  useSelector(selectALLCategory);
  let cateogory_status = useSelector((state) => state.category.status);
  // const errors = useSelector(state => state.category.errors)
 
  useEffect(() => {
    if (cateogory_status = "idle") {
      dispatch(fetchCategory());
    }
  }, []);

  console.log(categories);
  return (
    <>
      <section className="mt-10 container mx-auto">
        <Divider>Categories</Divider>
        {/* {errors && 'error'} */}
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
