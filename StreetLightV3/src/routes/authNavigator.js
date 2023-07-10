import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/loginPage';
import RegistrationPage from '../pages/registrationPage';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="loginVeiw" component={LoginPage} />
      <Stack.Screen name="registrationView" component={RegistrationPage}/>
    </Stack.Navigator>
  );
};
export default AuthNavigator;