import {View, Text, StyleSheet } from "react-native"

export default function Dashboard() {

   return (

       <View style={styles.container}>
        <Text style= styles={.title}>

            AQUI AMIGO

        </Text>




       </View>



   )


export const styles = StyleSheet.create ({

container: {

    flex: 1,
    justifyContent:"center",
    alignContent:"center",



},

title: {

    fontSize: 18,
    fontWeight: "bold",




},




})



}
  


