import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './landing/landing';
import Home from './home/home';

const stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator >
        <stack.Screen  name='Landing' component={Landing} />
        <stack.Screen  name='Home' component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
