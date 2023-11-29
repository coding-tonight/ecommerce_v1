import { useState } from 'react'
import { signal } from '@preact/signals-react';
import { Select } from "antd";


const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const ProductPageHeader = () => {
   const cities = signal(provinceData[0])

   const handleProvinceChange = (value) => {
    cities.value = cityData[value];
    // setSecondCity(cityData[value][0]);
  };
  return (
    <>
      <section>
        <Select
          defaultValue={provinceData[0]}
          style={{
            width: 120,
          }}
          onChange={handleProvinceChange}
          options={provinceData.map((province) => ({
            label: province,
            value: province,
          }))}
        />
      </section>
    </>
  );
};

export default ProductPageHeader;
