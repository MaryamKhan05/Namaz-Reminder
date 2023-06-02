/** @format */

import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet } from "react-native";
import { AuthStack, HomeDrawer } from "@navigations";
// import { useAuthState } from 'firebase/auth'
import { auth } from "../../firebase/firebaseConfig";
const stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  // if (isLoading) {
  //   return <ActivityIndicator style={styles.loadingIndicator} />;
  // }

  return (
    <stack.Navigator>

      {user ? (<stack.Screen
        component={HomeDrawer}
        name="HomeDrawer"
        options={{ headerShown: false }}
      />
      ) : (
        <stack.Screen
          component={AuthStack}
          name="AuthStack"
          options={{ headerShown: false }}
        />
      )}
    </stack.Navigator>
  );
};

const styles = {
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default AppRoutes;
