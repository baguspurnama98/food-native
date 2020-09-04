import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SeacrhScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
	{
		Seacrh: SeacrhScreen,
	},
	{
		initialRouteName: "Seacrh",
		defaultNavigationOptions: {
			title: "BusinessSearch",
		},
	}
);
export default createAppContainer(navigator);
