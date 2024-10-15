import { createSlice } from "@reduxjs/toolkit";

interface AchievementData {
  name: string;
  target: string;
  achievement: string;
}

interface SalesData {
  productID: string;
  costPrice: string;
  sellingPrice: string;
  margin: string;
}

interface InitialState {
  barChart: AchievementData[];
  lineChart: SalesData[];
}

const initialState: InitialState = {
    barChart: [
    { name: "Riya", target: "75000", achievement: "83250" },
    { name: "Priya", target: "85000", achievement: "90250" },
    { name: "Richa", target: "80000", achievement: "84500" },
    { name: "Zoya", target: "70000", achievement: "75500" },
    { name: "Jiya", target: "70000", achievement: "72250" },
  ],
  lineChart: [
    { productID: "1", costPrice: "390", sellingPrice: "620", margin: "230" },
    { productID: "2", costPrice: "300", sellingPrice: "489", margin: "189" },
    { productID: "3", costPrice: "600", sellingPrice: "704", margin: "104" },
    { productID: "4", costPrice: "470", sellingPrice: "663", margin: "193" },
    { productID: "5", costPrice: "1350", sellingPrice: "1800", margin: "450" },
  ],
};

const graphSlice = createSlice({
  name: "graph",
  initialState: initialState,
  reducers: {
    addBarChartData:(state,action)=>{
        return{
            ...state,
            barChart : [...state.barChart, action.payload]
        }
    },
    addLineChartData:(state,action)=>{
        return{
            ...state,
            lineChart : [...state.lineChart, action.payload]
        }
    }

  }
});

export const {addBarChartData, addLineChartData} = graphSlice.actions
export default graphSlice.reducer;
