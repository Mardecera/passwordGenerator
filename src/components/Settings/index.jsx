import styles from './index.module.css'
import { getPositionInputRange, getTypeCharacter } from '../../utils'

const CreateSettingsItems = ({ config, handleClick, items }) => {
   return items.map((item, index) => {
      const typeCharacter = getTypeCharacter(item)
      return (
         <div
            className={styles.item}
            key={index}
            onClick={() => handleClick(typeCharacter, !config[typeCharacter])}
         >
            <span
               className={`icon-check ${
                  config[typeCharacter] ? styles.active : ''
               }`}
            ></span>
            <p className={styles.itemLabel}>{item}</p>
         </div>
      )
   })
}

const Settings = ({
   config,
   handleCharacters,
   handlePass,
   inputRangeRef,
   language,
}) => {
   const percent = getPositionInputRange(config.passwordLength)
   const linearGradient = `linear-gradient(90deg, #07bd3a`
   const background = `${linearGradient} ${percent}%, #d8d8d88f ${percent}%)`

   return (
      <div className={styles.container}>
         <div className={styles.typesCharacters}>
            <CreateSettingsItems
               config={config}
               handleClick={handleCharacters}
               items={language.charactersPassword.labels}
            />
         </div>
         <div className={styles.longCharacters}>
            <p className="longLabel">{language.longPassword.label}</p>
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
