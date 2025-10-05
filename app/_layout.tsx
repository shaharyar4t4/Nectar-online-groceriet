import AllScreen from '@/navigation/stack/Allscreen';
import { darkTheme, lightTheme } from '@/theme/theme';
import { useFonts } from 'expo-font';
import { Text } from "react-native";
import { PaperProvider } from 'react-native-paper';


export default function RootLayout() {
 
  const isDarktheme = true;
  // hook for font family 
  const [fontLoaded] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf")
  })
  if (!fontLoaded) {
    return <Text></Text>
    // this loaded is help if some case the font is not loaded so we show the Empty screen
  }

  return (
    <PaperProvider theme={isDarktheme ? darkTheme : lightTheme}>
      <AllScreen/>
    </PaperProvider>
    
  );
}


