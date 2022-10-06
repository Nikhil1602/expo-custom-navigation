# expo-custom-navigation

Build custom navigation for expo based projects.

Available navigation:

- Drawer
- BottomTabs
- TopTabs
- Stack
- useNavigation() - hook

## Installation

Install the package,

```bash
  npm install expo-custom-navigation
```

## Guide

Import any navigation component to your file. Update your
`babel.config.js` with below code:

```bash
  module.exports = function (api) {
        ...
        return {
            ...
            plugins: ["react-native-reanimated/plugin"],
        };
   };
```

When you import any of above component, use `ctrl + space` to list all the available props.

**Note**: This shortcut works in `vscode editor`.

## Limitations:

- May not support animation effects.
- May gets crashed while nesting the navigation.
- Pass the prop `isNested` which accepts boolean to avoid errors.
- Based on `@react-navigation` package.

## Common Props in every Component:

- `isNested`: boolean
- `navigationRef`: ref of `useNavigation - hook`
- `headerStyle`: style for header
  - `showHeader`: boolean
  - `showText`: boolean
  - `color`: string
  - `textAlign`: `left`, `center`, and `right`
  - `backgroundColor`: string,
  - `height`: number | string,
  - Text related styles i.e., fontSize, fontFamily etc.
- `items`: array of objects containing below data.
  - `name`: string (mandatory)
  - `screen`: JSX Element (mandatory)
  - `icon`: `({focused, color, size}) => <View></View>`
  - `showDefaultHeader`: boolean
  - `counterBadge`: number (works only in `bottom-tabs` or `top-tabs`)
  - `badge`: `(() => <View></View>)` (only for top-tabs)
  - `showLabel`: boolean (only for top-tabs)
  - `showIcon`: boolean (only for top-tabs)

## `Drawer`

### Props:

- `style`: style for Drawer
- `position`: `left` or `right`
- `header`: used to create custom header `header={() => <View></View>}`
- `type`: `back`, `front`, `permanent`, or `slide`
- `itemStyle`: style for tabs/buttons
  - `activeColor`: string,
  - `activeBgColor`: string,
  - `BgColor`: string,
  - `color`: string,
  - View related styles, i.e., width, height, border etc.
- `children`: children for drawer.

## `BottomTabs`

### Props:

- `header`
- `style`
- `itemStyle`
- `labelPosition`: `below-icon`, `beside-icon`
- `showLabel`: boolean
- `labelStyle`: TextStyle
- `iconStyle`: TextStyle
- `badgeStyle`: TextStyle
- `hideOnKeyboard`: boolean

## `TopTabs`

### Props:

- `customTabs`: `(() => <View></View>)`
- `lazy`: boolean
- `swipeEnabled`: boolean,
- `activeColor`: string,
- `inactiveColor`: string,
- `contentStyle`: ViewStyle,
- `itemStyle`: ViewStyle,
- `labelStyle`: ViewStyle,
- `style`: ViewStyle,
- `pressColor`: string,
- `pressOpacity`: number,
- `indicatorStyle`: ViewStyle,
- `iconStyle`: ViewStyle,
- `scrollEnabled`: boolean,
- `bounce`: boolean,
- `position`: `bottom` or `top`,
- `orientation`: `horizontal` or `vertical`,

## `Stack`

### Props:

- `presentation`: `card`, `modal` or `transparentModal`,
- `header`: `((props: StackHeaderProps) => React.ReactNode)`,
- `mode`: `float` or `screen`,
- `gestureDirection`: `horizontal`, `vertical`, `horizontal-inverted` or `vertical-inverted`,
- `gestureEnabled`: boolean

## `useNavigation()`

```bash
    import { Drawer, useNavigation } from 'expo-custom-navigation';
    import { Pressable, Text } from 'react-native';
    import { Home, About, Contact } from './screen';

    const App = () => {

        const { ref, navigate } = useNavigation();

        const items = [
            {
                id: 1,
                name: 'Home',
                screen: Home,
            },
            {
                id: 2,
                name: 'Contact',
                screen: Contact,
            },
            {
                id: 3,
                name: 'About',
                screen: About,
            },
        ];

        return (
            <Drawer items={items} navigationRef={ref} isNested={false}>
                <Pressable onPress={() => navigate('Home')}>
                    <Text>Home</Text>
                </Pressable>
                <Pressable onPress={() => navigate('About')}>
                    <Text>About</Text>
                </Pressable>
                <Pressable onPress={() => navigate('Contact')}>
                    <Text>Contact</Text>
                </Pressable>
            </Drawer>
        )
    }
```

Developers are most welcome to contribute in this project :)

First of all, clone the project to your local machine

```bash
  $ git clone https://github.com/Nikhil1602/expo-custom-navigation.git
```

Run, the below commands:

```bash
   cd expo-custom-navigation
   npm install
   npm start
```

## Author

- [@NikhilBarot](https://www.github.com/Nikhil1602)
