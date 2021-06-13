import React from 'react'
import { Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";
export default BarChartComponent = (props) => {
  const configChart = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "black",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

  return (
    <BarChart
      data={props.dataBarChart}
      width={ Dimensions.get('window').width }
      height={260}
      yAxisSuffix="%"
      yAxisInterval={1}
      chartConfig={configChart}
      verticalLabelRotation={30}
    />
  )
}
