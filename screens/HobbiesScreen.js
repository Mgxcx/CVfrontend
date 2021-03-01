import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import RNMasonryScroll from "react-native-masonry-scrollview";
import Image2 from "react-native-scalable-image";
import { useResponsiveWidth } from "react-native-responsive-dimensions";
import MapView, { Marker } from "react-native-maps";

const { createAnimatableComponent } = Animatable;

const AnimatableView = createAnimatableComponent(View);

const images = [
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272885/DSC_0276_qwnf6v.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272888/DSC_0512_zjvdiu.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272885/DSC_0685_selab8.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272887/DSC_0097_jjinmi.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272884/IMG_1339_kf1vv1.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272884/DSC_0081_hk8xyx.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272885/DSC_0827_ujntly.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614275877/DSC_0436_r6chdx.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272884/IMG_5231_wdfaoq.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272883/DSC_0786_ehmgtd.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272886/IMG_5561_scu3ns.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272883/DSC_0819_j5yqko.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272883/DSC_0107_sngzwi.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272883/DSC_0093_cychab.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272883/DSC_0176_fqibas.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272887/DSC_0768_cpkwr6.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614272883/DSC_0656_hisdbq.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614275874/DSC_0917_lhkjex.jpg",
  "https://res.cloudinary.com/drchl4shw/image/upload/v1614275876/DSC_0632_nggxct.jpg",
];

