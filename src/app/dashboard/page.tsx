"use client";

import { CopilotPopup } from "@copilotkit/react-ui";
import BarChart from "../components/BarChart/BarChart";
import React from "react";
import LineChart from "../components/PieChart/PieChart";
import BarChartForm from "../components/Form/BarChartForm";
import LineChartForm from "../components/Form/LineChartForm";

const Dashboard = () => {
  const [lineChartOpen, setLineChartOpen] = React.useState(false)
  const [open, setOpen] = React.useState(false);

  const handleLineChartDataOpen = () => {
    setLineChartOpen(true)
  }
  const handleLineChartDataClose = () => {
    setLineChartOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const card = [1, 2];

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-200 flex flex-col items-center justify-center font-mono">
      <div className="w-[100%] h-[50%]  flex flex-col items-center justify-center">
        <div className="w-[100%] h-[90%] flex flex-row items-center justify-center">
          <div className="w-[30%] h-[100%]  bg-slate-300 rounded-xl ml-10 shadow-black shadow-lg  ">
            <BarChart />
          </div>
          <div className="w-[35%] h-[100%]  bg-slate-300 rounded-xl ml-10 shadow-black shadow-lg  ">
            <LineChart />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[50%]  flex flex-col items-center justify-center">
        <div className="w-[100%] h-[90%] flex flex-row items-center justify-center">
          <div
            className="w-[30%] h-[100%]  bg-slate-300 rounded-xl ml-10 shadow-black shadow-lg flex flex-col
          items-center "
          >
            <div className="w-[80%] h-[20%]  flex justify-between mt-10 ml-[10%]">
              <h3 className="font-bold underline text-lg">Bar Graph</h3>
              <button
                className="h-[80%] text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600"
                onClick={() => {handleClickOpen()}}
              >
                Performance Data
              </button>
              <BarChartForm handleClose={handleClose} open={open}/>
            </div>
            <p className="text-sm w-[80%] text-center mt-5">
              The above Target vs Achievement data shows the performance of
              employees in an organization. This is a dummy data. You can add 
              data by click on "Performance Data" Button above.
            </p>
          </div>
          <div className="w-[35%] h-[100%]  bg-slate-300 rounded-xl ml-10 shadow-black shadow-lg flex flex-col
          items-center ">
            <div className="w-[80%] h-[20%] flex justify-between mt-10 ml-[10%]">
              <h3 className="font-bold underline text-lg">Line Graph</h3>
              <button
                className="h-[80%] text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600"
                onClick={() => {}}
              >
                Sales Data
              </button>
              <LineChartForm handleLineChartDataClose={handleLineChartDataClose} lineChartOpen={lineChartOpen}/>
            </div>
            <p className="text-sm w-[80%] text-center mt-5">
              The above Sales data shows the difference between the cost price and selling price of any
              particular product. This is a dummy data. You can add data by click on 
              "Sales Data" Button above.
            </p>
          </div>
        </div>
      </div>

      <CopilotPopup
        instructions={
          "You are assisting the user as best as you can. Ansewr in the best way possible given the data you have."
        }
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </div>
  );
};

export default Dashboard;
