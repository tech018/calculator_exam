import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 86,
    height: 86,
    borderRadius: 24,
    backgroundColor: "#3764B4",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },

  btnLight: {
    width: 86,
    height: 86,
    borderRadius: 24,
    backgroundColor: "#3B3D43",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  btnGray: {
    width: 86,
    height: 86,
    borderRadius: 24,
    backgroundColor: "#4D5057",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  smallTextLight: {
    fontSize: 32,
    color: "white",
  },
  smallTextDark: {
    fontSize: 32,
    color: "000000",
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
    margin: "auto",
  },
  viewBottom: {
    marginTop: 130,

    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: "white",
    fontWeight: "200",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  screenSecondNumber: {
    fontSize: 40,
    color: "#4D5057",
    fontWeight: "200",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#292A2D",
    height: "100vh",
    width: "100%",
    marginTop: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  sectionHistory: {
    backgroundColor: "#3B3D43",
    height: 164,
    textAlign: "center",
    margin: 24,
    borderRadius: 20,
  },
  titleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 23,
    textAlign: "center",
    marginTop: 32,
  },
  historyText: {
    fontWeight: "600",
    lineHeight: 24.2,
    fontSize: 20,
    color: "white",
  },
  contentEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  svg: { textAlign: "right", marginTop: -25, marginRight: 30 },
  acc: {
    width: "97%",
    minHeight: 30,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 20,
    color: "#b3b3b3",
    marginBottom: 40,
  },
  total: {
    width: "97%",
    height: 70,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 60,
  },
});
