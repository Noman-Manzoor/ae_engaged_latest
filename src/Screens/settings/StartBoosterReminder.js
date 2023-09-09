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

const StartBoosterReminder = ({ navigation }) => {
  const [scheduledNotificationIds, setScheduledNotificationIds] = useState([]);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState({ MM: 'MM', DD: 'DD', YYYY: 'YYYY' });
  const [time, setTime] = useState('1:00');
  const [ampm, setAMPM] = useState('AM');
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDatePicked = (date) => {
    setSelectedDate({
      MM: String(date.getMonth() + 1).padStart(2, '0'),
      DD: String(date.getDate()).padStart(2, '0'),
      YYYY: String(date.getFullYear()),
    });
    hideDatePicker();
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

    if (!selectedDate || !time) {
      Alert.alert('Error', 'Please select a date and time first.');
      return;
    }

    // Cancel existing notifications if any
    await cancelScreenSpecificNotifications();

    // Combine selectedDate and time into a JavaScript Date object
    const [hour, minute] = time.split(':');
    const reminderDate = new Date(
      parseInt(selectedDate.YYYY),
      parseInt(selectedDate.MM) - 1,  // JavaScript months are 0-indexed
      parseInt(selectedDate.DD),
      hour,
      minute
    );

    // Schedule the notification
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Start Booster Reminder!',
        body: `It's time to start the AE Booster as planned on ${reminderDate.toDateString()} at ${time} ${ampm}.`,
      },
      trigger: {
        date: reminderDate,
        repeats: false,  // set to true if you want it to repeat
      },
      // trigger: null
    });

    // Update the state to keep track of notification IDs
    setScheduledNotificationIds([...scheduledNotificationIds, notificationId]);

    Alert.alert('Success', `Reminder set for ${reminderDate.toDateString()} at ${time} ${ampm}`);
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
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>

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
                Settings &gt; Start Booster Reminder
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
                  Start Booster Reminder
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
                style={{ fontSize: 14, marginBottom: 10 }}
              >
                Choose a day about 3-6 months after your wedding date to start the AE Booster.
              </Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                Date:
              </Text>
              <TouchableOpacity onPress={showDatePicker} style={styles.touchableContainer}>
                <View style={styles.timeContainer}>
                  <View style={styles.boxContainer}>
                    <View style={styles.box}>
                      <Text style={styles.boxText}>{selectedDate.MM}</Text>
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.boxText}>{selectedDate.DD}</Text>
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.boxText}>{selectedDate.YYYY}</Text>
                    </View>
                  </View>
                </View>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDatePicked}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>

              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                Time:
              </Text>
              <TouchableOpacity onPress={showTimePicker} style={styles.touchableContainer}>
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

                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimePicked}
                  onCancel={hideTimePicker}
                />
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



export default StartBoosterReminder;
