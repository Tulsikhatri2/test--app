import { addLineChartData } from "@/Redux/Slice/graphSlice";
import { AppDispatch } from "@/Redux/store";
import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface LineChartFormProps {
  handleLineChartDataClose: () => void;
  lineChartOpen: boolean;
}

const LineChartForm: React.FC<LineChartFormProps> = ({
  handleLineChartDataClose,
  lineChartOpen,
}) => {
  const [productID, setProductID] = useState<string>("")
  const [costPrice, setCostPrice] = useState<string>("");
  const [sellingPrice, setSellingPrice] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitChartData = () => {
    if(!productID || !costPrice || !sellingPrice){
      toast.error("All fields are mandatory")
    }
    else{
      const salesData = {
        productID: productID,
        costPrice: costPrice,
        sellingPrice: sellingPrice,
      };
      dispatch(addLineChartData(salesData));
      setProductID("")
      setCostPrice("")
      setSellingPrice("")
      handleLineChartDataClose()

    }
    
  };

  return (
    <div>
      <Dialog
        open={lineChartOpen}
        onClose={handleLineChartDataClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="font-mono"
      >
        <p className="font-bold text-center mt-5 text-xl underline">
          Sales Data
        </p>
        <DialogContent>
          <form>
          <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Product ID"
              name="costPrice"
              value={productID}
              onChange={(e) => setProductID(e.target.value)}
            />
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Cost Price"
              name="costPrice"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
            />
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Selling Price"
              name="sellingPrice"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
            />
            <button
              className="h-[80%] text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600 ml-[6%] mt-5"
              type="button"
              onClick={() => {
                handleSubmitChartData();
              }}
            >
              Add Data
            </button>
            <button
              type="button"
              className="h-[80%] text-white bg-neutral-800 border-2 border-red-800 hover:bg-red-800 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-red-800 ml-[25%] mt-5"
              onClick={handleLineChartDataClose}
            >
              Cancel
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LineChartForm;
