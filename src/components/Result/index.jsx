import { useRef } from 'react'
import { copyToClipboard, getInfoSecurity } from '../../utils'
import { resultConfig } from '../../consts'
import styles from './index.module.css'

const Result = ({ password, config, changePassword }) => {
    const btnRefresh = useRef(null)
    const btnCopy = useRef(null)
    const infoSecurity = getInfoSecurity(config)
    const { icon, text, color, backColor, percent } = infoSecurity

    const addTempFunctionality = (ref, className, time) => {
        ref.current.classList.add(className)
        setTimeout(() => ref.current.classList.remove(className), time)
    }

    return (
        <div className={styles.result}>
            <div className={styles.container}>
                <span className={styles.showPassword} title={password}>
                    {password}
                </span>
                <div className={styles.resultActions}>
                    <button
                        ref={btnRefresh}
                        className={`${styles.actionReset}`}
                        onClick={() => {
                            changePassword()
                            addTempFunctionality(btnRefresh, 'rotate', 500)
                        }}
                        title={resultConfig.actionResetTitle}
                    >
                        <span className={'icon-rotate'}></span>
                    </button>
                    <button
                        ref={btnCopy}
                        className={styles.actionCopy}
                        onClick={() => {
                            copyToClipboard(password)
                            addTempFunctionality(btnCopy, 'zoom', 500)
                        }}
                        title={resultConfig.actionCopyTitle}
                    >
                        <span className={'icon-copy'}></span>
                    </button>
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
                <span className={`icon-shield${icon}`}></span>
                <p className="securityMessage">{text}</p>
            </div>
        </div>
    )
}

export default Result
