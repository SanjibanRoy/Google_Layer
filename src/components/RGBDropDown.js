import React from "react";
import styled from "styled-components";
const RGBDropDown = () => {
  return (
    <RGB>
      <select>
        <option value="Band1">Band1</option>
        <option value="Band2">Band2</option>
        <option value="Band3">Band3</option>
        <option value="Band4">Band4</option>
        <option value="Band5">Band5</option>
        <option value="Band6">Band6</option>
        <option value="Band7">Band7</option>
        <option value="Band8">Band8</option>
      </select>
      <select>
      <option value="Band1">Band1</option>
        <option value="Band2">Band2</option>
        <option value="Band3">Band3</option>
        <option value="Band4">Band4</option>
        <option value="Band5">Band5</option>
        <option value="Band6">Band6</option>
        <option value="Band7">Band7</option>
        <option value="Band8">Band8</option>
    </select>
      <select>
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
