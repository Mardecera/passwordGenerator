import styles from './index.module.css'
import copyToClipboard from '../../services/copyToClipboard'

const Actions = ({ password, changePassword }) => {
	return (
		<div className={styles.actions}>
			<button
				onClick={() => changePassword()}
				className={`${styles.btn} ${styles.actionRefresh}`}
			>
				Nueva contraseña
				<span className={styles.iconRotate}></span>
			</button>
			<button
				onClick={() => copyToClipboard(password)}
				className={`${styles.btn} ${styles.actionCopy}`}
			>
				Copiar contraseña
				<span className={styles.iconCopy}></span>
			</button>
		</div>
	)
}

export default Actions
