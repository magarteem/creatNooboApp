import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import s from './modal_UI_false_login.module.css'
import Falshe_loginb from './Falshe_login.png'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    color: 'red',
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <img onClick={handleOpen} src={Falshe_loginb} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <div className={s.paper}>
              <p className={s.color_text}>П р о в е р и т ь &ensp;&ensp;&ensp; п а р о л ь</p>
              <form>
                <input className={s.width_input} autofocus autocomplete="off" placeholder="Абанат" required />
                <input className={s.width_input}           autocomplete="off" placeholder="Password " required /><input className={s.width_input_clear} type="reset" value="C l e a r" />
                <input className={s.check_sub} type="button" value="П р о в е р и т ь" />
              </form>
              

              <div className={s.block_login}>
                <span>Login :</span>
                <input type="button" value="11011 *2*" />
                <input type="button" value="21011 *1*" />
                <input type="button" value="31011 *4*" />
                <input type="button" value="41011 *437665*" />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
