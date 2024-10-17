"use client";

import { CopilotPopup } from "@copilotkit/react-ui";
import React from "react";
import LineChart from "../components/LineChart/LineChart";
import LineChartForm from "../components/Form/LineChartForm";
import LogoutButton from "../components/Logout/Logout";
import { useSelector } from "react-redux";
import { AppStore } from "@/Redux/store";
import BarChart from "../components/BarChart/BarChart";

const Dashboard = () => {
  const [lineChartOpen, setLineChartOpen] = React.useState<boolean>(false);
  const { lineChart } = useSelector((state: AppStore) => state.graph);

  const handleLineChartDataOpen = () => {
    setLineChartOpen(true);
  };
  const handleLineChartDataClose = () => {
    setLineChartOpen(false);
  };

  return (
    <>
      <div className="w-[100vw] h-[screen] bg-slate-200 flex flex-row  font-mono">
        <div className="w-[90%] h-[100%] flex flex-col items-center justify-center mt-10">
          <div className="w-[100%] h-[50%]  flex items-center justify-center">
            <div className="w-[100%] h-[90%] flex flex-row items-center justify-center">
              <div className="w-[40%] h-[85%] p-10 bg-stone-300 rounded-lg ml-10 shadow-black shadow-lg  ">
                <BarChart data={lineChart} />
              </div>
              <div className="w-[40%] h-[85%] p-10 bg-stone-300 rounded-lg ml-10 shadow-black shadow-lg  ">
                <LineChart />
              </div>
            </div>
          </div>
          <button
            className=" w-[10%] h-[7%] text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600 mt-10"
            onClick={() => {
              handleLineChartDataOpen();
            }}
          >
            Add Data
          </button>
          <LineChartForm
            handleLineChartDataClose={handleLineChartDataClose}
            lineChartOpen={lineChartOpen}
          />
          <div className="w-[100%] h-[50%] flex items-center justify-center">
            <div className="w-[100%]  flex flex-wrap flex-row items-center justify-between mt-8 mb-5">
              {lineChart.map((item) => {
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
                      <p className="font-bold">
                        Selling Price : {item.sellingPrice}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <LogoutButton />
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
    </>
  );
};

export default Dashboard;
