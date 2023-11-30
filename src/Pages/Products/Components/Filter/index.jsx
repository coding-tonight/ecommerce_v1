import { useState } from "react";
import { Slider, InputNumber } from "antd";

const ProductFilter = () => {
  const [InputValue, setInputValue] = useState(0);

  const onChange = (value) => {
    setInputValue(value);
  };

  const onAfterChange = (value) => {
    setInputValue(value);
  };
  return (
    <>
      {/* <h1 className="p-2">Filters</h1> */}
      <aside className="p-2">
        <div className="">
          <h1>Price</h1>
          <div>
            <InputNumber value={InputValue[0]} onChange={onChange} />
            -
            <InputNumber value={InputValue[1]} onChange={onChange} />
          </div>
          <Slider
            range
            step={10}
            max={2000}
            defaultValue={[500, 2000]}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
        </div>
      </aside>
    </>
  );
};

export default ProductFilter;
