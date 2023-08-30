import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const CheckBox = ({ isSelected, onPress, label }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, isSelected && styles.checked]} />
        <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
);

const BoosterGoalReminder = ({ navigation }) => {
    const [selectedDays, setSelectedDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    });
    const [time, setTime] = useState('');
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const toggleDaySelection = (day) => {
        setSelectedDays(prevDays => ({ ...prevDays, [day]: !prevDays[day] }));
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


    const setReminder = async () => {
        for (let day in selectedDays) {
            if (selectedDays[day]) {
                console.log(`Reminder set for ${day} at ${time}`);

                let targetDate = new Date();
                const [hours, minutes] = time.split(':');
                targetDate.setHours(hours);
                targetDate.setMinutes(minutes);

                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const targetDayIndex = daysOfWeek.indexOf(day);
                const currentDayIndex = targetDate.getDay();

                if (currentDayIndex > targetDayIndex || (currentDayIndex === targetDayIndex && targetDate.getTime() <= new Date().getTime())) {
                    targetDate.setDate(targetDate.getDate() + 7 - (currentDayIndex - targetDayIndex));
                } else {
                    targetDate.setDate(targetDate.getDate() + (targetDayIndex - currentDayIndex));
                }

                await Notifications.scheduleNotificationAsync({
                    content: {
                        title: 'Booster Goal Upcoming!',
                        body: `Scheduled for ${day}, ${time}. Stay on track with your objectives!`,
                        data: { data: 'relevant-data-here' },
                    },
                    trigger: targetDate,
                    // trigger: null,
                });
            }
        }
        Alert.alert(`Reminder set for selected days at ${time}`);
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
                                Booster &gt; Goal Reminder
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
                                Booster Goal Reminder
                            </Text>
                            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Select one or more days:</Text>
                            {Object.keys(selectedDays).map(day => (
                                <CheckBox
                                    key={day}
                                    label={day}
                                    isSelected={selectedDays[day]}
                                    onPress={() => toggleDaySelection(day)}
                                />
                            ))}

                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Set suitable time:</Text>
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
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
    },
    checked: {
        backgroundColor: '#90b1c2',
    },
    checkboxLabel: {
        fontSize: 16,
    }
});

export default BoosterGoalReminder;