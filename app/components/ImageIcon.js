import { Image, StyleSheet } from "react-native"

export default function ImageIcon({ source, width=24, height=24, ...other }) {
    return (
        <Image source={source} style={{
            width: width,
            height: height}} {...other}/>
    )
}