import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import Union from '../assets/image/Best.png'
import Picture from '../assets/image/Picture.png'
import Message from '../assets/image/message.png'
import Best from '../assets/image/Best2.png'
import Icon from '../assets/image/Best3.png'
import Background from '../assets/image/post.png'
import Background2 from '../assets/image/Background2.png'
import Background3 from '../assets/image/Background3.png'
import { LinearGradient } from 'expo-linear-gradient';
import Heart from '../assets/image/Heart.png'
import PostImage from '../assets/image/postImage.png'
import BoostModal from '../components/modal/BoostModal'
import BoostModal2 from '../components/modal/BoostModal2'
import ConversationModal from '../components/modal/ConversationModal'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Store';
import { useGetPostBySchoolMutation, useGetPostMutation } from '../Api'
import moment from 'moment';

const School = () => {
    const [modal, setModal] = useState(false)
    const [secondModal, setSecondModal] = useState(false)
    const [thirdModal, setThirdModal] = useState(false)
    const [getPostBySchool] = useGetPostBySchoolMutation()
    const [allPost, setAllPost] = useState(null)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPostBySchool({}).unwrap();
             
                setAllPost(data)
            } catch (error) {
                console.error('Failed to fetch posts by schools:', error);
            }
        };

        fetchPosts();
    }, [getPostBySchool]);
    return (
        <View style={{marginBottom: 10}}>

            {allPost?.results.map((result: any, index: number) => {

                const timeAgo = moment(result.time_created).fromNow();
               
                return (
                    <View style={styles.firstContainer} key={index}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <View style={[styles.innerNavigation, { justifyContent: 'flex-start', gap: 4 }]}>

                                <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13 }} onPress={() => setThirdModal(true)}>
                                    <Image source={Picture} />
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.fifthText}>Anonymous</Text>
                                    <Text style={styles.thirdText}>{timeAgo}. {result.user.institution.short_name}</Text>
                                </View>

                            </View>
                            <Entypo name="dots-three-horizontal" size={12} style={{ color: '#FFFFFF', marginRight: 15 }} />
                        </View>
                        <Text style={styles.sixthText}>{result.headline}</Text>
                        <Text style={[styles.fourthText, { fontSize: 12, paddingHorizontal: 0, marginTop: 5 }]}>{result.content}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            alignItems: 'center',

                        }}>
                            <View style={{
                                backgroundColor: '#3300FF', height: 20, paddingHorizontal: 10, borderRadius: 10, flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5
                            }}>
                                <Text style={styles.seventhText}>{result.content_type}</Text>
                            </View>
                        </View>

                        <View style={[styles.innerNavigation, { width: '100%' }]}>

                            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4', paddingRight: 10 }]}>
                                <Entypo name="arrow-bold-up" size={25} color="#F33F5E" />
                                <Text style={[styles.eighthText, { marginLeft: 2 }]}>{result.upvote_count}</Text>
                                <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color="#C4C4C4" style={{ marginRight: 8 }} />
                                <Text style={[styles.eighthText, { marginLeft: 2 }]}>{result.downvote_count}</Text>
                            </View>
                            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4', paddingRight: 10 }]}>
                                <Image source={Message} />
                                {/* <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text> */}
                            </View>
                            <TouchableOpacity style={styles.simpleContainer} onPress={() => setSecondModal(true)}>
                                {result.boosted && <Image source={Best} />}

                                {/* <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text> */}
                            </TouchableOpacity>
                            <AntDesign na="meupload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }} />
                        </View>

                    </View>
                )
            })}
            {/* 
        <View style={styles.secondContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            paddingTop: 10
          }}>
            <Image source={Union} style={{}} />
            <Text style={styles.thirdText}>Anonymous Boosted this post</Text>
          </View>

          <ImageBackground
            source={Background}
            style={styles.thirdContainer}
            imageStyle={{ borderRadius: 7 }}
          >

            <View style={[styles.innerNavigation, { width: '100%', justifyContent: 'center', gap: 4, }]}>

              <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13 }} onPress={() => setThirdModal(true)}>
                <Image source={Picture} />
              </TouchableOpacity>
              <View>
                <Text style={styles.fifthText}>Anonymous</Text>
                <Text style={styles.thirdText}>12h ago . IMSU</Text>
              </View>

            </View>
            <Text
              style={{
                color: '#E3E3E3',
                fontWeight: "700",
                fontSize: 14,
                textAlign: 'center',
                marginTop: 20
              }}
            >
              I was so horny
            </Text>

          </ImageBackground>
          <View style={[styles.innerNavigation, { width: '100%', marginBottom: 10 }]}>

            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>

              <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color="#C4C4C4" />
              <Text style={[styles.eighthText, { marginLeft: 2, color: '#B20000' }]}>803</Text>
              <Entypo name="arrow-bold-down" size={25} color="#B20000" />
            </View>
            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Image source={Message} />
              <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text>
            </View>
            <TouchableOpacity style={styles.simpleContainer} onPress={() => setModal(true)}>
              <Image source={Icon} />
              <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text>
            </TouchableOpacity>
            <AntDesign name="upload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }} />
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <View style={[styles.innerNavigation, { justifyContent: 'flex-start', gap: 4, marginHorizontal: 10 }]}>

            <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13 }} onPress={() => setThirdModal(true)}>
              <Image source={Picture} />
            </TouchableOpacity>
            <View>
              <Text style={styles.fifthText}>Anonymous</Text>
              <Text style={styles.thirdText}>12h ago . IMSU</Text>
            </View>

          </View>
          <Entypo name="dots-three-horizontal" size={12} style={{ color: '#FFFFFF', marginRight: 15 }} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end", marginTop: 5 }}>
          <View style={{ width: 15, height: 99, backgroundColor: "#1E1E1E" }}></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 28, position: "relative", paddingVertical: 5, }}>
            <ImageBackground source={Background2} style={{ justifyContent: "center", height: 150, width: 150 }}>
              <View style={{
                borderTopRightRadius: 20, borderBottomRightRadius: 20, backgroundColor: "#1E1E1E",
                alignItems: "center", justifyContent: "center", height: 40, width: 40
              }}>
                <MaterialCommunityIcons name="arrow-up-bold-outline" size={18} color="#C4C4C4" />
                <Text style={[styles.fifthText, { fontSize: 10, color: "#777777" }]}> 40%</Text>
              </View>
            </ImageBackground >
            <View style={{
              position: 'absolute',
              top: 50,
              left: 140,
              flexDirection: "row",
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3
            }}>
              <View style={{

                width: 50,
                height: 50,
                backgroundColor: 'white',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',

              }}>

                <Text style={{
                  color: '#000000',
                  fontWeight: "700",
                  fontSize: 14,
                }}>Vs</Text>
              </View>

            </View>
            <ImageBackground source={Background3} style={{ zIndex: 1, height: 150, width: 150, justifyContent: "flex-end", alignItems: "flex-end", flexDirection: "row", gap: 8 }}>

              <View style={{
                borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#1E1E1E",
                alignItems: "center", justifyContent: "center", height: 40, width: 40
              }}>
                <MaterialCommunityIcons name="arrow-down-bold-outline" size={18} color="#C4C4C4" />
                <Text style={[styles.fifthText, { fontSize: 10, color: "#777777" }]}> 0%</Text>
              </View>
            </ImageBackground >
          </View>
          <View style={{ marginTop: 20, width: 15, height: 45, backgroundColor: "#1E1E1E" }}></View>

        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 8,
          marginLeft: 15,
          marginVertical: 5
        }}>
          <Text style={[styles.ninthText]}> 20 votes </Text>
          <Text style={[styles.ninthText]}> Comment: 20</Text>
        </View>


        <View style={styles.firstContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={[styles.innerNavigation, { justifyContent: 'flex-start', gap: 4 }]}>

              <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13 }} onPress={() => setThirdModal(true)}>
                <Image source={Picture} />
              </TouchableOpacity>
              <View>
                <Text style={styles.fifthText}>Anonymous</Text>
                <Text style={styles.thirdText}>12h ago . IMSU</Text>
              </View>

            </View>
            <Entypo name="dots-three-horizontal" size={12} style={{ color: '#FFFFFF', marginRight: 15 }} />
          </View>
          <Text style={styles.sixthText}>Have a great day with my amazing client all
            the way from NewYork</Text>
          <Text style={[styles.fourthText, { fontSize: 12, paddingHorizontal: 0, marginTop: 5 }]}>Have a great day with my amazing client all the way
            from NewYork</Text>
          <View style={{
            backgroundColor: '#3300FF', height: 20, width: 30, borderRadius: 10, flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5
          }}>
            <Text style={styles.seventhText}>DM</Text>
          </View>
          <Image source={PostImage} style={{ marginLeft: 5, marginVertical: 10 }} />
          <View style={[styles.innerNavigation, { width: '100%' }]}>

            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Entypo name="arrow-bold-up" size={25} color="#F33F5E" />
              <Text style={[styles.eighthText, { marginLeft: 2 }]}>803</Text>
              <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color="#C4C4C4" style={{ marginRight: 8 }} />
            </View>
            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Image source={Message} />
              <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text>
            </View>
            <TouchableOpacity style={styles.simpleContainer} onPress={() => setSecondModal(true)}>
              <Image source={Best} />
              <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text>
            </TouchableOpacity>
            <AntDesign name="upload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }} />
          </View>
        </View>
        <View style={styles.firstContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,

            paddingTop: 10
          }}>
            <Image source={Union} style={{}} />
            <Text style={styles.thirdText}>Anonymous Boosted this post</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={[styles.innerNavigation, { justifyContent: 'flex-start', gap: 4 }]}>

              <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13 }} onPress={() => setThirdModal(true)}>
                <Image source={Picture} />
              </TouchableOpacity>
              <View>
                <Text style={styles.fifthText}>Anonymous</Text>
                <Text style={styles.thirdText}>12h ago . IMSU</Text>
              </View>

            </View>
            <Entypo name="dots-three-horizontal" size={12} style={{ color: '#FFFFFF', marginRight: 15 }} />
          </View>
          <Text style={styles.sixthText}>Have a great day with my amazing client all
            the way from NewYork</Text>
          <Text style={[styles.fourthText, { fontSize: 12, paddingHorizontal: 0, marginTop: 5 }]}>Have a great day with my amazing client all the way
            from NewYork</Text>
          <View style={{
            backgroundColor: '#0C8AE5', height: 25, width: 70, borderRadius: 15, flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5
          }}>
            <Text style={styles.seventhText}>Confession</Text>
          </View>

          <View style={[styles.innerNavigation, { width: '100%' }]}>

            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color="#C4C4C4" style={{ marginRight: 8 }} />
              <Text style={[styles.eighthText, { marginLeft: 2 }]}>803</Text>

              <Entypo name="arrow-bold-down" size={25} color="#F33F5E" />
            </View>
            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Image source={Message} />
              <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text>
            </View>
            <TouchableOpacity style={styles.simpleContainer} onPress={() => setModal(true)}>
              <Image source={Icon} />
              <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text>
            </TouchableOpacity>
            <AntDesign name="upload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }} />
          </View>
        </View>
        <View style={styles.firstContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <View style={[styles.innerNavigation, { justifyContent: 'flex-start', gap: 4 }]}>

              <TouchableOpacity style={{ height: 26, width: 26, borderRadius: 13 }} onPress={() => setThirdModal(true)}>
                <Image source={Picture} />
              </TouchableOpacity>
              <View>
                <Text style={styles.fifthText}>Anonymous</Text>
                <Text style={styles.thirdText}>12h ago . IMSU</Text>
              </View>

            </View>
            <Entypo name="dots-three-horizontal" size={12} style={{ color: '#FFFFFF', marginRight: 15 }} />
          </View>
          <Text style={styles.sixthText}>Have a great day with my amazing client all
            the way from NewYork</Text>

          <View style={{
            backgroundColor: '#0C8AE5', height: 25, width: 70, borderRadius: 15, flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5
          }}>
            <Text style={styles.seventhText}>Confession</Text>
          </View>


        </View> */}
            {modal && <BoostModal modal={modal} setModal={setModal} />}
            {secondModal && <BoostModal2 modal={secondModal} setModal={setSecondModal} />}
            {thirdModal && <ConversationModal modal={thirdModal} setModal={setThirdModal} />}
        </View>
    )
}


const styles = StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderColor: '#1E1E1E',
        paddingHorizontal: 10,
        paddingBottom: 15
    },
    firstText: {
        color: '#F33F5E',
        fontWeight: "600",
        fontSize: 16,
    },
    secondText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 14,
    },
    thirdText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 10,
        opacity: 0.5
    },
    fourthText: {
        color: '#FFFFFF',
        fontWeight: "300",
        fontSize: 14,
        opacity: 0.6,
        paddingHorizontal: 20
    },
    fifthText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 12,

    },
    sixthText: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 16,
    },
    seventhText: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 11,

    },
    eighthText: {
        color: '#F33F5E',
        fontWeight: "700",
        fontSize: 14,
    },
    ninthText: {
        color: '#777777',
        fontWeight: "700",
        fontSize: 12,
    },
    innerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',

    },
    firstContainer: {

        paddingHorizontal: 10,
        marginHorizontal: 10,

        marginTop: 10,
        paddingVertical: 5
    },
    simpleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    secondContainer: {
        borderBottomWidth: 4,
        borderTopWidth: 4,
        borderColor: '#1E1E1E',
        paddingHorizontal: 10

    },
    thirdContainer: {
        height: 150,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingTop: 10
    },
})

export default School