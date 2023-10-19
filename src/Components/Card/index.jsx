import { Badge } from "antd";

const Cards = () => {
  return (
    <>
      <section className="mx-auto w-fit p-12">
        <Badge.Ribbon color="red" text="50% off">
          <div className="w-72 h-fit group">
            <div className="relative overflow-hidden">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""
              />
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-black text-white py-2 px-5">
                  Add to cart
                </button>
              </div>
            </div>
            <h2 className="mt-3 text-xl capitalize">Summar Clothes</h2>
            <del className="text-red-700 text-lg">NRS 49</del>
            <p className="text-xl mt-2 ml-1 inline-block">NRS 35</p>
          </div>
        </Badge.Ribbon>
      </section>
    </>
  );
};

export default Cards;
