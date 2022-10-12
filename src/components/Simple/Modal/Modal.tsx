import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./Modal.module.scss";

import close_icon from "../../../assets/icons/cross-small-skinny.svg";

interface ModalProps {
  open?: boolean;
  children?: React.ReactNode;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  setConfirmed?: Dispatch<SetStateAction<boolean>>;
  handleConfirmed?: () => void;
}

const Modal: FC<ModalProps> = ({
  open,
  children,
  setOpen,
  setConfirmed,
  handleConfirmed,
}) => {
  const closeModal = () => {
    if (setOpen !== undefined) setOpen(false);
  };
  const handleConfirm = async () => {
    if (setConfirmed !== undefined) {
      setConfirmed(true);
      closeModal();
    }
    if (handleConfirmed !== undefined) {
      handleConfirmed();
      closeModal();
    }
  };
  return (
    <div className={styles.Modal} data-testid="Modal">
      <div className={styles.bg} onClick={closeModal}></div>
      <div className={styles.Menu}>
        <img
          className={styles.MenuClose}
          src={close_icon}
          alt="Close Icon"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
