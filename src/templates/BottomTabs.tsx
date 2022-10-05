import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Home, About, Contact } from '../screens';
import { BottomTabsProps } from '../utils/constants';
import { defaultHeaderStyle, defaultHeaderTitleStyle, defaultItemStyle } from '../utils/functions';
import React from 'react';

const BottomTabNav = createBottomTabNavigator();

const BottomTabs: React.FC<BottomTabsProps> = (props: BottomTabsProps) => {

    const {isNested, navigationRef, items, header, headerStyle, 
        style, itemStyle, labelPosition, showLabel, labelStyle, 
        iconStyle, badgeStyle, hideOnKeyboard} = props;

    const options: ((props: { navigation: any; }) => BottomTabNavigationOptions) = ({navigation}) => ({
        header: header,
        headerStyle: defaultHeaderStyle(headerStyle),
        headerTitleStyle: defaultHeaderTitleStyle(headerStyle),
        headerShown: headerStyle?.showHeader,
        headerTintColor: headerStyle?.color, 
        headerTitleAlign: headerStyle?.textAlign === 'left' ? 'left' : headerStyle?.textAlign === 'center' ? 'center' : undefined,
        headerTitle: headerStyle?.showText === false ? '' : undefined,
        headerTitleContainerStyle: headerStyle?.textAlign === 'right' ? { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' } : undefined,

        tabBarStyle: style,
        tabBarItemStyle: defaultItemStyle(itemStyle),
        tabBarActiveBackgroundColor: itemStyle?.activeBgColor,
        tabBarActiveTintColor: itemStyle?.activeColor,
        tabBarInactiveBackgroundColor: itemStyle?.BgColor,
        tabBarInactiveTintColor: itemStyle?.color,
        tabBarLabelPosition: labelPosition,
        tabBarShowLabel: showLabel,
        tabBarLabelStyle: labelStyle,
        tabBarIconStyle: iconStyle,
        tabBarBadgeStyle: badgeStyle,
        tabBarHideOnKeyboard: hideOnKeyboard,
        
        
    });  

    return (
        isNested ? 
        <BottomTabNav.Navigator screenOptions={options}>
            {items ? 
            items.map((item, ind) => 
                <BottomTabNav.Screen key={item?.id ? item.id : ind} name={item.name} options={{headerShown: item?.showDefaultHeader, tabBarIcon: item?.icon, tabBarBadge: item?.counterBadge, tabBarBadgeStyle: badgeStyle}} component={item.screen} />
            ) :
            <>
                <BottomTabNav.Screen name='Home' component={Home}/>
                <BottomTabNav.Screen name='About' component={About}/>
                <BottomTabNav.Screen name='Contact' component={Contact}/>
            </>    
        }
        </BottomTabNav.Navigator> : 
        <NavigationContainer ref={navigationRef}>
            <BottomTabNav.Navigator screenOptions={options}>
            {items ? 
            items.map((item, ind) => 
                <BottomTabNav.Screen key={item?.id ? item.id : ind} name={item.name} options={{headerShown: item?.showDefaultHeader, tabBarIcon: item?.icon, tabBarBadge: item?.counterBadge, tabBarBadgeStyle: badgeStyle}} component={item.screen} />
            ) :
            <>
                <BottomTabNav.Screen name='Home' component={Home}/>
                <BottomTabNav.Screen name='About' component={About}/>
                <BottomTabNav.Screen name='Contact' component={Contact}/>
            </>    
        }
            </BottomTabNav.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabs;