import { TextInput, View } from "react-native";

const Inputs = function(){
    return  <View>
             <TextInput placeholder='email:'/>
             <TextInput placeholder='senha:' secureTextEntry/>
            </View>

}
export default Inputs;