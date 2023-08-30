import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    Alert,
    Switch,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchToggle from 'react-native-switch-toggle';

const WorkShopGoalReminder = ({ navigation }) => {
    const [scheduledNotificationIds, setScheduledNotificationIds] = useState([]);
    const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
    const [time, setTime] = useState('1:00');
    const [ampm, setAMPM] = useState('AM');
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDays, setSelectedDays] = useState({
        Sunday: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
    });

    const toggleDaySelection = (day) => {
        setSelectedDays((prevDays) => ({ ...prevDays, [day]: !prevDays[day] }));
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimePicked = (pickedTime) => {
        const hours = pickedTime.getHours();
        const minutes = pickedTime.getMinutes();
        const isPM = hours >= 12;
        const displayHours = isPM ? hours - 12 : hours;
        setTime(`${displayHours}:${minutes < 10 ? '0' + minutes : minutes}`);
        setAMPM(isPM ? 'PM' : 'AM');
        hideTimePicker();
    };

    const setReminder = async () => {
        if (!isNotificationsEnabled) {
            Alert.alert('Error', 'Please enable notifications first.');
            return;
        }
        if (!time) {
            Alert.alert('Error', 'Please select a time first.');
            return;
        }

        let anyDaySelected = false;
        for (let day in selectedDays) {
            if (selectedDays[day]) {
                anyDaySelected = true;
                break;
            }
        }

        if (!anyDaySelected) {
            Alert.alert('Error', 'Please select at least one day.');
            return;
        }

        let newScheduledNotificationIds = [];

        for (let day in selectedDays) {
            if (selectedDays[day]) {
                let targetDate = new Date();
                const [hours, minutes] = time.split(':');
                targetDate.setHours(hours);
                targetDate.setMinutes(minutes);

                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const targetDayIndex = daysOfWeek.indexOf(day);
                const currentDayIndex = targetDate.getDay();

                if (currentDayIndex > targetDayIndex) {
                    targetDate.setDate(
                        targetDate.getDate() + 7 - (currentDayIndex - targetDayIndex)
                    );
                } else {
                    targetDate.setDate(
                        targetDate.getDate() + (targetDayIndex - currentDayIndex)
                    );
                }

                const notificationId = await Notifications.scheduleNotificationAsync({
                    content: {
                        title: 'Workshop Goal Reminder',
                        body: `Your workshop is scheduled for ${day} at ${time} ${ampm}. It's time to review your goal together!`,
                    },
                    trigger: {
                        dayOfWeek: targetDayIndex + 1,  // Sunday is 1, Monday is 2, etc.
                        hour: parseInt(hours, 10),
                        minute: parseInt(minutes, 10),
                        repeats: true
                    },
                    // trigger: null
                });
                newScheduledNotificationIds.push(notificationId);
            }
        }

        Alert.alert('Success', `Reminder set for selected days at ${time} ${ampm}`);
        setScheduledNotificationIds(newScheduledNotificationIds);
    };
    const cancelScreenSpecificNotifications = async () => {
        for (let id of scheduledNotificationIds) {
            await Notifications.cancelScheduledNotificationAsync(id);
        }
        setScheduledNotificationIds([]); // clear the IDs
    };

    const toggleNotifications = async () => {
        const newStatus = !isNotificationsEnabled;
        setNotificationsEnabled(newStatus);

        if (!newStatus) {
            await cancelScreenSpecificNotifications();
        }
    };

    return (
        <>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 16,
                            backgroundColor: '#90b1c2',
                        }}
                    >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='ios-arrow-back' size={30} color='white' />
                        </TouchableOpacity>
                        <Image
                            source={require('../../../assets/images/logo2.png')}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                marginRight: 3,
                                marginLeft: 5,
                            }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    fontSize: 9,
                                    backgroundColor: 'white',
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    borderRadius: 15,
                                    borderColor: '#ab713c',
                                    borderWidth: 1,
                                }}
                            >
                                Settings &gt; Workshop Goal Reminder
                            </Text>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                        <Image
                            source={require('../../../assets/images/lesson2_deep_learning.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                        />
                        <View
                            style={{
                                width: '100%',
                                borderBottomColor: '#ab713c',
                                borderBottomWidth: 1,
                                marginBottom: 10,
                                marginTop: 20,
                            }}
                        />
                        <View style={{ paddingLeft: 16, paddingRight: 16 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                >
                                    Workshop Goal Reminder
                                </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isNotificationsEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleNotifications}
                                    value={isNotificationsEnabled}
                                />
                            </View>
                            <View
                                style={{
                                    width: '20%',
                                    borderBottomColor: '#90b1c2',
                                    borderBottomWidth: 10,
                                    marginBottom: 10,
                                }}
                            />

                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                            >
                                Day(s):
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',  // Add this line to allow wrapping
                                    justifyContent: 'space-around',
                                }}
                            >
                                {['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'].map((day, index) => (
                                    <TouchableOpacity
                                        key={day} // Now unique
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 20,
                                            borderColor: selectedDays[day] ? '#ab713c' : '#90b1c2',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginHorizontal: 5,
                                        }}
                                        onPress={() => toggleDaySelection(day)}
                                    >
                                        <Text style={{ fontWeight: 'bold' }}>{day}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}
                            >
                                Time:
                            </Text>
                            <TouchableOpacity
                                onPress={showTimePicker}
                                style={styles.touchableContainer}
                            >
                                <View style={styles.timeContainer}>
                                    <View style={styles.boxContainer}>
                                        <View style={styles.box}>
                                            <Text style={styles.boxText}>{time}</Text>
                                        </View>
                                        <View style={styles.box}>
                                            <Text style={styles.boxText}>{ampm}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={setReminder} style={styles.button} >
                                    <Text style={styles.buttonText}>Set Reminder</Text>
                                </TouchableOpacity>
                            </View>

                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode='time'
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
    buttonContainer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    button: {
        width: 200,
        borderWidth: 2,
        borderColor: '#ab713c',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        // color: 'white',
        fontSize: 16,
    },
    touchableContainer: {
        marginBottom: 20,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        marginRight: 10,
    },
    boxContainer: {
        flexDirection: 'row',
    },
    box: {
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
    },
    boxText: {
        fontSize: 16,
        color: '#ab713c',
    },
});

export default WorkShopGoalReminder;
