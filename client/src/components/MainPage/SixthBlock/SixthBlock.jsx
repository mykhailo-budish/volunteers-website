import React from 'react';
import FormContainer from './FormContainer/FormContainer';

import './SixthBlock.scss';
import line from '../../../img/line3.svg';

const SixthBlock = () => (
    <div className="sixth-block">
        <h2>Регистрация</h2>
        <img src={line} alt=""/>
        <div className="sixth-line-top" />
        <div className="sixth-line-bottom" />
        <div className="sixth-line-left" />
        <FormContainer />
    </div>
)

export default SixthBlock;