const HobbiesScreen = () => {
  const imageWidth = useResponsiveWidth(50) - 30;
  const [isHorizontal, setIsHorizontal] = useState(false);

  const imageProp = isHorizontal ? { height: imageWidth } : { width: imageWidth };

  //état et fonction gérant l'overlay de mes chats / lecture et écriture
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
  //état et fonction gérant l'overlay de mes péchés mignons en cuisine
  const [overlayVisible2, setOverlayVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setOverlayVisible2(!overlayVisible2);
  };
  //état et fonction gérant l'overlay de mes voyages préférés
  const [overlayVisible3, setOverlayVisible3] = useState(false);
  const toggleOverlay3 = () => {
    setOverlayVisible3(!overlayVisible3);
  };
  //état et fonction gérant l'overlay de mes photos en tant qu'"Amatrice"
  const [overlayVisible4, setOverlayVisible4] = useState(false);
  const toggleOverlay4 = () => {
    setOverlayVisible4(!overlayVisible4);
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={toggleOverlay}>
          <View style={styles.firstgif}>
            <Image source={require("../assets/cat.gif")} style={styles.gif} />
          </View>
        </TouchableOpacity>

        <View style={styles.secondgif}>
          <TouchableOpacity onPress={toggleOverlay2}>
            <Image source={require("../assets/travel.gif")} style={styles.gif2} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.thirdgif}>
        <TouchableOpacity onPress={toggleOverlay3}>
          <Image source={require("../assets/cook.gif")} style={styles.gif3} />
        </TouchableOpacity>
      </View>
      <View style={styles.fourthgif}>
        <TouchableOpacity onPress={toggleOverlay4}>
          <Image source={require("../assets/photo.gif")} style={styles.gif4} />
        </TouchableOpacity>
      </View>
      <Overlay isVisible={overlayVisible} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay}>
        <ScrollView>
          <View style={styles.cookcontainer}>
            <Text style={styles.textcat}>
              En pleine lecture de "Sa Majesté des Chats" de Werber, accompagnée de mes boules de poils :
            </Text>
            <Image source={require("../assets/lyla.jpeg")} style={styles.catimage} />
            <Image source={require("../assets/ruby.png")} style={styles.catimage} />
            <Image source={require("../assets/lylaragnar.png")} style={styles.catimage} />
            <Image source={require("../assets/lylarubyragnar.png")} style={styles.catimage} />
          </View>
        </ScrollView>
      </Overlay>
      <Overlay isVisible={overlayVisible2} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay2}>
        <ScrollView>
          <MapView style={styles.map}>
            <Marker coordinate={{ latitude: 59.3251172, longitude: 18.0710935 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 45.4371908, longitude: 12.3345898 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 43.7698712, longitude: 11.2555757 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 41.8933203, longitude: 12.4829321 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 55.9533456, longitude: -3.1883749 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 56.9493977, longitude: 24.1051846 }} image={require("../assets/pin.png")} />
            <Marker
              coordinate={{ latitude: 16.2408636, longitude: -61.5334077 }}
              image={require("../assets/pin.png")}
            />
            <Marker coordinate={{ latitude: 55.8609825, longitude: -4.2488787 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 31.6258257, longitude: -7.9891608 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 36.760462, longitude: 10.193117 }} image={require("../assets/pin.png")} />
            <Marker
              coordinate={{ latitude: 36.1672559, longitude: -115.1485163 }}
              image={require("../assets/pin.png")}
            />
            <Marker
              coordinate={{ latitude: 45.4972159, longitude: -73.6103642 }}
              image={require("../assets/pin.png")}
            />
            <Marker
              coordinate={{ latitude: 46.8259601, longitude: -71.2352226 }}
              image={require("../assets/pin.png")}
            />
            <Marker coordinate={{ latitude: 42.4084817, longitude: 8.647919 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 50.8465573, longitude: 4.351697 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 50.938361, longitude: 6.959974 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 50.1106444, longitude: 8.6820917 }} image={require("../assets/pin.png")} />
            <Marker coordinate={{ latitude: 49.6112768, longitude: 6.129799 }} image={require("../assets/pin.png")} />
          </MapView>
        </ScrollView>
      </Overlay>
      <Overlay isVisible={overlayVisible3} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay3}>
        <View style={styles.cookcontainer}>
          <Text style={styles.textcook}>Les pêchés mignons que j'aime cuisiner :</Text>
          <Image source={require("../assets/tartiflette.png")} style={styles.cookimage} resizeMode="stretch" />
          <Image source={require("../assets/wokcrevettesriz.jpg")} style={styles.cookimage} />
          <Image source={require("../assets/tajinedepoulet.jpg")} style={styles.cookimage} />
          <Image source={require("../assets/makrout.jpg")} style={styles.cookimage} resizeMode="stretch" />
          <Image source={require("../assets/tartefraises.jpg")} style={styles.cookimage} resizeMode="stretch" />
          <Image source={require("../assets/oeufmolletfrit.jpeg")} style={styles.cookimage} />
        </View>
      </Overlay>
      <Overlay isVisible={overlayVisible4} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay4}>
        <RNMasonryScroll
          removeClippedSubviews={true}
          columns={isHorizontal ? 3 : 2}
          evenColumnStyle={styles.evenColumnStyle}
          oddColumnStyle={isHorizontal ? styles.oddColumnStyleHorizontal : styles.oddColumnStyleVertical}
          horizontal={isHorizontal}
        >
          {images.map((image, imageIndex) => {
            return (
              <AnimatableView
                animation={isHorizontal ? "fadeInRight" : "fadeInUp"}
                delay={100 * imageIndex}
                style={styles.imageContainer}
                key={imageIndex}
              >
                <Image2 source={{ uri: image }} {...imageProp} key={imageIndex} />
              </AnimatableView>
            );
          })}
        </RNMasonryScroll>
      </Overlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fcf6",
    alignItems: "center",
    justifyContent: "center",
  },
  firstgif: {
    marginTop: 20,
    borderColor: "#3c6f75",
    borderWidth: 1,
    borderRadius: 20,
  },
  secondgif: {
    marginLeft: 30,
    marginTop: 120,
    borderColor: "#3c6f75",
    borderWidth: 1,
    borderRadius: 100,
  },
  thirdgif: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: 40,
    borderColor: "#3c6f75",
    borderWidth: 1,
    borderRadius: 100,
  },
  fourthgif: {
    alignSelf: "flex-end",
    marginRight: 40,
    borderColor: "#3c6f75",
    borderWidth: 1,
    borderRadius: 20,
  },
  cookcontainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textcook: {
    color: "#4f8868",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 20,
  },
  textcat: {
    textAlign: "center",
    color: "#3c6f75",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 20,
    marginTop: 30,
  },
  gif: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  gif2: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  gif3: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  gif4: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  cookimage: {
    height: 140,
    width: 178,
    margin: 8,
  },
  catimage: {
    height: 350,
    width: 300,
    margin: 5,
    borderRadius: 20,
  },
  overlay: {
    backgroundColor: "#FFFEFA",
    width: "100%",
    height: "85%",
    borderRadius: 20,
    opacity: 0.95,
    margin: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "silver",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  evenColumnStyle: {},
  oddColumnStyleVertical: { marginTop: 60 },
  oddColumnStyleHorizontal: { marginLeft: 60 },
});

export default HobbiesScreen;
