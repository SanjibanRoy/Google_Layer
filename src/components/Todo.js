import React from "react";
import { connect } from "react-redux";
// import { toggleTodo } from "../redux/actions";
import {useSelector} from 'react-redux';
import {selectUserName} from '../features/layers/layerslice'

function Todo({ todo }) {
    const state = useSelector(selectUserName)
    console.log(state)
    return (
        <div>
            <li>{todo}</li>
        </div>
    )
}

export default (Todo);
