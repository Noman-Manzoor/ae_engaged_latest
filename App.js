import React, { useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './src/NotificationService';
import { useNavigationState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import WorkShopScreen from './src/Screens/workshop/WorkShopScreen';
import BoosterScreen from './src/Screens/booster/BoosterScreen';
import AboutScreen from './src/Screens/about/AboutScreen';
import ResourcesScreen from './src/Screens/resources/ResourcesScreen';
import EvaluationScreen from './src/Screens/evaluation/EvaluationScreen';
import SettingsScreen from './src/Screens/settings/SettingsScreen';
import WelcomeWorkBook from './src/Screens/workshop/workbook/WelcomeWorkBook';
import WorkBookStart from './src/Screens/workshop/workbook/WorkBookStart';
import NavigationButtons from './src/components/NavigationButtons';
import WorkbookLessonsScreens from './src/Screens/workshop/workbook/lessons/WorkbookLessonsScreens';
import Lesson1 from './src/Screens/workshop/workbook/lessons/Lesson1';
import Lesson2 from './src/Screens/workshop/workbook/lessons/Lesson2';
import Lesson3 from './src/Screens/workshop/workbook/lessons/Lesson3';
import Lesson4 from './src/Screens/workshop/workbook/lessons/Lesson4';
import Lesson5 from './src/Screens/workshop/workbook/lessons/Lesson5';
import CT_CiardiPoem from './src/Screens/workshop/workbook/lessons/lesson1topics/CT_CiardiPoem';
import CT_CiardiPoem2 from './src/Screens/workshop/workbook/lessons/lesson1topics/CT_CiardiPoem2';
import CT_WeOverMe from './src/Screens/workshop/workbook/lessons/lesson1topics/CT_WeOverMe';
import Principles from './src/Screens/workshop/workbook/lessons/lesson1topics/Principles';
import Goals from './src/Screens/workshop/workbook/lessons/lesson1topics/Goals';
import SoftStart from './src/Screens/workshop/workbook/lessons/lesson2Topics/SoftStart';
import WarningSigns from './src/Screens/workshop/workbook/lessons/lesson2Topics/WarningSigns';
import Principles2 from './src/Screens/workshop/workbook/lessons/lesson2Topics/Principles2';
import Goals2 from './src/Screens/workshop/workbook/lessons/lesson2Topics/Goals2';
import MentalPrep from './src/Screens/workshop/workbook/lessons/lesson3Topics/MentalPrep';
import EmotionalPrep from './src/Screens/workshop/workbook/lessons/lesson3Topics/EmotionalPrep';
import PhysicalPrep from './src/Screens/workshop/workbook/lessons/lesson3Topics/PhysicalPrep';
import SpiritualPrep from './src/Screens/workshop/workbook/lessons/lesson3Topics/SpiritualPrep';
import SexualResponseCycle from './src/Screens/workshop/workbook/lessons/lesson3Topics/SexualResponseCycle';
import ElderQuote from './src/Screens/workshop/workbook/lessons/lesson3Topics/ElderQuote';
import Resources3 from './src/Screens/workshop/workbook/lessons/lesson3Topics/Resources3';
import EqualPartnership from './src/Screens/workshop/workbook/lessons/lesson4/EqualPartnership';
import Divorce from './src/Screens/workshop/workbook/lessons/lesson4/Divorce';
import Principles4 from './src/Screens/workshop/workbook/lessons/lesson4/Principles4';
import Goals4 from './src/Screens/workshop/workbook/lessons/lesson4/Goals4';
import Magic6Hours from './src/Screens/workshop/workbook/lessons/lesson5/Magic6Hours';
import MaritalSupport from './src/Screens/workshop/workbook/lessons/lesson5/MaritalSupport';
import Serving from './src/Screens/workshop/workbook/lessons/lesson5/Serving';
import Therapist from './src/Screens/workshop/workbook/lessons/lesson5/Therapist';
import Resources5 from './src/Screens/workshop/workbook/lessons/lesson5/Resources5';
import Principles5 from './src/Screens/workshop/workbook/lessons/lesson5/Principles5';
import Goals5 from './src/Screens/workshop/workbook/lessons/lesson5/Goals5';
import DeepListening from './src/Screens/workshop/workbook/lessons/lesson2Topics/DeepListening';
import AboutAeEngaged from './src/Screens/about/AboutAeEngaged';
import Classes from './src/Screens/about/Classes';
import SupplementalLessons from './src/Screens/resources/SupplementalLessons';
import SocialMedia from './src/Screens/resources/SocialMedia';
import ContinueEducation from './src/Screens/resources/ContinueEducation';
import Financial from './src/Screens/resources/Financial';
import HowToFight from './src/Screens/resources/HowToFight';
import Feedback from './src/Screens/evaluation/Feedback';
import WorshopEvaluation from './src/Screens/evaluation/WorshopEvaluation';
import BoosterEvalution from './src/Screens/evaluation/BoosterEvalution';
import BoosterWeeklyGoals from './src/Screens/booster/BoosterWeeklyGoals';
import BoosterLesson1Topics from './src/Screens/booster/lesson1/BoosterLesson1Topics';
import BoosterLesson2Topics from './src/Screens/booster/lesson2/BoosterLesson2Topics';
import BoosterLesson3Topics from './src/Screens/booster/lesson3/BoosterLesson3Topics';
import BoosterLesson4Topics from './src/Screens/booster/lesson4/BoosterLesson4Topics';
import BoosterLesson5Topics from './src/Screens/booster/lesson5/BoosterLesson5Topics';
import B_Lesson1_Principle from './src/Screens/booster/lesson1/B_Lesson1_Principle';
import B_Lessn1_CPTime from './src/Screens/booster/lesson1/B_Lessn1_CPTime';
import B_Lesson1_Goals from './src/Screens/booster/lesson1/B_Lesson1_Goals';
import B_Lesson2_Principle from './src/Screens/booster/lesson2/B_Lesson2_Principle';
import B_Lessn2_CPTime from './src/Screens/booster/lesson2/B_Lessn2_CPTime';
import B_Lesson2_Goals from './src/Screens/booster/lesson2/B_Lesson2_Goals';
import B_Lesson3_Principle from './src/Screens/booster/lesson3/B_Lesson3_Principle';
import B_Lessn3_CPTime from './src/Screens/booster/lesson3/B_Lessn3_CPTime';
import B_Lesson3_Goals from './src/Screens/booster/lesson3/B_Lesson3_Goals';
import B_Lesson4_Principle from './src/Screens/booster/lesson4/B_Lesson4_Principle';
import B_Lessn4_CPTime from './src/Screens/booster/lesson4/B_Lessn4_CPTime';
import B_Lesson4_Goals from './src/Screens/booster/lesson4/B_Lesson4_Goals';
import B_Lesson5_Principle from './src/Screens/booster/lesson5/B_Lesson5_Principle';
import B_Lessn5_CPTime from './src/Screens/booster/lesson5/B_Lessn5_CPTime';
import B_Lesson5_Goals from './src/Screens/booster/lesson5/B_Lesson5_Goals';
import BoosterStart from './src/Screens/booster/BoosterStart';
import BoosterInstructins from './src/Screens/booster/BoosterInstructins';
import Login from './src/auth/Login';
import Signup from './src/auth/SignUp';
import WorkShopGoalReminder from './src/Screens/settings/WorkShopGoalReminder';
import BoosterGoalReminder from './src/Screens/settings/BoosterGoalReminder';
import StartBoosterReminder from './src/Screens/settings/StartBoosterReminder';
import WorkShopReminder from './src/Screens/settings/WorkShopReminder';
import SexualAnatomy from './src/Screens/workshop/workbook/lessons/lesson3Topics/SexualAnatomy';
import SexualExpectation from './src/Screens/workshop/workbook/lessons/lesson3Topics/SexualExpectation';
import Goal3 from './src/Screens/workshop/workbook/lessons/lesson3Topics/Goal3';
import Completion from './src/Screens/workshop/workbook/lessons/lesson5/Completion';
import BoosterCompletion from './src/Screens/booster/lesson5/BoosterCompletion';
import WorkshopGoalsLessonScreen from './src/Screens/workshop/workbook/lessons/WorkshopGoalsLessonScreen';
import BoosterGoalsWithoutWelcome from './src/Screens/booster/BoosterGoalsWithoutWelcome';
// import Completion from './src/Screens/workshop/workbook/lessons/lesson5/completion';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    async function getNotificationToken() {
      await registerForPushNotificationsAsync();
    }

    getNotificationToken();

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log(response);
      navigation.navigate('Home');
    });
    // This sets the behavior for foreground notifications
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    return () => {
      notificationListener.remove();
      responseListener.remove();
    }
  }, []);
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('userToken');
  //       if (token) {
  //         setIsLoggedIn(true);
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //     } catch (error) {
  //       console.error("Failed to check login status", error);
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >


          {/* {isLoggedIn ? (
            <> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Workshop" component={WorkShopScreen} />

          <Stack.Screen name="Booster" component={BoosterScreen} />
          <Stack.Screen name="Booster welcome" component={BoosterStart} />
          <Stack.Screen name="Booster Instructins" component={BoosterInstructins} />
          <Stack.Screen name="Booster weekly Goals" component={BoosterWeeklyGoals} />
          <Stack.Screen name="Booster weekly Goals without welcome" component={BoosterGoalsWithoutWelcome} />

          <Stack.Screen name="Booster Lesson1 Topics" component={BoosterLesson1Topics} />
          <Stack.Screen name="Booster Lesson1 principle" component={B_Lesson1_Principle} />
          <Stack.Screen name="Booster Lesson1 CP_Time" component={B_Lessn1_CPTime} />
          <Stack.Screen name="Booster Lesson1 Goals" component={B_Lesson1_Goals} />

          <Stack.Screen name="Booster Lesson2 Topics" component={BoosterLesson2Topics} />
          <Stack.Screen name="Booster Lesson2 principle" component={B_Lesson2_Principle} />
          <Stack.Screen name="Booster Lesson2 CP_Time" component={B_Lessn2_CPTime} />
          <Stack.Screen name="Booster Lesson2 Goals" component={B_Lesson2_Goals} />

          <Stack.Screen name="Booster Lesson3 Topics" component={BoosterLesson3Topics} />
          <Stack.Screen name="Booster Lesson3 principle" component={B_Lesson3_Principle} />
          <Stack.Screen name="Booster Lesson3 CP_Time" component={B_Lessn3_CPTime} />
          <Stack.Screen name="Booster Lesson3 Goals" component={B_Lesson3_Goals} />


          <Stack.Screen name="Booster Lesson4 Topics" component={BoosterLesson4Topics} />
          <Stack.Screen name="Booster Lesson4 principle" component={B_Lesson4_Principle} />
          <Stack.Screen name="Booster Lesson4 CP_Time" component={B_Lessn4_CPTime} />
          <Stack.Screen name="Booster Lesson4 Goals" component={B_Lesson4_Goals} />

          <Stack.Screen name="Booster Lesson5 Topics" component={BoosterLesson5Topics} />
          <Stack.Screen name="Booster Lesson5 principle" component={B_Lesson5_Principle} />
          <Stack.Screen name="Booster Lesson5 CP_Time" component={B_Lessn5_CPTime} />
          <Stack.Screen name="Booster Lesson5 Goals" component={B_Lesson5_Goals} />
          <Stack.Screen name="Booster Completion" component={BoosterCompletion} />

          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Resources" component={ResourcesScreen} />

          <Stack.Screen name="Evaluation" component={EvaluationScreen} />
          <Stack.Screen name="Evaluation feedback" component={Feedback} />
          <Stack.Screen name="Workshop Evaluation" component={WorshopEvaluation} />
          <Stack.Screen name="Booster Evaluation" component={BoosterEvalution} />

          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="WorkShopGoalReminder" component={WorkShopGoalReminder} />
          <Stack.Screen name="WorkShopReminder" component={WorkShopReminder} />
          <Stack.Screen name="BoosterGoalReminder" component={BoosterGoalReminder} />
          <Stack.Screen name="StartBoosterReminder" component={StartBoosterReminder} />


          <Stack.Screen name="welcome WorkBook" component={WelcomeWorkBook} />
          <Stack.Screen name="welcome Work Book" component={WorkBookStart} />
          <Stack.Screen name="Bottom NavigationButtons" component={NavigationButtons} />
          <Stack.Screen name="Workbook Lessons" component={WorkbookLessonsScreens} />
          <Stack.Screen name="Workbook goals Lessons" component={WorkshopGoalsLessonScreen} />

          <Stack.Screen name="Lesson 1 Topics" component={Lesson1} />
          <Stack.Screen name="Lesson 1 Topic CT_CiardiPoem" component={CT_CiardiPoem} />
          <Stack.Screen name="Lesson 1 Topic CT_CiardiPoem2" component={CT_CiardiPoem2} />
          <Stack.Screen name="Lesson 1 Topic CT_WeOverMe" component={CT_WeOverMe} />
          <Stack.Screen name="Lesson 1 Topic Principles" component={Principles} />
          <Stack.Screen name="Lesson 1 Topic Goals" component={Goals} />

          <Stack.Screen name="Lesson 2 Topics" component={Lesson2} />
          <Stack.Screen name="Lesson 2 deep listening" component={DeepListening} />
          <Stack.Screen name="Lesson 2 soft start" component={SoftStart} />
          <Stack.Screen name="Lesson 2 warn signs" component={WarningSigns} />
          <Stack.Screen name="Lesson 2 principles" component={Principles2} />
          <Stack.Screen name="Lesson 2 goals" component={Goals2} />

          <Stack.Screen name="Lesson 3 Topics" component={Lesson3} />
          <Stack.Screen name="Lesson 3 MentalPrep" component={MentalPrep} />
          <Stack.Screen name="Lesson 3 EmotionalPrep" component={EmotionalPrep} />
          <Stack.Screen name="Lesson 3 PhsicalPrep" component={PhysicalPrep} />
          <Stack.Screen name="Lesson 3 SpiritualPrep" component={SpiritualPrep} />
          <Stack.Screen name="Lesson 3 SexualResponseCycle" component={SexualResponseCycle} />
          <Stack.Screen name="Lesson 3 SexualAnatomy" component={SexualAnatomy} />
          <Stack.Screen name="Lesson 3 SexualExpectations" component={SexualExpectation} />
          <Stack.Screen name="Lesson 3 HollandQuote" component={ElderQuote} />
          <Stack.Screen name="Lesson 3 Resources" component={Resources3} />
          <Stack.Screen name="Lesson 3 Goals" component={Goal3} />

          <Stack.Screen name="Lesson 4 Topics" component={Lesson4} />
          <Stack.Screen name="Lesson 4 EqualPartnership" component={EqualPartnership} />
          <Stack.Screen name="Lesson 4 Divorce" component={Divorce} />
          <Stack.Screen name="Lesson 4 Principles" component={Principles4} />
          <Stack.Screen name="Lesson 4 Goals" component={Goals4} />

          <Stack.Screen name="Lesson 5 Topics" component={Lesson5} />
          <Stack.Screen name="Lesson 5 Magic6Hour" component={Magic6Hours} />
          <Stack.Screen name="Lesson 5 MaritalSupport" component={MaritalSupport} />
          <Stack.Screen name="Lesson 5 Serving" component={Serving} />
          <Stack.Screen name="Lesson 5 Therapist" component={Therapist} />
          <Stack.Screen name="Lesson 5 Resources" component={Resources5} />
          <Stack.Screen name="Lesson 5 Principles" component={Principles5} />
          <Stack.Screen name="Lesson 5 Goals" component={Goals5} />
          <Stack.Screen name="Lesson 5 Completion" component={Completion} />


          <Stack.Screen name="About AE Engaged" component={AboutAeEngaged} />
          <Stack.Screen name="About AE Classes" component={Classes} />
          <Stack.Screen name="supplemental lessons" component={SupplementalLessons} />
          <Stack.Screen name="Resources social media" component={SocialMedia} />
          <Stack.Screen name="Resources continue Education" component={ContinueEducation} />
          <Stack.Screen name="Resources Financial" component={Financial} />
          <Stack.Screen name="Resources HowToFight" component={HowToFight} />
          {/* </>
          ) : (
            <> */}

          {/* </>
          )} */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>

  );
}
