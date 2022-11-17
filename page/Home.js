import React from "react"
import { View, Text, ScrollView, StyleSheet, SafeAreaView, RefreshControl } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import MyText from "../component/MyText";



export default function Home() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)
    }, []);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }

        >
            <SafeAreaView style={styles.background}  >
                <View style={styles.container}>

                    <Icon name="bars" size={30} color="black" />
                    <View style={{
                        borderWidth: 1,
                        borderColor: "#20232a",
                        borderRadius: 100,
                        padding: 5,
                        paddingLeft: 8,
                        paddingRight: 8
                    }}>
                        <Icon name="user" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.section}>
                    <MyText style={{ fontSize: 25 }}>
                        Hello, <MyText style={{ fontWeight: "bold" }}>Muhammad Faridz</MyText>
                    </MyText>
                    <MyText>Hanya mencoba</MyText>
                </View>
                <View style={styles.section2}>
                    <View style={styles.task}>
                        <MyText style={{ color: 'white' }}>My Task</MyText>
                    </View>
                    <View style={styles.task}>
                        <MyText style={{ color: 'white' }}>Project</MyText>
                    </View>
                    <View style={styles.task}>
                        <MyText style={{ color: 'white' }}>News</MyText>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.taskMain}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 30 }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View>
                                <MyText>Progress</MyText>
                            </View>

                        </View>
                        <View style={styles.taskMain}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 30 }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View>
                                <MyText>Progress</MyText>
                            </View>

                        </View>
                        <View style={styles.taskMain}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 30 }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View>
                                <MyText>Progress</MyText>
                            </View>

                        </View>

                        <View style={styles.taskMain}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 30 }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View>
                                <MyText>Progress</MyText>
                            </View>

                        </View>

                        <View style={styles.taskMain}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 30 }}>
                                <MyText>Oktober 2021</MyText>
                            </View>
                            <View>
                                <MyText>Progress</MyText>
                            </View>

                        </View>

                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <MyText style={{ fontSize: 20 }}>Progress</MyText>
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />
                    <Progress />

                </View>

            </SafeAreaView>
        </ScrollView>


    )
}

const Progress = () => {
    return (
        <View style={{ padding: 15, marginTop: 5 }}>
            <View style={{ flexDirection: "row", borderRadius: 10, backgroundColor: "#ffffff" }}>
                <View style={{ flex: 1.5, backgroundColor: "#3c3a8e", alignItems: "center", justifyContent: "center", borderRadius: 10, paddingBottom: 50, paddingTop: 50, }}>
                    <Icon name="tasks" size={30} color="white" />
                </View>
                <View style={{ flex: 4, justifyContent: "center", paddingLeft: 20, }}>
                    <Text >UI Development</Text>
                    <Text >07 Agustus 2021</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20

    },
    section: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    section2: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        flexDirection: "row",

    },
    task: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 20,
        borderRadius: 50,
        backgroundColor: "#3c3a8e",


    },
    taskMain: {
        padding: 5,
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 20,
        backgroundColor: "#3c3a8e",
        width: 170,
        borderRadius: 10
    },
    background: {
        flex: 1,
        backgroundColor: "#f3f6ff",
        height: "100%",
        fontFamily: ""
    }






});