import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectLayerInfo,setLayerInfoDetails } from "../features/layers/layerinfoslice";
import { useEffect } from "react";

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
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{state.dataset}</h2>
      <p id="simple-modal-description">{state.info}</p>
    </div>
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
