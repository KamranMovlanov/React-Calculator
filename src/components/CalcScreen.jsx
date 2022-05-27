import React from 'react'
import s from './calcScreen.module.css';

const CalcScreen = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                {props.result ?
                    <span className={props.calc.length + props.result.length < 6 ? s.screenInput : s.screenInputMin &&
                        props.calc.length + props.result.length >= 12 ? s.screenInputSuperMin : s.screenInputMin
                    }>({parseInt(props.result)}) {props.calc || '0'}</span>
                    :
                    <span className={s.screenInput}>{props.result} {props.calc || '0'}</span>
                }
            </div>
        </div>
    )
}


/*


         <span className={props.calc.length + props.result.length < 6 ? s.screenInput : s.screenInputMin &&
                        props.calc.length + props.result.length >= 12 ? s.screenInputSuperMin : s.screenInputMin
                    }>({parseInt(props.result).toFixed(3)}) {props.calc || '0'}</span>

*/

export default CalcScreen