import React from 'react';

import { NewButton, RadioGroup, RadioItem } from './styles';
import { AdminList } from './AdminList';
import { AdminDialog } from './AdminDialog';
import { AdminProvider } from './context';

const RADIO_ITEMS = [
  'Courses',
  'Users',
  'Clubs',
  'Events',
  'FAQs',
  'Restaurants',
  'Foods',
  'Links',
  'Questions',
];

export const AdminPage = () => {
  const [selected, setSelected] = React.useState('Courses');
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <AdminProvider>
      <AdminDialog open={openDialog} setOpen={setOpenDialog} selected={selected} />
      <RadioGroup>
        {RADIO_ITEMS.map(item => (
          <RadioItem key={item} selected={selected === item} onClick={() => setSelected(item)}>
            {item}
          </RadioItem>
        ))}
      </RadioGroup>
      <NewButton onClick={() => setOpenDialog(true)}>
        <div>+ NEW</div>
      </NewButton>
      <AdminList selected={selected.toLowerCase()} setOpenDialog={setOpenDialog} />
    </AdminProvider>
  );
};
