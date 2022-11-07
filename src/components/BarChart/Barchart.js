import React from "react";
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme
  } from "victory";
  
function BarChart(props){
return (
    <div style={{'width':220,'height':220}}>
    <VictoryChart
      responsive={true}
 
      domainPadding={{ x: 100 }}
      theme={VictoryTheme.material}
    >
      <VictoryBar
        barRatio={1}
        cornerRadius={10} // Having this be a non-zero number looks good when it isn't transitioning, but looks like garbage when it is....
        alignment="middle"
        data={[
          { x: "Youtube data", y: props.youtube_stats },
          { x: "Google data", y: props.google_stats }
        ]}
      />
    </VictoryChart>
  </div>
)
}
export default BarChart