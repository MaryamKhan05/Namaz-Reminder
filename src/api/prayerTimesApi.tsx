import axios from 'axios'

export const fetchPrayerTimes = async (year: number, month: number) => {
    try {
        //   const response = await axios.get(`http://api.aladhan.com/v1/calendarByCity/2017/4?city=London&country=United Kingdom&method=2`);
        const response = await axios.get(`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Rawalpindi&country=Pakistan&method=2`);


        const responseData = response.data
        const prayerTimes = responseData.data[0].timings;

        // console.log('prayer data', prayerTimes);
        // const fajr = prayerTimes.Fajr;
        // const sunrise = prayerTimes.Sunrise;
        // const dhuhr = prayerTimes.Dhuhr;
       

        // console.log('Prayer Timings:');
        // console.log('Fajr:', fajr);
        // console.log('Sunrise:', sunrise);
        // console.log('Dhuhr:', dhuhr);
        // Return the processed data
        return prayerTimes;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        // Handle error or display error message
        return null;
    }
};