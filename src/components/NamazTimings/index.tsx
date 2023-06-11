import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

import { fetchPrayerTimes } from "../../api/prayerTimesApi";


const NamazTimings = () => {
    const [loading, setLoading] = useState(true)
    const [prayerTimes, setPrayerTimes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const year = new Date().getFullYear();
            const month = new Date().getMonth() + 1;
            const times = await fetchPrayerTimes(year, month);
            setPrayerTimes(times);
            setLoading(false)
        };
        // console.log('prayer time are', prayerTimes.Fajr)

        fetchData();
    }, []);


    const currentTime = new Date(); const generateRandomColor = (): string => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return randomColor;
    };


    // return (
    //     <View>
    //         {loading ? (
    //             <ActivityIndicator size="large" color="blue" />
    //         ) : (

    //         )}
    //     </View>
    // )



    // return (
    //     <View>
    //       {loading ? (
    //         <ActivityIndicator size="large" color="blue" />
    //       ) : (
    //         <>
    //           {Object.entries(prayerTimes).map(([prayerName, prayerTime]) => {
    //             // Convert the prayerTime string to a Date object
    //             const [time, meridiem] = prayerTime.split(' ');
    //             const [hour, minute] = time.split(':');
    //             const prayerDateTime = new Date();
    //             prayerDateTime.setHours(meridiem === 'AM' ? parseInt(hour, 10) : parseInt(hour, 10) + 12);
    //             prayerDateTime.setMinutes(parseInt(minute, 10));

    //             // Compare the prayer time with the current time
    //             const prayerPassed = currentTime > prayerDateTime;

    //             return (
    //               <TouchableOpacity key={prayerName}>
    //                 <Text style={[styles.prayerName, prayerPassed && styles.strikeThrough]}>
    //                   {prayerName}
    //                 </Text>
    //                 <Text style={styles.prayerTime}>{prayerTime}</Text>
    //               </TouchableOpacity>
    //             );
    //           })}
    //         </>
    //       )}
    //     </View>
    //   );



    // return (
    //     <View>
    //       {loading ? (
    //         <ActivityIndicator size="large" color="blue" />
    //       ) : (
    //         <>
    //           {Object.entries(prayerTimes).map(([prayerName, prayerTime]) => {
    //             // Split the prayerTime string into its components
    //             const [time, meridiem] = prayerTime.split(' ');
    //             const [hour, minute] = time.split(':');
    //             let prayerDateTime = new Date();

    //             // Handle the case of midnight (00:00)
    //             if (hour === '00') {
    //               prayerDateTime.setHours(0);
    //             } else {
    //               // Convert the hour to 24-hour format if it's PM
    //               const isPM = meridiem === 'PM';
    //               const hour24 = isPM ? (parseInt(hour, 10) + 12) % 24 : parseInt(hour, 10);
    //               prayerDateTime.setHours(hour24);
    //             }

    //             // Set the minutes and seconds of the prayerDateTime
    //             prayerDateTime.setMinutes(parseInt(minute, 10));
    //             prayerDateTime.setSeconds(0);

    //             // Compare the prayer time with the current time
    //             const prayerPassed = currentTime > prayerDateTime;

    //             return (
    //               <TouchableOpacity key={prayerName}>
    //                 <Text style={[styles.prayerName, prayerPassed && styles.strikeThrough]}>
    //                   {prayerName}
    //                 </Text>
    //                 <Text style={styles.prayerTime}>{prayerTime}</Text>
    //               </TouchableOpacity>
    //             );
    //           })}
    //         </>
    //       )}
    //     </View>
    //   );







    // return (
    //     <View>
    //       {loading ? (
    //         <ActivityIndicator size="large" color="blue" />
    //       ) : (
    //         <>
    //           {Object.entries(prayerTimes).map(([prayerName, prayerTime]) => {
    //             if (
    //               prayerName === 'Sunset' ||
    //               prayerName === 'Imsak' ||
    //               prayerName === 'Firstthird' ||
    //               prayerName === 'Midnight' ||
    //               prayerName === 'Lastthird' ||
    //               prayerName === 'Sunrise' 

    //             ) {
    //               return null; // Exclude these prayer times from rendering
    //             }

    //             // Split the prayerTime string into its components
    //             const [time, meridiem] = prayerTime.split(' ');
    //             const [hour, minute] = time.split(':');
    //             let prayerDateTime = new Date();

    //             // Handle the case of midnight (00:00)
    //             if (hour === '00') {
    //               prayerDateTime.setHours(0);
    //             } else {
    //               // Convert the hour to 24-hour format if it's PM
    //               const isPM = meridiem === 'PM';
    //               const hour24 = isPM ? (parseInt(hour, 10) + 12) % 24 : parseInt(hour, 10);
    //               prayerDateTime.setHours(hour24);
    //             }

    //             // Set the minutes and seconds of the prayerDateTime
    //             prayerDateTime.setMinutes(parseInt(minute, 10));
    //             prayerDateTime.setSeconds(0);

    //             // Compare the prayer time with the current time
    //             const prayerPassed = currentTime > prayerDateTime;

    //             return (
    //               <TouchableOpacity key={prayerName}>
    //                 <Text style={[styles.prayerName, prayerPassed && styles.strikeThrough]}>
    //                   {prayerName}
    //                 </Text>
    //                 <Text style={styles.prayerTime}>{prayerTime}</Text>
    //               </TouchableOpacity>
    //             );
    //           })}
    //         </>
    //       )}
    //     </View>
    //   );






    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (
                <>
                    {Object.entries(prayerTimes).map(([prayerName, prayerTime]) => {
                        if (
                            prayerName === 'Sunset' ||
                            prayerName === 'Imsak' ||
                            prayerName === 'Firstthird' ||
                            prayerName === 'Midnight' ||
                            prayerName === 'Sunrise' ||
                            prayerName === 'Lastthird'
                        ) {
                            return null; // Exclude these prayer times from rendering
                        }

                        // Remove " (PKT)" from the prayerTime string
                        const cleanPrayerTime = prayerTime.replace(' (PKT)', '');

                        // Split the cleanPrayerTime string into its components
                        const [time, meridiem] = cleanPrayerTime.split(' ');
                        const [hour, minute] = time.split(':');
                        let prayerDateTime = new Date();

                        // Handle the case of midnight (00:00)
                        if (hour === '00') {
                            prayerDateTime.setHours(0);
                        } else {
                            // Convert the hour to 24-hour format if it's PM
                            const isPM = meridiem === 'PM';
                            const hour24 = isPM ? (parseInt(hour, 10) + 12) % 24 : parseInt(hour, 10);
                            prayerDateTime.setHours(hour24);
                        }

                        // Set the minutes and seconds of the prayerDateTime
                        prayerDateTime.setMinutes(parseInt(minute, 10));
                        prayerDateTime.setSeconds(0);

                        // Compare the prayer time with the current time
                        const prayerPassed = currentTime > prayerDateTime;

                        return (
                            <View key={prayerName}
                                style={{ flexDirection: 'row', justifyContent:'space-between' }}
                            >
                                <Text style={[styles.prayerName, prayerPassed && styles.strikeThrough]}>
                                    {prayerName}
                                </Text>
                                <Text style={styles.prayerTime}>{cleanPrayerTime}</Text>
                            </View>
                        );
                    })}
                </>
            )}
        </View>
    );



}

const styles = StyleSheet.create({
    prayerName: {
        // Your regular styles for the prayer name
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    strikeThrough: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    prayerTime: {
        fontSize: 16,
        // color: '#fff',
        color: 'black',
    }
})

export default NamazTimings