import { DrawerNavigator , TabNavigator , createBottomTabNavigator } from 'react-navigation';
// import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import AlbumList from './AlbumList';
import Profile from './Profile';
import AddNewList from './AddNewList';

export default TabNavigator(
    {
        EmployeeList: {
            screen: AlbumList
        },
        AddNewEmployee: {
            screen: AddNewList
        },
       Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'EmployeeList',
        headerMode: 'none'
    }
);

// export default TabNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     Settings: SettingsScreen,
//   });
