import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView,
    Alert, TextInput, KeyboardAvoidingView, Platform, ScrollView
} from "react-native";
import { useNavigation, TabActions } from '@react-navigation/native';
import PiaChartComponent from '../Components/PresentationComponent/PiaChartComponent'
import BarChartComponent from '../Components/PresentationComponent/BarChartComponent'
import DonutChartComponent from '../Components/PresentationComponent/DonutChartComponent'
import ModalCustom from '../Utils/ModalCustom'
function ExpensecComponent() {
    const [isCustomModalVisible, setIsCustomModalVisible] = useState(false);
    const [isPiaChartVisible, setIsPiaChartVisible] = useState(true);
    const [isBarChartVisible, setIsBarChartVisible] = useState(false);
    const [isDonutChartVisible, setIsDonutChartVisible] = useState(false);

    const navigation = useNavigation();

    const data = [
        {
            name: "Drink",
            population: 27,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Rent",
            population: 31,
            color: "yellow",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Groceries",
            population: 23,
            color: "red",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Uber",
            population: 12,
            color: "green",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        },
        {
            name: "Restaurants",
            population: 15,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#5b7bc4",
            legendFontSize: 15
        }
    ];

    const dataBarChart = {
        labels: ["Drink", "Rent", "Groceries", "Uber", "Restaurants"],
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
                <Text style={styles.headerTitle}>Expenses</Text>
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
                <View style={styles.secondContainer}>
                    <Text style={styles.topSpendingText}>Top Spending Categories</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('SubCategoryComponent')} style={styles.rowContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.homeImage} source={require('../imgs/home_utilities_img.jpeg')} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.homeUtiText}>HOME & UTILITIES</Text>
                                <Text style={styles.priceText}>$1,200 spent</Text>
                            </View>
                        </View>
                        <Image style={styles.arrowImg} source={require('../imgs/right_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.homeImage} source={require('../imgs/home_utilities_img.jpeg')} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.homeUtiText}>TRAVEL</Text>
                                <Text style={styles.priceText}>$500 spent</Text>
                            </View>
                        </View>
                        <Image style={styles.arrowImg} source={require('../imgs/right_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.homeImage} source={require('../imgs/home_utilities_img.jpeg')} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.homeUtiText}>RIDE SHARING</Text>
                                <Text style={styles.priceText}>$430 spent</Text>
                            </View>
                        </View>
                        <Image style={styles.arrowImg} source={require('../imgs/right_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.homeImage} source={require('../imgs/home_utilities_img.jpeg')} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.homeUtiText}>DRINK</Text>
                                <Text style={styles.priceText}>$132 spent</Text>
                            </View>
                        </View>
                        <Image style={styles.arrowImg} source={require('../imgs/right_arrow.png')} />
                    </TouchableOpacity>

                    <View style={styles.deviderLine} />
                    <View style={styles.viewAllCategory}>
                        <Text style={styles.viewAllText}>View all Categories</Text>
                    </View>

                </View>
            </View></ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f4f6f9',
    },
    headerContainer: {
        height: 60, backgroundColor: '#5b7bc4', justifyContent: 'center', alignItems: 'center'
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
        alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 20
    },
    rightImage: {
        height: 35, width: 35,
    }

})
export default ExpensecComponent;