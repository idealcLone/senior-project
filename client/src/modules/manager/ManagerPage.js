import React from 'react';

import { NewButton, RadioGroup, RadioItem } from './styles';
import { ManagerProvider } from './context';
import { ManagerDialog } from './ManagerDialog';
import { ManagerList } from './ManagerList';

const RADIO_ITEMS = ['Foods', 'Orders'];

export const ManagerPage = () => {
  const [selected, setSelected] = React.useState('Foods');
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <ManagerProvider>
      <ManagerDialog open={openDialog} setOpen={setOpenDialog} selected={selected} />
      <RadioGroup>
        {RADIO_ITEMS.map(item => (
          <RadioItem key={item} selected={selected === item} onClick={() => setSelected(item)}>
            {item}
          </RadioItem>
        ))}
      </RadioGroup>
      <ManagerList selected={selected.toLowerCase()} setOpenDialog={setOpenDialog} />
      <NewButton onClick={() => setOpenDialog(true)}>
        <div>+ NEW</div>
      </NewButton>
    </ManagerProvider>
  );
};
