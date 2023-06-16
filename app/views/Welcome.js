import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import color from "../components/colors";
import background from "../assets/background-image.png";
import { Logo } from "../assets/svgIcons/cliqueIcon";
import routes from "../navigation/routes";

export default function Welcome({ navigation }) {
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
          <ImageBackground
            resizeMode="cover"
            source={background}
            style={styles.image}
          >
            <View>
              <Logo />
            </View>
          </ImageBackground>
        </View>

        <View style={{ display: "flex", marginBottom: 60, marginTop: -80 }}>
          <AppText color={colors.black} weight={"600"}>
            Home to do app that really works for you
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
            label="Sign Up"
            fontWeight="600"
            background={colors.secondary}
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          />

          <View style={[styles.tagLine, { alignItems: "center" }]}>
            <AppText color={colors.black} weight={"600"}>
              V1.0
            </AppText>
            <AppText color={colors.black} weight={"600"} size="12">
              Privacy Policy
            </AppText>
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
    width: "100%",
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
    backgroundColor: "#99D9DD",
    alignItems: "center",
  },
});
