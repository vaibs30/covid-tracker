import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Flag from 'react-native-flags';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Nation',
          tabBarIcon: ({ focused }) => 
            <Flag
              code="IN"
              size={32}
            />
        }}
      />
      <BottomTab.Screen
        name="State"
        component={LinksScreen}
        options={{
          title: 'State',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="location-on" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Nation-wise Tracker';
    case 'State':
      return 'State-wise Tracker';
  }
}
