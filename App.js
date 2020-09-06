import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SeacrhScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";
const navigator = createStackNavigator(
	{
		Seacrh: SeacrhScreen,
		ResultShow: ResultShowScreen,
	},
	{
		initialRouteName: "Seacrh",
		defaultNavigationOptions: {
			title: "BusinessSearch",
		},
	}
);
export default createAppContainer(navigator);
