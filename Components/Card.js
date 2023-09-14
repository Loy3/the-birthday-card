import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView } from 'react-native';
import bg from "../assets/birthdaycard.png";
import rec from "../assets/Icons/rec.png";
import snd from "../assets/Icons/sender.png";
import msg from "../assets/Icons/message.png";


export default function Card() {
    // const { mql } = useMediaQuery();

    const [recipient, setRecipient] = useState("");
    const [message, setMessage] = useState("");
    const [sender, setSender] = useState("");


    function clearState() {
        setRecipient("");
        setMessage("");
        setSender("");
    }

    useEffect(() => {
        console.log(recipient);
    }, [recipient])

    useEffect(() => {
        console.log(message);
    }, [message])

    useEffect(() => {
        console.log(sender);
    }, [sender])

    return (

        <View style={[styles.container, { transform: [{ rotate: '90deg' }] }]}>
            <ScrollView scrollEnabled={true} >
                <View style={styles.dirct}>
                    <View style={styles.card_form}>

                        <View style={styles.form}>
                            <Text style={styles.title}>Card Details.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.form_recep}>
                                    <Image style={styles.formImage} source={rec} />
                                    <Text style={styles.formTitle}>Recipient</Text>
                                    <TextInput style={styles.formInput}
                                        onChangeText={(text) => setRecipient(text)} placeholder="Recipient Name:" />
                                </View>

                                <View style={styles.form_sender}>
                                    <Image style={styles.formImage} source={snd} />
                                    <Text style={styles.formTitle}>Sender</Text>
                                    <TextInput style={styles.formInput}
                                        onChangeText={(text) => setSender(text)} placeholder="Sender Name:" />
                                </View>
                            </View>
                            <View>
                                <View style={styles.form_msg}>
                                    <Image style={styles.formImage} source={msg} />
                                    <Text style={styles.formTitle}>Message</Text>
                                    <TextInput style={styles.formTextArea}
                                        onChangeText={(text) => setMessage(text)} multiline numberOfLines={6} placeholder="Message:" />
                                </View>

                                <TouchableOpacity style={styles.clearBtn}>
                                    <Text style={styles.clearTxt} onPress={() => { clearState() }}>
                                        Clear Card
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card_display}>
                        <Image source={bg} style={styles.bgImg} />
                        <View style={styles.card_details}>
                            <Text style={styles.recip}>To: {recipient}</Text>
                            {/* <Text style={styles.msgTi}>Message:</Text> */}
                            <View style={styles.messageCont}>
                                <Text style={styles.msg}>{message}</Text>
                            </View>
                            <Text style={styles.sndr}>From: {sender}</Text>

                        </View>
                    </View>



                    {/* <View style={styles.card_display}>
                    <ImageBackground source={bg} style={styles.background}>
                        <View style={styles.cont}>
                            <Text style={styles.text}>Hello, world!</Text>
                        </View>
                    </ImageBackground>
                </View> */}
                </View>
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    // card: {
    //     flex: 1,
    //     width: "100%",
    //     alignItems: "center",
    //     backgroundColor: "#f3f9f5",
    //     alignItems: "center"
    //     // height: "100vh",
    //     // backgroundColor: "#f3f9f5",
    //     // paddingVertical: 80,
    //     // alignItems: "center"
    // },
    container: {
        // flex: 1,
        marginRight: 450,
        height: "100%",
        width: 850,
        backgroundColor: "#f3f9f5",
        alignItems: "center"
    },
    card_form: {
        width: "50%",
        // height: "100vh",
        backgroundColor: "#f3f9f5",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    dirct: {
        flexDirection: "row"
    },
    form: {
        width: 350
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 0,
        marginTop: 30,
        color: "#5bb26d"
    },
    form_recep: {
        position: "relative",
        width: "52%",
        margin: "1%",
        backgroundColor: "white",
        height: 100,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        borderRadius: 10
    },
    form_sender: {
        position: "relative",
        width: "52%",
        margin: "1%",
        backgroundColor: "white",
        height: 100,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        borderRadius: 10
    },
    form_msg: {
        position: "relative",
        width: "100%",
        backgroundColor: "white",
        height: 100,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        borderRadius: 10
    },

    formImage: {
        position: "absolute",
        left: 10,
        top: -25,
        width: 50,
        height: 50,
        borderRadius: 100
    },
    formTitle: {
        position: "absolute",
        top: 25,
        left: 20,
        fontSize: 15,
        fontWeight: "bold",
        color: "#5bb26d"
    },
    formInput: {
        position: "absolute",
        top: 60,
        left: 10,
        width: "87%",
        backgroundColor: "#f3f9f5",
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        outlineStyle: "none"
    },
    formTextArea: {
        position: "absolute",
        top: 60,
        left: 25,
        width: "87%",
        backgroundColor: "#f3f9f5",
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        outlineStyle: "none"
    },
    clearBtn: {
        marginVertical: 30,
        width: 350,
        backgroundColor: "#5bb26d"
    },
    clearTxt: {
        color: "#f3f9f5",
        marginVertical: 15,
        textAlign: "center",
        fontWeight: "bold"
    },

    card_display: {
        width: 400,
        // height: "100vh",
        // backgroundColor: 'green'
        position: "relative"
    },
    bgImg: {
        width: 400,
        height: 400,
        // objectFit: "cover"
    },
    card_details: {
        position: "absolute",
        width: 400,
        height: 400,
        zIndex: 10,

    },
    recip: {
        color: "#95b1a9",
        position: "absolute",
        top: 90,
        left: 110,
        // fontFamily: "londrina",
        fontWeight: "bold",
        letterSpacing: 2
    },

    msg: {
        // fontFamily: "londrina",
        color: "#95b1a9",
        width: 270,
        position: "absolute",
        top: 150,
        left: 50,
        textAlign: "center"
    },
    sndr: {
        color: "#95b1a9",
        position: "absolute",
        bottom: 100,
        left: 110,
        // fontFamily: "londrina",
        fontWeight: "bold",
        letterSpacing: 2
    },

    // background: {
    //     flex: 1,
    //     resizeMode: 'cover',
    //   },
    //   cont: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   text: {
    //     color: 'white',
    //     fontSize: 36,
    //   },

})

/*

.row {
    margin: 0 -5px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}


.column {
    padding: 0;
    float: left;
}
*/