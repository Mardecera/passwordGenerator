import styles from './index.module.css'

const Item = ({ text, isActive, type, changeActive }) => {
	const classActive = isActive ? styles.select : ''
	return (
		<div
			className={styles.item}
			onClick={() => changeActive(type, !isActive)}
		>
			<span className={`${styles.iconCheck} ${classActive}`}></span>
			<p className={styles.itemLabel}>{text}</p>
		</div>
	)
}

export default Item
