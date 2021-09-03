import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectLayerInfo,setLayerInfoDetails } from "../features/layers/layerinfoslice";
import { useEffect } from "react";
import styled from "styled-components";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 30;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
  //  border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius :0
  },
}));

const LayerInfo = () => {
  const state = useSelector(selectLayerInfo);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
   const dispatch = useDispatch()
  const handleOpen = () => {

    setOpen(state.show);
  };

  const handleClose = () => {
    dispatch(
      setLayerInfoDetails({ show: false })
    );
    setOpen(false);
  };

  useEffect(() => {
    handleOpen();
  }, [state]);
  const body = (
  <Styleme>
    <div style={modalStyle} className={classes.paper}>
      {/* <Styleme> */}
      <table>
        <tr>
          <th>
             <h2 id="simple-modal-title">{state.dataset}</h2>
          </th>
        </tr>
        <tr>
          <td>
            <p id="simple-modal-description">{state.info}</p>
          </td>
       </tr>
      </table>
      {/* </Styleme> */}
    </div>
  </Styleme>
  );

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};


export default LayerInfo;

const Styleme = styled.div`
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: justify;
  text-justify: inter-word;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`;
