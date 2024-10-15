import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "@/Redux/store";
import { addBarChartData } from "@/Redux/Slice/graphSlice";

interface BarChartFormProps {
  handleClose: () => void;
  open: boolean;
}

const BarChartForm: React.FC<BarChartFormProps> = ({ handleClose, open }) => {
  const [name, setName] = useState<string>("")
  const [target, setTarget] = useState<string>("")
  const [achievement, setAchievement] = useState<string>("")
  const dispatch = useDispatch<AppDispatch>()
  const {barChart} = useSelector((state: AppStore)=> state.graph)
  console.log(barChart,"Bar Chart")

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="font-mono"
      >
        <p className="font-bold text-center mt-5 text-xl underline">
          {"Employee Performance Data"}
        </p>
        <DialogContent>
          <form>
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Target"
              name="target"
              value={target}
              onChange={(e)=> setTarget(e.target.value)}
            />
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Achievement"
              name="achievement"
              value={achievement}
              onChange={(e)=> setAchievement(e.target.value)}
            />
            <button
              className="h-[80%] text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600 ml-[6%] mt-5"
              type="button"
              onClick={() => {
                const achievementData = {
                  name : name,
                  target: target,
                  achievement: achievement
                }
                dispatch(addBarChartData(achievementData))
                handleClose()
              }}
            >
              Add Data
            </button>
            <button
              type="button"
              className="h-[80%] text-white bg-neutral-800 border-2 border-red-600 hover:bg-red-700 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600 ml-[25%] mt-5"
              onClick={handleClose}
            >
              Cancel
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BarChartForm;
