import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height:49,
    fontSize:14,
    lineHeight:16.94,
    borderBlockStartColor:"#057B9F",
    borderRadius: 8,
    backgroundColor: 'rgba(5, 123, 159, 0.1)',
    borderColor: "#057B9F",
    borderWidth: 1,
    marginBottom: 12,
    padding: 15,
  },
  forgotPass:{
    flex:1,
    textAlign:'right',    
    marginHorizontal:8,
  }
});
