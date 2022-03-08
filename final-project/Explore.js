import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import millisToMinutesAndSeconds from "./utils/millisToMinuteSeconds";
import Colors from "./Themes/colors";
import Images from "./Themes/images";
import Activity from "./Activity";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// Endpoints for authorizing with Spotify
// const discovery = {
//   authorizationEndpoint: "https://accounts.spotify.com/authorize",
//   tokenEndpoint: "https://accounts.spotify.com/api/token",
// };

export default function Main({ navigation }) {
  //   const [token, setToken] = useState("");
  //   const [tracks, setTracks] = useState([]);
  //   const [request, response, promptAsync] = useAuthRequest(
  //     {
  //       responseType: ResponseType.Token,
  //       clientId: CLIENT_ID,
  //       scopes: SCOPES,
  //       // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
  //       // this must be set to false
  //       usePKCE: false,
  //       redirectUri: REDIRECT_URI,
  //     },
  //     discovery
  //   );

  //   useEffect(() => {
  //     if (response?.type === "success") {
  //       const { access_token } = response.params;
  //       setToken(access_token);
  //     }
  //   }, [response]);

  //   useEffect(() => {
  //     if (token) {
  //       // TODO: Select which option you want: Top Tracks or Album Tracks

  //       // Comment out the one you are not using
  //       // myTopTracks(setTracks, token);
  //       albumTracks(ALBUM_ID, setTracks, token);
  //     }
  //   }, [token]);

  //   function SpotifyAuthButton() {
  //     return (
  //       <Pressable onPress={promptAsync} style={styles.button}>
  //         <View style={styles.buttonContent}>
  //           <Image
  //             style={{ height: "100%", width: "8%", resizeMode: "contain" }}
  //             source={Images.spotify}
  //           />
  //           <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
  //             CONNECT WITH SPOTIFY
  //           </Text>
  //         </View>
  //       </Pressable>
  //     );
  //   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: Colors.red, fontSize: 20 }}>
          Categories
        </Text>
      </View>
      <View style={styles.categories}>
        <View style={styles.square}>
          <Ionicons name="fast-food" size={40} />
          <Text style={styles.text}>Food + Drink</Text>
        </View>
        <View style={styles.square}>
          <Ionicons name="game-controller" size={40} />
          <Text style={styles.text}>Fun + Leisure</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome name="paint-brush" size={40} />
          <Text style={styles.text}>Art + Culture</Text>
        </View>
        <View style={styles.square}>
          <MaterialIcons name="sports-basketball" size={40} />
          <Text style={styles.text}>Sports + Outdoors</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome name="ticket" size={40} />
          <Text style={styles.text}>Tickets + Events</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome name="binoculars" size={40} />
          <Text style={styles.text}>Sightseeing + Tours</Text>
        </View>
        <View style={styles.square}>
          <MaterialIcons name="nightlife" size={40} />
          <Text style={styles.text}>Nightlife</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome5 name="spa" size={40} />
          <Text style={styles.text}>Beauty + Spa</Text>
        </View>
      </View>
    </View>
  );
}

// let contentDisplayed = null;

// if (token) {
//   contentDisplayed = <SongList />;
// } else {
//   contentDisplayed = <SpotifyAuthButton />;
// }

//   return (
//     <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#FCF1F0",
    borderRadius: 5,
    width: "43%",
    height: 140,
    margin: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.red,
    fontWeight: "bold",
    marginTop: "10%",
    fontSize: 16,
    textAlign: "center",
  },
});
