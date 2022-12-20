import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../components/colors";
import color from "../components/colors";
import Logo from "../assets/clique-logo.png";
import background from "../assets/background-image.png";

export default function WelcomeView() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View
                    style={{
                        width: "100%",
                        height: 400,
                        flexDirection: "column",
                        justifyContent: "center",
                        borderBottomEndRadius: 100,
                        borderBottomLeftRadius: 100,
                        alignItems: "center",
                    }}>
                    <ImageBackground
                        resizeMode="cover"
                        source={background}
                        style={styles.image}>
                        <View>
                            <Image source={Logo} style={{ width: 200, height: 65 }} />
                            <Text style={styles.tagLine}>Agile family</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View>
                    <AppText color={colors.black}>
                        Make family dynamics frictionless
                    </AppText>
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton
                        color={color.white}
                        title="Access with Phone"
                        onPress={() => {
                            console.log("clicked");
                        }}
                    />
                    <AppButton
                        color={color.white}
                        title="Access with Email"
                        onPress={() => {
                            console.log("clicked");
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },

    content: {
        flex: 1,
        width: `100%`,
        flexDirection: "column",
        justifyContent: "space-between",
        bottom: 10,
    },

    buttonContainer: {
        flexDirection: "column",
        padding: 10,
        alignItems: "center",
        width: `100%`,
        bottom: 100
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
        justifyContent: "space-between",
        alignItems: "center",
    },
});
