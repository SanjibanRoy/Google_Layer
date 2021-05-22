import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBaseDetails } from "../features/layers/baselayerslice";
import { selectBaseDataSet } from "../features/layers/baselayerslice";
import styled from "styled-components";

function BaseSwitcher() {
  const dispatch = useDispatch();
  const basedata = useSelector(selectBaseDataSet);
  const ChangeMap = (e) => {
    dispatch(
      setBaseDetails({
        data: e,
        show: true,
      })
    );
  };

  return (
    <BASE>
      <ul>
        {basedata.map((baselayer) => (
          <li
            className={baselayer.show ? "activeBase" : ""}
            key={baselayer.id}
            onClick={() => ChangeMap(baselayer.id)}
          >
            <Image src ={baselayer.image} />
            <span className ={"spanText"}> {baselayer.text}</span>
          </li>
        ))}
      </ul>
    </BASE>
  );
}

export default BaseSwitcher;

const BASE = styled.div`
  background-color: white;
  .activeBase {
    background-color: #d4d3d3;
  }
  ul {
    list-style-type: none;
  }
  li {
    cursor: pointer;

    font-size: 12px;
    
    height: 40px;
    border-bottom: 1px solid #000;
    padding-left: 15px;
    padding-bottom: 5px;
    padding-top:5px;
    display: flex;
    text-align: -webkit-match-parent;

  }
  .spanText{
    padding-top:8px;
    padding-left: 5px;

  }

`;

const Image = styled.img`
width: 30px;
    height: 30px;
    left: 5px;
    top: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
    border-radius: 20px;
`;
