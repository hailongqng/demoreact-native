import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Drawer = createDrawerNavigator();

function Menu1() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
                name='Screen1'
                component={Screen1}
            />
      <Drawer.Screen
                name='Screen2'
                component={Screen2}
            />
      <Drawer.Screen
                name='Screen3'
                component={Screen3}
            />
    </Drawer.Navigator>
  );
}
export default Menu1;