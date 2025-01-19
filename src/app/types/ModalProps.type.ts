import React from "react";

export interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
}
