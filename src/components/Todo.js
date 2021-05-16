import React from "react";
import {useSelector} from 'react-redux';
import {selectDataSet} from '../features/layers/layerslice'

function Todo({ todo }) {
    const state = useSelector(selectDataSet)
    console.log(state)
    return (
        <div>
            <li>{state}</li>
        </div>
    )
}

export default (Todo);
