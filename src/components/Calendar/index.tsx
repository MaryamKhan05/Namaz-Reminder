import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AppliedTheme } from "@constants";
import { addDays, format, getDate, startOfWeek, isSameDay } from 'date-fns';
import { getWidth } from "@helpers";
const theme = AppliedTheme()

type Props = {

}
const Calendar: React.FC<Props> = () => {
    const [week, setWeek] = useState<WeekDay[]>([])
    const currentDate = new Date();
    useEffect(() => {
        const weekDays = getMonthDays(currentDate);
        setWeek(weekDays)
    }, [])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View>

                <Text>Today's Progress</Text>
                <View style={styles.container}>
                    {week.map((weekDay) => {
                        const textStyles = [styles.label]
                        const boxStyles = [styles.box]
                        const sameDay = isSameDay(weekDay.date, currentDate)
                        if (sameDay) {
                            textStyles.push(styles.selectedLabel)
                            boxStyles.push(styles.selectedBox)
                        }
                        return (
                            <View key={weekDay.formatted} style={boxStyles}>
                                <Text style={[textStyles, { fontFamily: 'FuturaMediumBT', fontSize: 18, marginVertical: 10 }]}>{weekDay.day}</Text>
                                <Text style={[textStyles, { fontFamily: 'FuturaMediumBT', fontSize: 12 }]}>{weekDay.formatted}</Text>
                            </View>

                        );
                    })}
                </View>
            </View>
        </ScrollView>


    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginLeft: 10

    },
    label: {
        color: 'gray'
    },
    selectedLabel: {
        color: 'white'
    },
    box: {
        padding: 10,
        backgroundColor: theme.button.Gray,
        borderRadius: 10,
        alignItems: 'center',
        width: getWidth(18),
        // height:getHeight(10)
        marginHorizontal: 5
    },
    selectedBox: {
        backgroundColor: theme.button.Blue,
        padding: 10,
        borderRadius: 10
    }
})
type WeekDay = {
    formatted: string;
    date: Date;
    day: number;
}

export const getMonthDays = (date: Date): WeekDay[] => {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const final = [];

    for (let i = 0; i < 7; i++) {
        const date = addDays(start, i);
        final.push({
            formatted: format(date, 'EEE'),
            date,
            day: getDate(date),
        });
    }
    return final;
};


export default Calendar