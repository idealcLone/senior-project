import React from 'react'
import { Dialog } from "./styles";
import { UserDialog } from "./dialogs/UserDialog";
import { Mask } from "../../styles";
import { CourseDialog } from "./dialogs/CourseDialog";

export const AdminDialog = ({ open, setOpen, selected }) => {
  const getDialog = () => {
    switch (selected) {
      case 'Users':
        return <UserDialog userId={open} setOpen={setOpen}/>
      case 'Courses':
        return <CourseDialog courseId={open} setOpen={setOpen}/>
    }
  }

  const escCloseDialog = (e) => {
    e.keyCode === 27 && setOpen(false)
  }

  React.useEffect(() => {
    document.addEventListener('keydown', escCloseDialog, false)

    return () => {
      document.removeEventListener('keydown', escCloseDialog, false)
    }
  }, [])

  if(!open) {
    return <></>
  }

  return (
    <Dialog>
      <Mask onClick={() => setOpen(false)}/>
      {getDialog()}
    </Dialog>
  )
}