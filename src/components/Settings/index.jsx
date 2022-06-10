import styles from './index.module.scss'
import Item from '../Item'

const getpercentRange = (longPassword) => {
	const minLongPassword = 8
	const newMaxLongPassword = 32 - minLongPassword
	const newLongPassword = longPassword - minLongPassword
	const porcentInput = (100 * newLongPassword) / newMaxLongPassword
	return porcentInput
}

const Setttings = ({
	includeNumbers,
	includeSymbols,
	includeUppercase,
	includeLowercase,
	longPassword,
	changeLongPassword,
	changeIncludesCharacters,
}) => {
	const percent = getpercentRange(longPassword)
	const background = `linear-gradient(90deg, #51d376 ${percent}%, #d8d8d88f ${
		percent + 5
	}%)`

	return (
		<div className={styles.container}>
			<div className={styles.typesCharacters}>
				<Item
					text="Incluye numeros"
					isActive={includeNumbers}
                    type='numbers'
					changeActive={changeIncludesCharacters}
				/>
				<Item
					text="Incluye simbolos"
					isActive={includeSymbols}
                    type='symbols'
					changeActive={changeIncludesCharacters}
				/>
				<Item
					text="Incluye mayusculas"
					isActive={includeUppercase}
                    type='uppercase'
					changeActive={changeIncludesCharacters}
				/>
				<Item
					text="Incluye minusculas"
					isActive={includeLowercase}
                    type='lowercase'
					changeActive={changeIncludesCharacters}
				/>
			</div>
			<div className={styles.longCharacters}>
				<p className="longLabel">Longitud de contraseña</p>
				<div className={styles.longValue}>
					<input
						style={{ background: background }}
						type="range"
						min={8}
						max={32}
						defaultValue={24}
						onChange={changeLongPassword}
					/>
					<p>{longPassword}</p>
				</div>
			</div>
		</div>
	)
}

export default Setttings
