import { createState } from '@hookstate/core';

const store = createState({
    user: null,
    accessToken: "",
    authDrawer: false,
    conversionUnit: 0,
    totalConversions: 0,
    conversionPlan: "None",
    isLoggedIn: false
})

export default store;