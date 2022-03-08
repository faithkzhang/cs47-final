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
import Order from "./Order";

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
  const DATA = [
    {
      id: "1",
      name: "Computer History Museum",
      currentnum: "9",
      total: "10",
      status: "Processing",
    },
    {
      id: "2",
      name: "PanIQ Room - San Jose",
      currentnum: "10",
      total: "10",
      status: "Completed",
    },
  ];

  const renderItem = (item) => (
    <Order
      name={item.name}
      currentnum={item.currentnum}
      total={item.total}
      status={item.status}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "bold",
            color: Colors.red,
            fontSize: 18,
            textDecorationLine: "underline",
            paddingHorizontal: 10,
          }}
        >
          All
        </Text>
        <Text
          style={{
            fontWeight: "500",
            color: Colors.gray,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
        >
          Processing
        </Text>
        <Text
          style={{
            fontWeight: "500",
            color: Colors.gray,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
        >
          Completed
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
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
    maxWidth: "100%",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 15,
  },
});
