import { createSlice } from "@reduxjs/toolkit";

interface SalesData {
  productID: string;
  costPrice: string;
  sellingPrice: string;
}

interface InitialState {
  lineChart: SalesData[];
}

const initialState: InitialState = {
  lineChart: [
    { productID: "1", costPrice: "390", sellingPrice: "620" },
    { productID: "2", costPrice: "300", sellingPrice: "489" },
    { productID: "3", costPrice: "600", sellingPrice: "704" },
    { productID: "4", costPrice: "470", sellingPrice: "663" },
    { productID: "5", costPrice: "1350", sellingPrice: "1800" },
  ],
};

const graphSlice = createSlice({
  name: "graph",
  initialState: initialState,
  reducers: {
    addLineChartData: (state, action) => {
      const array = [...state.lineChart];
      let findRow = array.filter(
        (item) => item.productID == action.payload.productID
      );
      const { productID, costPrice, sellingPrice } = action.payload;
      if (findRow.length > 0) {
        const info = array.map((data) =>
          data.productID == productID
            ? { ...data, costPrice, sellingPrice }
            : data
        );
        console.log(info, "info");
        return {
          ...state,
          lineChart: info,
        };
      } else {
        return {
          ...state,
          lineChart: [...state.lineChart, action.payload],
        };
      }
      // if(availableData){
      //   availableData.costPrice = action.payload.costPrice;
      //   availableData.sellingPrice = action.payload.sellingPrice;
      // }

      // else{
      //   return{
      //       ...state,
      //       lineChart : [...state.lineChart, action.payload]
      //   }}
    },
  },
});

export const { addLineChartData } = graphSlice.actions;
export default graphSlice.reducer;
