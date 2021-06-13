import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import { PieChart } from "react-native-chart-kit";

export default PiaChartComponent = (props) => {
    const configChart = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            marginLeft: 20,
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    }

    return (
        <PieChart style={styles.container}
            data={props.data}
            width={Dimensions.get('window').width}
            height={260}
            chartConfig={configChart}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"} />
    )
}
const styles = StyleSheet.create({
    container: {
        width: '98%', backgroundColor: 'white', alignSelf: 'center', marginTop: 5
    }
});