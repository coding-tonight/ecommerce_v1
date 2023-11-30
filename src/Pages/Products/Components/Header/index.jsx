import { signal } from "@preact/signals-react";
import { Select } from "antd";

const ProductPageHeader = () => {
  const handleChange = (value) => {
    console.log(value); 
  };

  return (
    <>
      <section className="flex justify-end items-center">
        <Select
          labelInValue
          defaultValue={{
            value: "",
            label: "Sort By",
          }}
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "",
              label: "Sort By",
            },
            {
              value: "Asscending",
              label: "Asscending Order",
            },
            {
              value: "Desscending",
              label: "Desscending Order",
            },
          ]}
        />
      </section>
    </>
  );
};

export default ProductPageHeader;
