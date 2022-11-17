import React from "react";
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme
  } from "victory";
  
function BarChartStudentEnrollment(props){
return (
    <div style={{'width':220,'height':220}}>
    <VictoryChart 
      responsive={true}
 
      domainPadding={{ x: 50 }}
      theme={VictoryTheme.material}
    >
      <VictoryBar
        barRatio={1}
        cornerRadius={10} // Having this be a non-zero number looks good when it isn't transitioning, but looks like garbage when it is....
        alignment="middle"
        data={props.graph_data}
      />
    </VictoryChart>
  </div>
)
}
export default BarChartStudentEnrollment;