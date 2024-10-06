import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Image, View } from "react-native";

const InstaHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
      }}
    >
      <Image
        source={{
          uri: "https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png",
        }}
        style={{
          width: 130,
          height: 40,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome5 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  );
};
export default InstaHeader;
