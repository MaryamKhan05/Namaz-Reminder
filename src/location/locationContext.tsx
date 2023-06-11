import React, { createContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

type LocationData = {
  city: string | null;
  errorMsg: string | null;
};

type LocationContextType = {
  locationData: LocationData;
};

export const LocationContext = createContext<LocationContextType>({
  locationData: {
    city: null,
    errorMsg: null,
  },
});

export const LocationProvider: React.FC = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationData>({
    city: null,
    errorMsg: null,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setLocationData({
          city: null,
          errorMsg:
            'Oops, this will not work on Snack in an Android Emulator. Try it on your device!',
        });
        return;
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationData({
          city: null,
          errorMsg: 'Permission to access location was denied',
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocationData({ city:null, errorMsg: null });
     // Reverse geocoding
     const { latitude, longitude } = location.coords;
     let addressArray = await Location.reverseGeocodeAsync({ latitude, longitude });
     if (addressArray.length > 0) {
       let city = addressArray[0].city;
       setLocationData({city, errorMsg:null})
    //    alert(city);
     }
   })();
 }, []);


  return (
    <LocationContext.Provider value={{ locationData }}>
      {children}
    </LocationContext.Provider>
  );
};
