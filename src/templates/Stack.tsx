import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, About, Contact } from '../screens';
import { StackNavigationOptions } from '@react-navigation/stack';
import {  NavigationContainer } from "@react-navigation/native";
import { defaultHeaderStyle, defaultHeaderTitleStyle } from '../utils/functions';
import { StackProps } from '../utils/constants';

const StackNav = createStackNavigator();

const Stack: React.FC<StackProps> = (props) => {

  const {headerStyle, mode, navigationRef, presentation, header, isNested, items, gestureDirection, gestureEnabled} = props;

  const options: ((props: {navigation: any;}) => StackNavigationOptions) = ({navigation}) => ({
    headerStyle: defaultHeaderStyle(headerStyle),
    headerShown: headerStyle?.showHeader,
    headerTitle: headerStyle?.showText === false ? '' : undefined,
    headerTitleStyle: defaultHeaderTitleStyle(headerStyle),
    headerTitleAlign: headerStyle?.textAlign === 'left' ? 'left' : headerStyle?.textAlign === 'center' ? 'center' : undefined,
    headerTitleContainerStyle: headerStyle?.textAlign === 'right' ? { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' } : undefined,
    headerTintColor: headerStyle?.color,
    header: header,

    headerBackTitle: headerStyle?.backTitle,
    headerBackTitleVisible: headerStyle?.backTitle?.length !== 0 ? true : false,
    headerMode: mode,

    presentation: presentation,
    gestureDirection: gestureDirection,
    gestureEnabled: gestureEnabled,
  })


  return (
      isNested ?  
        <StackNav.Navigator screenOptions={options}>
          {items ? items.map((item, ind) => 
            <StackNav.Screen name={item.name} key={item?.id ? item.id : ind} options={{headerShown: item?.showDefaultHeader}} component={item.screen} />
          ) : <>
            <StackNav.Screen name="Home" component={Home} />
            <StackNav.Screen name="About" component={About} />
            <StackNav.Screen name="Contact" component={Contact} />
          </>}
        </StackNav.Navigator>
        :
      <NavigationContainer ref={navigationRef}>
        <StackNav.Navigator screenOptions={options}>
        {items ? items.map((item, ind) => 
            <StackNav.Screen name={item.name} key={item?.id ? item.id : ind} options={{headerShown: item?.showDefaultHeader}} component={item.screen} />
          ) : <>
            <StackNav.Screen name="Home" component={Home} />
            <StackNav.Screen name="About" component={About} />
            <StackNav.Screen name="Contact" component={Contact} />
          </>}
        </StackNav.Navigator>
      </NavigationContainer>
  )
}

export default Stack