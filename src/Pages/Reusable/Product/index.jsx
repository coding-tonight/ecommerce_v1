import { useState , useEffect, useCallback}  from 'react';
import { Card } from "antd";
// import { UseEmblaCarouselType } from 'embla-carousel-react';

import AppLayout from "../../../Layouts/AppLayout";

const ProductPage = () => {
  return (
    <>
      <AppLayout>
        <section className="container mx-auto mt-5">
          <Card>
            <div className="flex">
              <div>1</div>
              <div>2</div>
            </div>
          </Card>
        </section>
      </AppLayout>
    </>
  );
};

export default ProductPage;
