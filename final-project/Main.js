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
      name: "Bowlmor Lanes",
      rating: "4.7",
      discount: "$34",
      original: "$103.52",
      description: "Two Hours of Bowling and Shoe Rental for Two Guests",
      currentnum: "6",
      total: "10",
      imageUrl: Images.bowlmor,
      website: "https://www.bowlmor.com/",
      buy: "https://www.groupon.com/deals/bowlmor-lanes-nat-bowlero-corp-spring-2022-b?deal_option=16e604aa-ae44-440e-b274-4c29b72e0dd1",
      address: "10123 N Wolfe Rd #20, Cupertino, CA 95014",
    },
    {
      id: "2",
      name: "Computer History Museum",
      rating: "4.8",
      discount: "$17",
      original: "$35",
      description: "Computer History Museum for Two",
      currentnum: "17",
      total: "20",
      imageUrl: Images.museum,
      website: "https://computerhistory.org/",
      buy: "https://www.groupon.com/deals/computer-history-museum-5?deal_option=0e1eed9c-889a-472a-b1a4-49117fd47a2d",
      address: "1401 N Shoreline Blvd, Mountain View, CA 94043",
    },
    {
      id: "3",
      name: "PanIQ Room - San Jose",
      rating: "4.7",
      discount: "$75",
      original: "$156",
      description:
        "Wild West Escape-Room Expereince for Four; Valid Monday - Friday",
      currentnum: "4",
      total: "20",
      imageUrl: Images.escape,
      website: "https://paniqescaperoom.com/",
      buy: "https://www.groupon.com/deals/paniq-room-san-jose-1?deal_option=5b2e889c-bc15-4072-bfc2-7ff25fb067a2",
      address: "2270 Quimby Rd, San Jose, CA 95122",
    },
  ];

  const renderItem = (item) => (
    <Activity
      name={item.name}
      rating={item.rating}
      discount={item.discount}
      original={item.original}
      description={item.description}
      currentnum={item.currentnum}
      total={item.total}
      url={item.imageUrl}
      website={item.website}
      address={item.address}
      buy={item.buy}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: Colors.red, fontSize: 20 }}>
          Recommended for You
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
  },

  header: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});
