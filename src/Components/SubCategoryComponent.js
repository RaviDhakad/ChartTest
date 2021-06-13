import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView,
    Alert, TextInput, KeyboardAvoidingView, Platform, ScrollView
} from "react-native";
import PiaChartComponent from '../Components/PresentationComponent/PiaChartComponent'
import BarChartComponent from '../Components/PresentationComponent/BarChartComponent'
import DonutChartComponent from '../Components/PresentationComponent/DonutChartComponent'
import ModalCustom from '../Utils/ModalCustom'
import { useNavigation, TabActions } from '@react-navigation/native';
function SubCategoryComponent() {
    const [isCustomModalVisible, setIsCustomModalVisible] = useState(false);
    const [isPiaChartVisible, setIsPiaChartVisible] = useState(true);
    const [isBarChartVisible, setIsBarChartVisible] = useState(false);
    const [isDonutChartVisible, setIsDonutChartVisible] = useState(false);
    const navigation = useNavigation();
    const data = [
        {
            name: "Water",
            population: 27,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Gas",
            population: 31,
            color: "yellow",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Electricity",
            population: 23,
            color: "red",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Food",
            population: 12,
            color: "green",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Milk",
            population: 15,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        }
    ];

    const dataBarChart = {
        labels: ["Water", "Gas", "Electricity", "Food", "Milk"],
        datasets: [
            {
                data: [27, 23, 23, 12, 15]
            }
        ]
    };

    const dataDonutChart = [
        {
            percentage: 27,
            color: '#C70039',
        },
        {
            percentage: 23,
            color: '#44CD40',
        },
        {
            percentage: 23,
            color: '#404FCD',
        },
        {
            percentage: 12,
            color: '#EBD22F',
        },
        {
            percentage: 15,
            color: '#00000',
        }
    ]

    const openPopUp = () => {
        setIsCustomModalVisible(!isCustomModalVisible);
    }

    const piaChartShowMethod = () => {
        setIsCustomModalVisible(!isCustomModalVisible);
        setIsPiaChartVisible(true);
        setIsBarChartVisible(false);
        setIsDonutChartVisible(false);
    }

    const barChartShowMethod = () => {
        setIsCustomModalVisible(!isCustomModalVisible);
        setIsPiaChartVisible(false);
        setIsBarChartVisible(true);
        setIsDonutChartVisible(false);
    }

    const donutChartShowMethod = () => {
        setIsCustomModalVisible(!isCustomModalVisible);
        setIsPiaChartVisible(false);
        setIsBarChartVisible(false);
        setIsDonutChartVisible(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack(null)} >
                    <Image resizeMode={'contain'} style={styles.rightImage} source={require('../imgs/arrow.png')} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Sub Category</Text>

                <TouchableOpacity onPress={openPopUp} style={styles.rightImageContainer}>
                    <Image resizeMode={'contain'} style={styles.rightImage} source={require('../imgs/menu_icon.png')} />
                </TouchableOpacity>
            </View>
            <ModalCustom
                isModalVisible={isCustomModalVisible}
                setIsModalVisible={openPopUp}
                piaChartShowMethod={piaChartShowMethod}
                barChartShowMethod={barChartShowMethod}
                donutChartShowMethod={donutChartShowMethod}
            />
            <ScrollView style={{ flexBox: 1 }}><View>
                {isPiaChartVisible && <PiaChartComponent data={data} />}
                {isBarChartVisible && <BarChartComponent dataBarChart={dataBarChart} />}
                {isDonutChartVisible && <DonutChartComponent dataDonutChart={dataDonutChart} />}

            </View></ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f4f6f9',
    },
    headerContainer: {
        flexDirection: 'row', height: 60, paddingHorizontal: 20, backgroundColor: '#5b7bc4', justifyContent: 'space-between', alignItems: 'center'
    },
    headerTitle: {
        color: 'white', fontSize: 14, fontWeight: 'bold'
    },
    secondContainer: {
        marginHorizontal: 5, marginTop: 20, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 20
    },
    topSpendingText: {
        fontSize: 18, color: 'black', fontWeight: 'bold'
    },
    rowContainer: {
        backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center'
    },
    homeImage: {
        height: 32, width: 32, borderRadius: 16
    },
    homeUtiText: {
        fontSize: 12, color: '#5C5B5C'
    },
    priceText: {
        fontSize: 14, color: '#363636', fontWeight: 'bold'
    },
    arrowImg: {
        height: 15, width: 15
    },
    viewAllCategory: {
        height: 40, justifyContent: 'center'
    },
    viewAllText: {
        marginLeft: 15, fontSize: 14, color: '#363636'
    },
    deviderLine: {
        borderBottomColor: '#f4f6f9', borderBottomWidth: 1, marginTop: 10
    },
    rightImageContainer: {
        alignItems: 'center', justifyContent: 'center',
    },
    rightImage: {
        height: 30, width: 30,
    }

})
export default SubCategoryComponent;