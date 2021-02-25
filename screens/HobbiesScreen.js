import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import RNMasonryScroll from "react-native-masonry-scrollview";
import Image2 from "react-native-scalable-image";
import { useResponsiveWidth } from "react-native-responsive-dimensions";

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
            <Image source={require("../assets/cat4.gif")} style={styles.gif} />
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
        <ScrollView></ScrollView>
      </Overlay>
      <Overlay isVisible={overlayVisible2} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay2}>
        <ScrollView></ScrollView>
      </Overlay>
      <Overlay isVisible={overlayVisible3} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay3}>
        <ScrollView></ScrollView>
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
  evenColumnStyle: {},
  oddColumnStyleVertical: { marginTop: 60 },
  oddColumnStyleHorizontal: { marginLeft: 60 },
});

export default HobbiesScreen;
