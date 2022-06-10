import styles from './index.module.scss'

const copy = (password) => {
	navigator.clipboard.writeText(password)
}

const Actions = ({ password, changePassword }) => {
	return (
		<div className={styles.actions}>
			<button
				onClick={() => {
					changePassword()
				}}
				className={`${styles.btn} ${styles.actionRefresh}`}
			>
				Nueva contraseña
				<span className={styles.iconRotate}></span>
			</button>
			<button
				onClick={() => {
					copy(password)
				}}
				className={`${styles.btn} ${styles.actionCopy}`}
			>
				Copiar contraseña
				<span className={styles.iconCopy}></span>
			</button>
		</div>
	)
}

export default Actions
