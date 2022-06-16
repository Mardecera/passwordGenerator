import styles from './index.module.css'
import copyToClipboard from '../../services/copyToClipboard'
import getInfoSecurity from '../../services/getInfoSecurity'

const Result = ({ password, passwordLength, changePassword }) => {
	const { icon, text, color, backColor, percent } =
		getInfoSecurity(passwordLength)

	return (
		<div className={styles.result}>
			<div className={styles.container}>
				<span className={styles.showPassword}>{password}</span>
				<div className={styles.resultActions}>
					<span
						onClick={() => changePassword()}
						className={styles.iconRotate}
					></span>
					<span
						onClick={() => copyToClipboard(password)}
						className={styles.iconCopy}
					></span>
				</div>
			</div>
			<div
				className={styles.resultSecurityBar}
				style={{
					backgroundColor: backColor,
					transition: 'background-color .5s ease-out',
				}}
			>
				<div
					style={{
						width: `${percent}%`,
						backgroundColor: color,
						transition: 'width .5s ease-out',
					}}
				></div>
			</div>
			<div className={styles.resultSecurity} style={{ color: color }}>
				<span className={styles[`iconShield${icon}`]}></span>
				<p className="securityMessage">{text}</p>
			</div>
		</div>
	)
}

export default Result
