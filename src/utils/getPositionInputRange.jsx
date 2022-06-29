import { minLongPassword, maxLongPassword } from '../consts'

const getPositionInputRange = (passwordLength) => {
    const newMaxLongPassword = maxLongPassword - minLongPassword
    const newLongPassword = passwordLength - minLongPassword
    return (100 * newLongPassword) / newMaxLongPassword
}

export default getPositionInputRange
