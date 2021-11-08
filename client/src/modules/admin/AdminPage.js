import React, { useContext } from 'react'

import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors/UserSelectors";
import { List, ListItem, NewButton, RadioGroup, RadioItem } from "./styles";
import { Link } from "react-router-dom";
import { AdminList } from "./AdminList";
import { CourseDialog } from "./dialogs/CourseDialog";
import { AdminDialog } from "./AdminDialog";
import { AdminContext, AdminProvider } from "./context";

const RADIO_ITEMS = [
  'Courses', 'Users', 'Clubs', 'Events', 'FAQ'
]

export const AdminPage = () => {
  const [selected, setSelected] = React.useState('Courses')
  const [openDialog, setOpenDialog] = React.useState(false)

  return (
    <AdminProvider>
      <AdminDialog
        open={openDialog}
        setOpen={setOpenDialog}
        selected={selected}
      />
      <RadioGroup>
        {RADIO_ITEMS.map(item => (
            <RadioItem
              key={item}
              selected={selected === item}
              onClick={() => setSelected(item)}
            >
              {item}
            </RadioItem>
          )
        )}
      </RadioGroup>
      <NewButton onClick={() => setOpenDialog(true)}>+ NEW</NewButton>
      <AdminList
        selected={selected.toLowerCase()}
        setOpenDialog={setOpenDialog}
      />
    </AdminProvider>
  )
}