import { Image, Text, StyleSheet} from "react-native";
import GradientText from './GradientText';


const Logo = function () {
  return (
    <>
      <Image source={require("../assets/images/logoPetsMobile.png")}></Image>
    </>
  );
};

export default Logo;
