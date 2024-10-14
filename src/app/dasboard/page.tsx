import { CopilotPopup } from '@copilotkit/react-ui'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <CopilotPopup
        instructions={"You are assisting the user as best as you can. Ansewr in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </div>
  )
}

export default Dashboard