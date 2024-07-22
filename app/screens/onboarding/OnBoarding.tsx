import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ViewToken,
  TouchableOpacity,
} from "react-native";
import { onBoardingData } from "../../../constants/data";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StatusBar } from "expo-status-bar";
import { router, SplashScreen } from "expo-router";
import NextBTN from "../../../assets/svg/nextSlideBTN.svg";
// import { auth } from "@/Firebase";

const { width, height } = Dimensions.get("window");

interface OnBoardingItem {
  id: number;
  text: string;
  image: any;
}

const OnBoarding: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef<FlatList>(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Function to handle user authentication state changes
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user); // Update user state
  //     setLoading(false); // Update loading state
  //   });
  //   if (loading) {
  //     SplashScreen.hideAsync();
  //   }

  //   // Clean up the listener on unmount
  //   return () => unsubscribe();
  // }, [loading]);

  const Slide: React.FC<{ item: OnBoardingItem }> = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const handleNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < onBoardingData.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const handleViewableItemsChanged = React.useCallback(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setCurrentSlideIndex(viewableItems[0].index || 0);
      }
    },
    []
  );

  const handlePush = () => {
    // if (user) {
    // router.push("(tabs)");
    // } else {
      router.push("/screens/Login");
    // }
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <FlatList
        ref={ref}
        data={onBoardingData}
        contentContainerStyle={styles.flatListContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <View style={styles.textContainer}>
        <ThemedText type="title" style={{ textAlign: "left", color: "white" }}>
          {onBoardingData[currentSlideIndex].text}
        </ThemedText>
        {/* <ThemedText
          type="subtitle"
          style={{ textAlign: "center", marginTop: 10 }}
        >
          {onBoardingData[currentSlideIndex].subtitle}
        </ThemedText> */}
      </View>
      <View style={styles.indicatorContainer}>
        {onBoardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={
            currentSlideIndex === onBoardingData.length - 1
              ? handlePush
              : handleNext
          }
        >
          <NextBTN />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slideContainer: {
    width: width,
    height: "100%",
  },
  image: {
    height: "100%",
    width: width,
    resizeMode: "cover",
  },
  flatListContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    bottom: "30%",
    left: 15,
    width: "50%",
    alignSelf: "flex-start",
  },
  indicatorContainer: {
    flexDirection: "row",
    marginTop: 20,
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#F16023",
  },
  buttons: {
    width: "auto",
    paddingHorizontal: "2%",
    marginTop: 20,
    position: "absolute",
    bottom: "25%",
    left: 10,
  },
});

export default OnBoarding;
