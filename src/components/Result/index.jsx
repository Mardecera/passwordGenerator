import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { useState } from 'react'

const levels = {
	good: {
		icon: 'Check',
		text: 'Contraseña muy segura',
		color: '#51d376',
		backgroundColor: '#44bd67',
		percent: 100,
	},
	normal: {
		icon: 'Warning',
		text: 'Contraseña media segura',
		color: '#ffa500',
		backgroundColor: '#ffa50059',
		percent: 50,
	},
	bad: {
		icon: 'Cancel',
		text: 'Contraseña insegura',
		color: '#ed1374',
		backgroundColor: '#ed13743b',
		percent: 10,
	},
}

const getLavelSecurity = (longPassword) => {
	if (longPassword >= 14) return 'good'
	else if (longPassword < 14 && longPassword > 10) return 'normal'
	return 'bad'
}

const copy = (password) => {
	navigator.clipboard.writeText(password)
}



const Result = ({ password, longPassword, changePassword }) => {
    // const {refreshHover, setRefreshHover} = useState(false)
    // const {copyHover, setCopyHover} = useState(false)
	const textLevel = getLavelSecurity(longPassword)
	const textIcon = levels[textLevel].icon
	const textSecurity = levels[textLevel].text
	const textColor = levels[textLevel].color
	const textBackgroundColor = levels[textLevel].backgroundColor
	const divWitdh = levels[textLevel].percent
    let refreshHover = false

    const showTootip = (isHover) => {
        // if (isHover) setRefreshHover(true)
        // else setRefreshHover(false)
        refreshHover = isHover
        console.log(refreshHover)
    }

	return (
		<div className={styles.result}>
			<div className={styles.container}>
				<span className={styles.showPassword}>{password}</span>
				<div className={styles.resultActions}>
					<span
						onClick={() => changePassword()}
                        onMouseEnter={() => {showTootip(true)}}
                        onMouseLeave={() => {showTootip(false)}}
						className={styles.iconRotate}
					>
                    </span>
					<span
						onClick={() => copy(password)}
						className={styles.iconCopy}
					></span>
				</div>
			</div>
			<div
				className={styles.resultSecurityBar}
				style={{ backgroundColor: textBackgroundColor }}
			>
				<div
					style={{
						width: `${divWitdh}%`,
						backgroundColor: textColor,
					}}
				></div>
			</div>
			<div className={styles.resultSecurity} style={{ color: textColor }}>
				<span className={styles[`iconShield${textIcon}`]}></span>
				<p className="securityMessage">{textSecurity}</p>
			</div>
		</div>
	)
}

export default Result
