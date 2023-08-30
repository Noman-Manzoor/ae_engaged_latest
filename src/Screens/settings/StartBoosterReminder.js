import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const StartBoosterReminder = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDatePicked = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimePicked = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        setTime(`${hours}:${minutes}`);
        hideTimePicker();
    };
    const askNotificationPermission = async () => {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        // If no existing permission, ask the user.
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        // If the user did not grant permissions
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return false;
        }
        return true;
    };

    const setReminder = async () => {
        const hasPermission = await askNotificationPermission();
        if (!hasPermission) return;

        const [hours, minutes] = time.split(':').map(Number);
        const reminderDate = new Date(selectedDate);
        reminderDate.setHours(hours, minutes);

        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Start Booster Reminder!',
                body: `It's time to start the AE Booster as planned on ${reminderDate.toDateString()} at ${time}.`,
            },
            trigger: reminderDate,
            // trigger: null,
        });

        console.log(`Reminder set for ${reminderDate.toDateString()} at ${time}`);
        Alert.alert(`Reminder set for ${reminderDate.toDateString()} at ${time}`);
    };


    return (
        <>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={30} color="white" />
                        </TouchableOpacity>

                        <Image
                            source={require('../../../assets/images/logo2.png')}
                            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                                Start Booster &gt; Reminder
                            </Text>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                        <Image
                            source={require('../../../assets/images/lesson2_deep_learning.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}

                        />
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>
                                Start Booster Reminder
                            </Text>
                            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />
                            <Text style={{ fontSize: 14, marginBottom: 20, marginLeft: 10 }}>
                                Choose a day about 3-6 months after your wedding date to start the AE Booster.
                            </Text>

                            <TouchableOpacity onPress={showDatePicker} style={{ marginBottom: 20 }}>
                                <Text>Select Date: {selectedDate.toDateString()}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={showTimePicker} style={{ marginBottom: 20 }}>
                                <Text>Set Time: {time}</Text>
                            </TouchableOpacity>

                            <Button title="Set Reminder" onPress={setReminder} />

                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleDatePicked}
                                onCancel={hideDatePicker}
                            />

                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleTimePicked}
                                onCancel={hideTimePicker}
                            />
                        </View>

                    </ScrollView>
                </View>
            </ScrollView>
        </>
    );
};

export default StartBoosterReminder;
