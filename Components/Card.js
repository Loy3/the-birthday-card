import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
// import bg from "../assets/bg.png";
import rec from "../assets/Icons/rec.png";
import snd from "../assets/Icons/sender.png";
import msg from "../assets/Icons/message.png";


export default function Card() {
    // const { mql } = useMediaQuery();

    const [recipient, setRecipient] = useState("No Recipient");
    const [message, setMessage] = useState("No Message.");
    const [sender, setSender] = useState("No Sender");


    function clearState() {
        setRecipient("");
        setMessage("No Message.");
        setSender("No Sender");
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
        <View style={styles.card}>
            <View style={styles.container}>

                <View style={styles.card_form}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Card Details.</Text>

                        <View style={styles.form_recep}>
                            <Image style={styles.formImage} source={{ uri: rec }} />
                            <Text style={styles.formTitle}>Recipient</Text>
                            <TextInput style={styles.formInput}
                                onBlur={(ev) => setRecipient(ev.target.value)} placeholder="Recipient Name:" />
                        </View>

                        <View style={styles.form_sender}>
                            <Image style={styles.formImage} source={{ uri: snd }} />
                            <Text style={styles.formTitle}>Sender</Text>
                            <TextInput style={styles.formInput}
                                onBlur={(ev) => setSender(ev.target.value)} placeholder="Sender Name:" />
                        </View>

                        <View style={styles.form_msg}>
                            <Image style={styles.formImage} source={{ uri: msg }} />
                            <Text style={styles.formTitle}>Message</Text>
                            <TextInput style={styles.formTextArea}
                                onBlur={(ev) => setMessage(ev.target.value)} multiline numberOfLines={6} placeholder="Message:" />
                        </View>

                        <TouchableOpacity style={styles.clearBtn}>
                            <Text style={styles.clearTxt} onPress={() => { clearState() }}>
                                Clear State
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card_display}>
                    <View>
                        <Text>To: {recipient}</Text>
                        <Text>Message:</Text>
                        <Text>{message}</Text>
                        <Text>From: {sender}</Text>

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
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        // flex: 1,
        width: "100%",
        height: "100vh",
        // backgroundColor: "#f3f9f5",
        // paddingVertical: 80,
        // alignItems: "center"
    },
    container: {
        width: "100%",
        flexDirection: 'row',
        mql: {
            '(max-width: 700px)': {
                flexDirection:"unset"
            },
        },
    },
    card_form: {
        width: "30%",
        height: "100vh",
        backgroundColor: "#f3f9f5",
    },
    form: {
        margin: 50
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#5bb26d"
    },
    form_recep: {
        position: "relative",
        width: "100%",
        backgroundColor: "white",
        height: 150,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        borderRadius: "1em"
    },
    form_sender: {
        position: "relative",
        width: "100%",
        backgroundColor: "white",
        height: 150,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        borderRadius: "1em"
    },
    form_msg: {
        position: "relative",
        width: "100%",
        backgroundColor: "white",
        height: 250,
        shadowColor: '#5bb26d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        borderRadius: "1em"
    },

    formImage: {
        position: "absolute",
        left: 10,
        top: -40,
        width: 85,
        height: 85,
        borderRadius: 100
    },
    formTitle: {
        position: "absolute",
        top: 45,
        left: 30,
        fontSize: 20,
        fontWeight: "bold",
        color: "#5bb26d"
    },
    formInput: {
        position: "absolute",
        top: 80,
        left: 25,
        width: "90%",
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
        top: 80,
        left: 25,
        width: "90%",
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
        marginTop: 30,
        width: "100%",
        backgroundColor: "#5bb26d"
    },
    clearTxt: {
        color: "#f3f9f5",
        marginVertical: 15,
        textAlign: "center",
        fontWeight: "bold"
    },


    card_display: {
        width: "70%",
        height: "100vh",
        backgroundColor: 'green'
    }
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