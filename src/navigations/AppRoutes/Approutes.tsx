/** @format */

import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack, HomeDrawer } from "@navigations";
const stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        component={HomeDrawer}
        name="HomeDrawer"
        options={{ headerShown: false }}
      />
      <stack.Screen component={AuthStack} name="AuthStack" />
    </stack.Navigator>
  );
};

export default AppRoutes;
