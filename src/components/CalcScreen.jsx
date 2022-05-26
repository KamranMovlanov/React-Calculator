import React from 'react'
import s from './calcScreen.module.css';

const CalcScreen = (props) => {
    console.log("Calc rendered", props.calc)
    return (
        <div>
            <div>
                {props.result ?
                    <span className={props.calc.length + props.result.length < 6 ? s.screenInput : s.screenInputMin &&
                        props.calc.length + props.result.length >= 12 ? s.screenInputSuperMin : s.screenInputMin
                    }>({parseInt(props.result).toFixed(0)}) {props.calc || '0'}</span>
                    :
                    <span className={s.screenInput}>{props.calc || '0'}</span>
                }
            </div>
        </div>
    )
}

export default CalcScreen