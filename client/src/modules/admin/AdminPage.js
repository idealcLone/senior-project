import React from 'react'

import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors/UserSelectors";
import { List, ListItem, RadioGroup, RadioItem } from "./styles";
import { Link } from "react-router-dom";
import { AdminList } from "./AdminList";

const RADIO_CHOICES = [
  'Courses', 'Users', 'Clubs', 'Events', 'FAQ'
]

export const AdminPage = () => {
  const [selected, setSelected] = React.useState('Courses')

  return (
    <>
      <RadioGroup>
        {RADIO_CHOICES.map(choice => (
            <RadioItem
              key={choice}
              selected={selected === choice}
              onClick={() => setSelected(choice)}
            >
              {choice}
            </RadioItem>
          )
        )}
      </RadioGroup>
      <AdminList selected={selected.toLowerCase()}/>
    </>
  )
}