import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainMapView from '../pages/mainMapView';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainMapView" component={MainMapView} />
    </Tab.Navigator>
  );
};
export default MainTabNavigator
