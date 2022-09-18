import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { NavigationContainerRef } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

enum textAlign {left = 'left', center = 'center'};
enum fontStyle {normal = "normal" , italic = "italic"};
enum fontWeight {normal = "normal", bold = "bold"};
enum textTransform {none = "none"};
enum textDecorationLine {none = "none"};
enum textDecorationStyle {solid = "solid"};

type CommonProps = {
    isNested?: boolean,
    navigationRef?: React.Ref<NavigationContainerRef<ReactNavigation.RootParamList>>,
    items: {
        id?: number,
        name: string,
        screen: (props: {navigation: any}) => JSX.Element, 
        icon?: ((props: {
            focused: boolean;
            color: string;
            size: number;
        }) => React.ReactNode),
        showDefaultHeader?: boolean,
        counterBadge?: string | number,
      }[],
      headerStyle?: {
        showHeader?: boolean;
        showText?: boolean;
        color?: string;
        textAlign?: 'left' | 'center' | 'right';
    
        backgroundColor?: string;
        height?: string | number;
        
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: "normal" | "italic";
        fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
        textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
        textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
        textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
        textDecorationColor?: string;
        letterSpacing?: number;
        
        shadowColor?: string,
        shadowOffset?: {width: number, height: number},
        shadowOpacity?: number,
        shadowRadius?: number,
        elevation?: number,

        backTitle?: string,
      };
}

export type itemProps = {
    width?: number | string,
    margin?: number | string,
    marginStart?: number | string,
    marginEnd?: number | string,
    marginTop?: number | string,
    marginBottom?: number | string,
    marginLeft?: number | string,
    marginRight?: number | string,
    marginVertical?: number | string,
    marginHorizontal?: number | string,
    minWidth?: number | string,
    maxWidth?: number | string,
    minHeight?: number | string,
    maxHeight?: number | string,
            
    padding?: number | string,
    paddingStart?: number | string,
    paddingEnd?: number | string,
    paddingTop?: number | string,
    paddingBottom?: number | string,
    paddingLeft?: number | string,
    paddingRight?: number | string,
    paddingVertical?: number | string,
    paddingHorizontal?: number | string,

    borderWidth?: number,
    borderTopWidth?: number,
    borderBottomWidth?: number,
    borderStartWidth?: number | string,
    borderEndWidth?: number | string,
    borderLeftWidth?: number,
    borderRightWidth?: number,

    borderColor?: string,
    borderTopColor?: string,
    borderBottomColor?: string,
    borderStartColor?: string,
    borderEndColor?: string,
    borderLeftColor?: string,
    borderRightColor?: string,

    borderRadius?: number,
    borderTopLeftRadius?: number,
    borderTopRightRadius?: number,
    borderTopStartRadius?: number,
    borderTopEndRadius?: number,
    borderBottomLeftRadius?: number,
    borderBottomRightRadius?: number,
    borderBottomStartRadius?: number,
    borderBottomEndRadius?: number,

    activeColor?: string,
    activeBgColor?: string,
    BgColor?: string,
    color?: string,
}

export type DrawerProps = {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    type?: 'back' | 'front' | 'permanent' | 'slide';
    position?: 'left' | 'right';
    header?: ((props: DrawerHeaderProps) => React.ReactNode);
    itemStyle?: itemProps,
} & CommonProps;
 
export type StackProps = {
    presentation?: "card" | "modal" | "transparentModal",
    header?: ((props: StackHeaderProps) => React.ReactNode),
    mode?: 'float' | 'screen',
    gestureDirection?: 'horizontal' | 'vertical' | 'horizontal-inverted' | 'vertical-inverted',
    gestureEnabled?: boolean
} & CommonProps;

export type BottomTabsProps = {
    header?: ((props: BottomTabHeaderProps) => React.ReactNode),
    style?: StyleProp<ViewStyle>,
    itemStyle?: itemProps,
    labelPosition?: 'below-icon' | 'beside-icon',
    showLabel?: boolean,
    labelStyle?: StyleProp<TextStyle>,
    iconStyle?: StyleProp<TextStyle>,
    badgeStyle?: StyleProp<TextStyle>,
    hideOnKeyboard?: boolean,
} & CommonProps;

export type TopTabsProps = {
    isNested?: boolean,
    navigationRef?: React.Ref<NavigationContainerRef<ReactNavigation.RootParamList>>,
    items: {
        id?: number,
        name: string,
        screen: (props: {navigation: any}) => JSX.Element, 
        icon?: ((props: {
            focused: boolean;
            color: string;
        }) => React.ReactNode),
        badge?: (() => React.ReactNode),
        showLabel?: boolean,
        showIcon?: boolean,
    }[],
    customTabs?: ((props: MaterialTopTabBarProps) => React.ReactNode),
    lazy?: boolean,
    swipeEnabled?: boolean,
    activeColor?: string,
    inactiveColor?: string,
    contentStyle?: StyleProp<ViewStyle>,
    itemStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    style?: StyleProp<ViewStyle>,
    pressColor?: string,
    pressOpacity?: number,
    indicatorStyle?: StyleProp<ViewStyle>,
    iconStyle?: StyleProp<ViewStyle>,
    scrollEnabled?: boolean,
    bounce?: boolean,
    position?: 'bottom' | 'top',
    orientation?: 'horizontal' | 'vertical',
};
  
export const defaultHeaderProps = {
    showHeader: true,
    showText: true,
    color: '#000',
    backgroundColor: 'lightgrey',
    height: 95,
    textAlign: textAlign.left,
    fontFamily: '',
    fontSize: 20,
    fontStyle: fontStyle.normal,
    fontWeight: fontWeight.normal,
    letterSpacing: 0,
    textTransform: textTransform.none,
    textDecorationColor: '',
    textDecorationLine: textDecorationLine.none,
    textDecorationStyle: textDecorationStyle.solid,
    shadowColor: '',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
}


  

