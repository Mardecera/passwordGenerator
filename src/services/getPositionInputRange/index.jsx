const getPositionInputRange = (passwordLength) => {
    const maxLongPassword = 32
	const minLongPassword = 8
	const newMaxLongPassword = maxLongPassword - minLongPassword
	const newLongPassword = passwordLength - minLongPassword
	return (100 * newLongPassword) / newMaxLongPassword
}

export default getPositionInputRange