import React from 'react'
import style from './ContainerDoce.module.css'

const ContainerDoce = (props) => {
    return (
        <div className={style.container_doce}>
            {props.children}
        </div>
    )
}

export default ContainerDoce
