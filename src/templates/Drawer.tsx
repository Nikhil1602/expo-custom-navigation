import React from 'react';
import { View, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Home, About, Contact } from '../screens';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerProps, defaultHeaderProps } from '../utils/constants';
import { defaultHeaderStyle, defaultHeaderTitleStyle, defaultItemStyle } from '../utils/functions';

const DrawerNav = createDrawerNavigator();

const CustomDrawer = (prop: any) => {

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...prop}>
                {prop?.children}
            </DrawerContentScrollView>
        </View>
    )
}

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  
  const {navigationRef, children, style, items, isNested, headerStyle = defaultHeaderProps, type = 'front', position = 'left', header, itemStyle} = props;
  const showLHeader: boolean = position === 'left' ? true : false;

  
  const options: ((props: {navigation: any;}) => DrawerNavigationOptions) = ({navigation}) => ({
    headerStyle: defaultHeaderStyle(headerStyle),
    headerShown: headerStyle.showHeader,
    headerTintColor: headerStyle.color, 
    headerTitleAlign: headerStyle.textAlign === 'left' ? 'left' : headerStyle.textAlign === 'center' ? 'center' : undefined,
    headerTitle: headerStyle.showText === false ? '' : undefined,
    headerTitleStyle: defaultHeaderTitleStyle(headerStyle),
    headerTitleContainerStyle: headerStyle.textAlign === 'right' ? { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' } : undefined,
    headerRight: () => showLHeader ? undefined : <Pressable style={{ marginRight: 15 }} onPress={() => navigation.openDrawer()}><MaterialIcons name="menu" size={24} color={headerStyle.color} /></Pressable>,
    headerLeft: () => showLHeader ? <Pressable style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}><MaterialIcons name="menu" size={24} color={headerStyle.color} /></Pressable> : undefined,
    header: header,

    drawerType: type,
    drawerPosition: position,
    drawerStyle: style,
    drawerInactiveBackgroundColor: itemStyle?.BgColor,
    drawerInactiveTintColor: itemStyle?.color,
    drawerActiveBackgroundColor: itemStyle?.activeBgColor,
    drawerActiveTintColor: itemStyle?.activeColor,
    drawerItemStyle: defaultItemStyle(itemStyle)
  });
   
  
  return (
    isNested ? 
    <>
    {children && items ? 
      <DrawerNav.Navigator initialRouteName={items[0].name} screenOptions={options} drawerContent={(prop) => <CustomDrawer {...prop} children={children} items={items} />}>
        {items.map((item, index) => 
          <DrawerNav.Screen name={item.name} options={{headerShown: item?.showDefaultHeader}} component={item.screen} key={item?.id ? item.id : index} />
        )}
      </DrawerNav.Navigator> : 
      <DrawerNav.Navigator initialRouteName={items[0].name} screenOptions={options}>
        {items ? 
          items.map((item, index) => (
            <DrawerNav.Screen key={item?.id ? item.id : index} options={{headerShown: item?.showDefaultHeader}} name={item.name} component={item.screen} />
          ))
        :
        <>
          <DrawerNav.Screen name="Home" component={Home} />
          <DrawerNav.Screen name="About" component={About} />
          <DrawerNav.Screen name="Contact" component={Contact} />
        </>}
      </DrawerNav.Navigator>
      }
    </>
    : <NavigationContainer ref={navigationRef}>
      {children && items ? 
      <DrawerNav.Navigator initialRouteName={items[0].name} screenOptions={options} drawerContent={(prop) => <CustomDrawer {...prop} children={children} items={items} />}>
        {items.map((item, index) => 
          <DrawerNav.Screen name={item.name} options={{headerShown: item?.showDefaultHeader}} component={item.screen} key={item?.id ? item.id : index} />
        )}
      </DrawerNav.Navigator> : 
      <DrawerNav.Navigator initialRouteName={items[0].name} screenOptions={options}>
        {items ? 
          items.map((item, index) => (
            <DrawerNav.Screen key={item?.id ? item.id : index} options={{headerShown: item?.showDefaultHeader}} name={item.name} component={item.screen} />
          ))
        :
        <>
          <DrawerNav.Screen name="Home" component={Home} />
          <DrawerNav.Screen name="About" component={About} />
          <DrawerNav.Screen name="Contact" component={Contact} />
        </>}
      </DrawerNav.Navigator>
      }
    </NavigationContainer>
  )
}

export default Drawer;