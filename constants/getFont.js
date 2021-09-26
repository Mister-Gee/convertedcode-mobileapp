import * as Font from 'expo-font';

const getFont = () => Font.loadAsync({
    'inter-regular': require("../assets/fonts/Inter-Regular.ttf"),
    'inter-medium': require("../assets/fonts/Inter-Medium.ttf"),
    'inter-bold': require("../assets/fonts/Inter-Bold.ttf"),
    'inter-black': require("../assets/fonts/Inter-Black.ttf")
})

export default getFont;