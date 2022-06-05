import React, { useState } from 'react'
import s from './calcScreen.module.css';

const CalcScreen = (props) => {
    if (props.finalResult) {
        return (
            <div>
                <div>
                    <span className={s.screenInput}>{props.finalResult}</span>
                </div>
            </div>
        )
    }

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
        </div >

    )
}

export default CalcScreen