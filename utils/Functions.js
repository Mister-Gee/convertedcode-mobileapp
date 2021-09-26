import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTokenFromStorage = async() => {
    try {
        const value = await AsyncStorage.getItem('accessToken')
        if (value !== null) {
            return value
        } else {
            return null
        }
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const getReturnTokenFromStorage = async() => {
    try {
        const value = await AsyncStorage.getItem('returnToken')
        if (value !== null) {
            return value
        } else {
            return null
        }
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const deleteReturnTokenFromStorage = async() => {
    try {
        await AsyncStorage.removeItem('returnToken')

    } catch (e) {
        // error reading value
        console.log(e)
    }
    console.log("done")
}

export const reduceContentDisplay = (str) => {
    const a = str.split("<br/>").join(" ")
    const b = a.split("<b>").join("")
    const c = b.split("</b>").join("")
    const d = c.split("</br>").join(" ")
    return d.substring(0, 50);
}

export const dateToInputDate = (format) => {
    let result = new Date(format)
    let year = result.getFullYear()
    let monthRaw = result.getMonth() + 1
    let dayRaw = result.getDate()

    let month = monthRaw.toString().padStart(2, "0")
    let day = dayRaw.toString().padStart(2, "0")

    return `${year}-${month}-${day}`
}

export const dateConverter = (format) => {
    if (!format) return "";

    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let result = new Date(format)
    let year = result.getFullYear()
    let month = result.getMonth()
    let date = result.getDate()

    let hour = result.getHours()
    let min = result.getMinutes()


    return `${date} ${monthArray[month]}, ${year}`
}

export const cleanUpContent = (str) => {
    const a = str.split("<br/>").join("\n")
    const b = a.split("<b>").join("")
    const c = b.split("</b>").join("")
    const d = c.split("</br>").join("\n")
    return d
}