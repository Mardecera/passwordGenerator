import styles from './index.module.css'
import { copyToClipboard } from '../../utils'

const Actions = ({ password, changePassword }) => {
	return (
		<div className={styles.actions}>
			<button
				onClick={() => changePassword()}
				className={`${styles.btn} ${styles.actionRefresh}`}
			>
				Nueva contraseña
				<span className={'icon-rotate'}></span>
			</button>
			<button
				onClick={() => copyToClipboard(password)}
				className={`${styles.btn} ${styles.actionCopy}`}
			>
				Copiar contraseña
				<span className={'icon-copy'}></span>
			</button>
		</div>
	)
}

export default Actions
