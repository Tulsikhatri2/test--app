import { Dialog, DialogContent } from '@mui/material'
import React, { useState } from 'react'


interface LineChartFormProps {
  handleLineChartDataClose: () => void;
  lineChartOpen: boolean;
}

const LineChartForm: React.FC<LineChartFormProps> = ({ handleLineChartDataClose, lineChartOpen })=> {

  const [costPrice, setCostPrice] = useState<string>("")
  const [sellingPrice, setSellingPrice] = useState<string>("")
  
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
          {"Sales Data"}
        </p>
        <DialogContent>
          <form>
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Name"
              name="name"
              
            />
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Target"
              name="target"
              
            />
            <input
              className="bg-neutral-700	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Achievement"
              name="achievement"
              
            />
            <button
              className="h-[80%] text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600 ml-[6%] mt-5"
              type="button"
              onClick={() => {
              }}
            >
              Add Data
            </button>
            <button
              type="button"
              className="h-[80%] text-white bg-neutral-800 border-2 border-red-600 hover:bg-red-700 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-cyan-600 ml-[25%] mt-5"
              // onClick={handleClose}
            >
              Cancel
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LineChartForm