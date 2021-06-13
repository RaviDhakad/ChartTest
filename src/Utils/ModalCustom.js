import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default ModalCustom = (props) => {
    return (
        <View>
            <Modal animationIn='zoomInRight' animationOut='zoomOutRight' animationInTiming={1000} animationOutTiming={1000} isVisible={props.isModalVisible}
                onBackdropPress={() => props.setIsModalVisible(false)}>
                <View style={styles.modalMainContainer}>

                    <Text style={styles.titleText}>Switch to Bar</Text>
                    <Text style={styles.greenText}>1 Measure & 1 dimension</Text>
                    <Text style={styles.greyText}>(Change will not be saved)</Text>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={props.piaChartShowMethod}><Image style={styles.iconStyle} source={require('../imgs/pia_chart_icon.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={props.barChartShowMethod}><Image style={styles.iconStyle} source={require('../imgs/bar_chart_icon.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={props.donutChartShowMethod}><Image style={styles.iconStyle} source={require('../imgs/donut_chart_icon.png')} /></TouchableOpacity>
                    </View>
                  
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalMainContainer: {
        backgroundColor: 'white', width: '100%', height: 200,
        ...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end',
        marginTop: 60,
        position: 'absolute', paddingHorizontal: 20, paddingTop: 20
    },
    titleText: {
        fontSize: 14, color: 'black', fontWeight: 'bold'
    },
    greenText: {
        fontSize: 12, color: 'green', marginTop: 5
    },
    greyText: {
        fontSize: 12, color: 'grey', marginTop: 5
    },
    imageContainer: {
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 20
    },
    iconStyle: {
        height: 40, width: 40
    },
})