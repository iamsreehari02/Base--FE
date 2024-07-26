import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    paddingBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  subContainer: {
    paddingTop: "15%",
    paddingBottom: "5%",
    paddingHorizontal: 20,
  },
  scrollviewContainer: { flex: 1, backgroundColor: "white" },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#EEEEEE",
    overflow: "hidden",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    paddingRight: "7%",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 50,
    padding: 10,
    borderTopLeftRadius: 50,
    overflow: "hidden",
  },
  soldStyle: { backgroundColor: "" },
  orangeText: {
    color: "#F16023",
  },
});
