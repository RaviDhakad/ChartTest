import React from 'react'
import { View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie'

export default DonutChartComponent = (props) => {

    return (
        <View style={styles.container}>
            <Pie
                radius={100}
                innerRadius={50}
                sections={props.dataDonutChart}
                strokeCap={'butt'}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 260, justifyContent: 'center', alignItems: 'center'
    }
});