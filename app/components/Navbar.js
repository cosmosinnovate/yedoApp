import { StyleSheet, View, Image, Button } from "react-native";
import AppText from "../components/AppText";
import Home from "./assets/nav-bar/home.png";
import Learn from "./assets/nav-bar/light-bulb.png";
import Create from "./assets/nav-bar/plus.png";
import UserProfile from "./assets/nav-bar/user-circle.png";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={navBarStyle.container}>
        <View style={navBarStyle.imageItem}>
          <Image source={Home} style={{ width: 24, height: 24 }} />
        </View>
        <View style={navBarStyle.imageItem}>
          <Image source={Create} style={{ width: 24, height: 24 }} />
        </View>
        <View style={navBarStyle.imageItem}>
          <Image source={Learn} style={{ width: 24, height: 24 }} />
        </View>
        <View style={navBarStyle.imageItem}>
          <Image source={UserProfile} style={{ width: 24, height: 24 }} />
        </View>
      </View>
    </View>
  );
}

const navBarStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  imageItem: {
    flex: 1,
    flexDirection: "row",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
