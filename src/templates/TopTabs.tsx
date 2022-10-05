import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { TopTabsProps } from '../utils/constants';
import { NavigationContainer } from "@react-navigation/native";
import { Home, About, Contact } from '../screens';
import React from 'react';

const TopTabsNav = createMaterialTopTabNavigator();


const TopTabs: React.FC<TopTabsProps> = (props: TopTabsProps) => {
    const {isNested, items, lazy, swipeEnabled, activeColor,
    inactiveColor, contentStyle, itemStyle, labelStyle, style,
    pressColor, pressOpacity, indicatorStyle, scrollEnabled, 
    bounce, iconStyle, customTabs, position, orientation} = props;


    const options: ((props: { navigation: any; }) => MaterialTopTabNavigationOptions) 
    = ({navigation}) => ({
        lazy: lazy,
        swipeEnabled: swipeEnabled,
        tabBarActiveTintColor: activeColor,
        tabBarBounces: bounce,
        tabBarContentContainerStyle: contentStyle,
        tabBarInactiveTintColor: inactiveColor,
        tabBarIndicatorStyle: indicatorStyle,
        tabBarItemStyle: itemStyle,
        tabBarLabelStyle: labelStyle,
        tabBarStyle: style,
        tabBarPressColor: pressColor,
        tabBarPressOpacity: pressOpacity,
        tabBarScrollEnabled: scrollEnabled,
    })

  return (
    isNested ? 
    <TopTabsNav.Navigator screenOptions={options} tabBar={customTabs} tabBarPosition={position} orientation={orientation}>
        {items ? items.map((item: any, ind: number) => 
        <TopTabsNav.Screen key={item?.id ? item.id : ind} name={item.name} options={{tabBarBadge: item?.badge, tabBarIcon: item?.icon, tabBarShowIcon: item?.showIcon, tabBarShowLabel: item?.showLabel, tabBarIconStyle: iconStyle}} component={item.screen} />
        ) : 
            <>
                <TopTabsNav.Screen name='Home' component={Home} />
                <TopTabsNav.Screen name='About' component={About} />
                <TopTabsNav.Screen name='Contact' component={Contact} />
            </>
        }
    </TopTabsNav.Navigator> :
    <NavigationContainer>
        <TopTabsNav.Navigator screenOptions={options} tabBar={customTabs} tabBarPosition={position} orientation={orientation}>
        {items ? items.map((item, ind) => 
        <TopTabsNav.Screen key={item?.id ? item.id : ind} name={item.name} options={{tabBarBadge: item?.badge, tabBarIcon: item?.icon, tabBarShowIcon: item?.showIcon, tabBarShowLabel: item?.showLabel, tabBarIconStyle: iconStyle}} component={item.screen} />
        ) : 
            <>
                <TopTabsNav.Screen name='Home' component={Home} />
                <TopTabsNav.Screen name='About' component={About} />
                <TopTabsNav.Screen name='Contact' component={Contact} />
            </>
        }
        </TopTabsNav.Navigator>
    </NavigationContainer>
  )
}

export default TopTabs;