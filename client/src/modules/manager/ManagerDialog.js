import React from 'react';
import { Dialog } from './styles';
import { Mask } from '../../styles';
import { RestaurantDialog } from './dialogs/RestaurantDialog';
import { FoodDialog } from './dialogs/FoodDialog';

export const ManagerDialog = ({ open, setOpen, selected }) => {
  const getDialog = () => {
    switch (selected) {
      case 'Restaurants':
        return <RestaurantDialog restaurantId={open} setOpen={setOpen} />;
      case 'Foods':
        return <FoodDialog foodId={open} setOpen={setOpen} />;
      default:
        return <></>;
    }
  };

  const escCloseDialog = React.useCallback(
    e => {
      e.keyCode === 27 && setOpen(false);
    },
    [setOpen]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escCloseDialog, false);

    return () => {
      document.removeEventListener('keydown', escCloseDialog, false);
    };
  }, [escCloseDialog]);

  if (!open) {
    return <></>;
  }

  return (
    <Dialog>
      <Mask onClick={() => setOpen(false)} />
      {getDialog()}
    </Dialog>
  );
};
