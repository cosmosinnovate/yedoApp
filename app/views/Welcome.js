import { StyleSheet, View, Image, ImageBackground, Text, Linking } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import color from "../components/colors";
// import background from "../assets/background-image.png";
// import { Logo, LogoIcon, YenoLogo } from "../assets/svgIcons/yenoIcon";
import routes from "../navigation/routes";
import logo from '../assets/svgIcons/512x512.png';
import {Link} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Welcome({navigation}) {
   const handlePress = () => {
    const url = 'https://www.privacypolicies.com/live/bd871290-3606-4abb-96da-e5f5f72c742e';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            width: "100%",
            height: 400,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: -20,
          }}
        >
          <View>
            {/* <LogoIcon /> */}
            <Image source={logo} style={{ width: 250, height: 120 }} />
          </View>
        </View>

        <View style={{
          display: "flex",
          justifyContent: 'center',
          alignContent: 'center',
          marginBottom: 60, marginTop: -80
        }}>
          <AppText color={colors.black} weight={"600"}>
            Get more done with Yedo
          </AppText>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            color={color.white}
            background={colors.primary}
            label="Login"
            fontWeight="600"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            color={color.white}
            label="Register"
            fontWeight="600"
            background={colors.secondary}
            onPress={() => navigation.navigate(routes.REGISTER)}
          />

          <View style={[styles.tagLine, { alignItems: "center", gap: 10}]}>
            <AppText color={colors.black} weight={"600"}>
              {/* Get version from package.json */}
              
              {`Version (${require("../package.json").version})`}

            </AppText>
            {/* Make this button open a web link */}
            <TouchableOpacity onPress={handlePress}>
              <AppText color={colors.black} weight={"600"} size={12}>
                Terms of Service | Privacy Policy
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "fit-content",
  },

  content: {
    flex: 1,
    width: `100%`,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    width: `100%`,
    gap:10,
    bottom: 140,
  },

  tagLine: {
    fontWeight: "600",
    alignSelf: "center",
    paddingVertical: 10,
    fontSize: 25,
  },
  container: {
    flex: 1,
    width: `100%`,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
});
