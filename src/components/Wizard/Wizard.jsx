import React from 'react';
import Styles  from './Wizard.module.css';


const Wizard = ({step}) => {

    const Circle = ({number}) => {
        if(number<=step){
            return (
                <div className={Styles.circleActive}>
                    <p>{number}</p>
                </div>
            );
        }
        else{
            return (
                <div className={Styles.circleNotActive}>
                    <p>{number}</p>
                </div>
            );
        }
    }

    return(
        <div className={Styles.circleContainer}>
            <Circle number={1}></Circle>
            <Circle number={2}></Circle>
            <Circle number={3}></Circle>
        </div>
    );
}

export default Wizard;