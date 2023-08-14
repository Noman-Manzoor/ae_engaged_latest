import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const WorkShopGoalReminder = ({ navigation }) => {
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
    const askNotificationPermission = async () => {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
    
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
    
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for notifications!');
            return false;
        }
        return true;
    };
    
    const setReminder = async () => {
        const hasPermission = await askNotificationPermission();
        
        if (!hasPermission) {
            return;  // Exit if no permission
        }
    
        const currentDate = new Date();
        const targetDate = new Date();
    
        // Adjust the date to the next occurrence of the selected day
        let dayDifference = daysOfWeek[selectedDay] - currentDate.getDay();
        if (dayDifference <= 0) {
            dayDifference += 7;
        }
    
        targetDate.setDate(currentDate.getDate() + dayDifference);
        targetDate.setHours(parseInt(time.split(':')[0]));
        targetDate.setMinutes(parseInt(time.split(':')[1]));
        targetDate.setSeconds(0);
    
        // Schedule the notification
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Workshop Reminder',
                body: `Your workshop is scheduled for ${selectedDay} at ${time}. Please ensure you are prepared.`,
                data: { data: 'workshop-specific-info' },  // Optional data specific to this workshop, if needed
            },            
            // trigger: null,
            trigger: targetDate,
        });
    
        console.log(`Reminder set for ${selectedDay} at ${time}`);
        Alert.alert(`Reminder set for ${selectedDay} at ${time}`);
    };
    
    const daysOfWeek = {
        'Sunday': 0,
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
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
                                workshop &gt; goal Reminder
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
                            Workshop Goal Reminder
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

export default WorkShopGoalReminder;
