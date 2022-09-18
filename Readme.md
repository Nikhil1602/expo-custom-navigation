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
