"use client";

import { UserButton } from "@clerk/nextjs";
import Dialog from "../components/ui/Dialog";

const SetupPage = () => {
  return (
    <>
      <UserButton />
      <Dialog
        isOpen
        description="Hello"
        title="Muammar Rizal"
        handleClose={() => {}}
      >
        Hello janges
      </Dialog>
    </>
  );
};

export default SetupPage;
