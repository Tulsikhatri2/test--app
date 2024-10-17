import { AppStore } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Cards = () => {
    const { lineChart } = useSelector((state: AppStore) => state.graph);

  return (
    <>
      <div className="w-[100%]  flex flex-wrap flex-row items-center justify-between mt-8 mb-5">
        {lineChart.map((item: {productID : string, costPrice: string, sellingPrice: string}) => {
          return (
            <>
              <div
                className="w-[30%] h-[20vh]  bg-stone-300 rounded-xl ml-10 shadow-black shadow-lg
                 flex flex-col items-center justify-center mt-5"
              >
                <h3 className="text-red-600 font-bold">
                  PRODUCT ID : {item.productID}
                </h3>
                <p className="font-bold">Cost Price : {item.costPrice}</p>
                <p className="font-bold">Selling Price : {item.sellingPrice}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
