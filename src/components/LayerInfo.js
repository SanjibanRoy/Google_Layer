import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector } from "react-redux";
import { selectInfo } from "../features/layers/infoboxslice";
import { useEffect } from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LayerInfo = () => {
  const state = useSelector(selectInfo);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(state.show);
  };

  const handleClose = () => {
    console.log("Here");
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
