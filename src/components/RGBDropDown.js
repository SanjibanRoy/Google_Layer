import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails } from "../features/layers/layerslice";
import { useSelector } from "react-redux";
import { selectDataSet } from "../features/layers/layerslice";
const RGBDropDown = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectDataSet);

  const setDate = (e) => {
    dispatch(
      setAnalyticsDetails({...state,
        dates: e,
      })
    );
  };

  return (
    <RGB>
      <select onChange={(e) => setDate(e.target.value)}>
        <option value="Band1">Band1</option>
        <option value="Band2">Band2</option>
        <option value="Band3">Band3</option>
        <option value="Band4">Band4</option>
        <option value="Band5">Band5</option>
        <option value="Band6">Band6</option>
        <option value="Band7">Band7</option>
        <option value="Band8">Band8</option>
      </select>
      <select onChange={(e) => setDate(e.target.value)}>
        <option value="Band1">Band1</option>
        <option value="Band2">Band2</option>
        <option value="Band3">Band3</option>
        <option value="Band4">Band4</option>
        <option value="Band5">Band5</option>
        <option value="Band6">Band6</option>
        <option value="Band7">Band7</option>
        <option value="Band8">Band8</option>
      </select>
      <select onChange={(e) => setDate(e.target.value)}>
        <option value="Band1">Band1</option>
        <option value="Band2">Band2</option>
        <option value="Band3">Band3</option>
        <option value="Band4">Band4</option>
        <option value="Band5">Band5</option>
        <option value="Band6">Band6</option>
        <option value="Band7">Band7</option>
        <option value="Band8">Band8</option>
      </select>
    </RGB>
  );
};

export default RGBDropDown;

const RGB = styled.div`
  height: 50px;
  background-color: white;
`;
