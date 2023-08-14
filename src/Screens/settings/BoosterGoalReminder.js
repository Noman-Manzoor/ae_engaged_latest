import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const BoosterGoalReminder = ({ navigation }) => {
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [time, setTime] = useState('');
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

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

    const setReminder = async () => {
        console.log(`Reminder set for ${selectedDay} at ${time}`);

        // Convert the selected day and time to a Date object.
        let targetDate = new Date();
        const [hours, minutes] = time.split(':');
        targetDate.setHours(hours);
        targetDate.setMinutes(minutes);

        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const targetDayIndex = daysOfWeek.indexOf(selectedDay);
        const currentDayIndex = targetDate.getDay();

        if (currentDayIndex > targetDayIndex || (currentDayIndex === targetDayIndex && targetDate.getTime() <= new Date().getTime())) {
            // If the selected day-time is in the past or is today but the time has passed, 
            // schedule it for the same day-time in the next week.
            targetDate.setDate(targetDate.getDate() + 7 - (currentDayIndex - targetDayIndex));
        } else {
            targetDate.setDate(targetDate.getDate() + (targetDayIndex - currentDayIndex));
        }

        // Schedule the notification
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Booster Goal Upcoming!',
                body: `Scheduled for ${selectedDay}, ${time}. Stay on track with your objectives!`,
                data: { data: 'relevant-data-here' },
            },
            trigger: targetDate,
            // trigger: null,
        });


        Alert.alert(`Reminder set for ${selectedDay} at ${time}`);
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
                            source={require('../../../assets/images/logo.png')}
                            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                                Booster &gt; goal Reminder
                            </Text>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ padding: 16 }}>
                        <Image
                            source={require('../../../assets/images/lesson2_deep_learning.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>
                            Booster Goal Reminder
                        </Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Text>Select Day: </Text>
                            <Picker
                                selectedValue={selectedDay}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue) => setSelectedDay(itemValue)}
                            >
                                <Picker.Item label="Monday" value="Monday" />
                                <Picker.Item label="Tuesday" value="Tuesday" />
                                <Picker.Item label="Wednesday" value="Wednesday" />
                                <Picker.Item label="Thursday" value="Thursday" />
                                <Picker.Item label="Friday" value="Friday" />
                                <Picker.Item label="Saturday" value="Saturday" />
                                <Picker.Item label="Sunday" value="Sunday" />
                            </Picker>
                        </View>

                        <TouchableOpacity onPress={showTimePicker} style={{ marginBottom: 20 }}>
                            <Text>Set Time: {time}</Text>
                        </TouchableOpacity>

                        <Button title="Set Reminder" onPress={setReminder} />

                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            onConfirm={handleTimePicked}
                            onCancel={hideTimePicker}
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    );
};

export default BoosterGoalReminder;
