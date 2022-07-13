import styles from './index.module.css'
import { getPositionInputRange } from '../../utils'
import { settingConfig } from '../../consts'

const CreateSettingsItems = ({ config, handleClick }) => {
    return settingConfig.map((setting, index) => (
        <div
            className={styles.item}
            key={index}
            onClick={() => handleClick(setting.type, !config[setting.type])}
        >
            <span
                className={`icon-check ${
                    config[setting.type] ? styles.active : ''
                }`}
            ></span>
            <p className={styles.itemLabel}>Incluye {setting.name}</p>
        </div>
    ))
}

const Settings = ({ config, handleCharacters, handlePass, inputRangeRef }) => {
    const percent = getPositionInputRange(config.passwordLength)
    const linearGradient = `linear-gradient(90deg, #07bd3a`
    const background = `${linearGradient} ${percent}%, #d8d8d88f ${percent}%)`

    return (
        <div className={styles.container}>
            <div className={styles.typesCharacters}>
                <CreateSettingsItems
                    config={config}
                    handleClick={handleCharacters}
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
                            onChange={handlePass}
                            ref={inputRangeRef}
                        />
                        <p>{config.passwordLength}</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Settings
