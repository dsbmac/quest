import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});


// import React from 'react';
// import TabNavigator from './main_navigation';
// import { Container } from 'native-base';
// import { Font, AppLoading } from "expo"; // requirement for using native-base in expo

// export default class Navigation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       fontLoading: true, // to load font in expo      
//     };
//   }  
      
//   // required to load native-base font in expo
//   async componentWillMount() {
//     await Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
//     });   
//     this.setState({ fontLoading: false });
//   }

//   render() {
//     if (this.state.fontLoading) {
//         return (            
//           <AppLoading />        
//         );
//       }else{
//         return (
//            <TabNavigator />
//         );
//       }
//   }
// }