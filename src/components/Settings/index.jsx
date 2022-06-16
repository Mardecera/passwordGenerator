import styles from './index.module.css'
import Item from '../Item'
import getPositionInputRange from '../../services/getPositionInputRange'

const Setttings = ({
	includeNumbers,
	includeSymbols,
	includeUppercase,
	includeLowercase,
	passwordLength,
	changePasswordLength,
	changeIncludesCharacters,
}) => {
	const percent = getPositionInputRange(passwordLength)
	const background = `linear-gradient(90deg, #07bd3a ${percent}%, #d8d8d88f ${
		percent + 5
	}%)`

	return (
		<div className={styles.container}>
			<div className={styles.typesCharacters}>
				<Item
					text="Incluye números"
					isActive={includeNumbers}
					type="numbers"
					changeActive={changeIncludesCharacters}
				/>
				<Item
					text="Incluye símbolos"
					isActive={includeSymbols}
					type="symbols"
					changeActive={changeIncludesCharacters}
				/>
				<Item
					text="Incluye mayúsculas"
					isActive={includeUppercase}
					type="uppercase"
					changeActive={changeIncludesCharacters}
				/>
				<Item
					text="Incluye minúsculas"
					isActive={includeLowercase}
					type="lowercase"
					changeActive={changeIncludesCharacters}
				/>
			</div>
			<div className={styles.longCharacters}>
				<p className="longLabel">Longitud de contraseña</p>
				<div className={styles.longValue}>
					<label htmlFor="rangeCharacters">
						<input
							id="rangeCharacters"
							style={{ background: background }}
							type="range"
							min={8}
							max={32}
							defaultValue={24}
							onChange={changePasswordLength}
						/>
						<p>{passwordLength}</p>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Setttings
