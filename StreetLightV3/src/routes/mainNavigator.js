import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMapView from '../pages/mainMapView';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mainMapView" component={MainMapView} />
    </Stack.Navigator>
  );
};
export default MainNavigator;