import React from 'react';
import { Dialog } from './styles';
import { UserDialog } from './dialogs/UserDialog';
import { Mask } from '../../styles';
import { CourseDialog } from './dialogs/CourseDialog';
import { ClubDialog } from './dialogs/ClubDialog';
import { EventDialog } from './dialogs/EventDialog';
import { FAQDialog } from './dialogs/FAQDialog';
import { RestaurantDialog } from './dialogs/RestaurantDialog';
import { FoodDialog } from './dialogs/FoodDialog';
import { LinkDialog } from './dialogs/LinkDialog';

export const AdminDialog = ({ open, setOpen, selected }) => {
  const getDialog = () => {
    switch (selected) {
      case 'Users':
        return <UserDialog userId={open} setOpen={setOpen} />;
      case 'Courses':
        return <CourseDialog courseId={open} setOpen={setOpen} />;
      case 'Clubs':
        return <ClubDialog clubId={open} setOpen={setOpen} />;
      case 'Events':
        return <EventDialog eventId={open} setOpen={setOpen} />;
      case 'FAQs':
        return <FAQDialog faqId={open} setOpen={setOpen} />;
      case 'Restaurants':
        return <RestaurantDialog restaurantId={open} setOpen={setOpen} />;
      case 'Foods':
        return <FoodDialog foodId={open} setOpen={setOpen} />;
      case 'Links':
        return <LinkDialog linkId={open} setOpen={setOpen} />;
      default:
        return <></>;
    }
  };

  const escCloseDialog = e => {
    e.keyCode === 27 && setOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', escCloseDialog, false);

    return () => {
      document.removeEventListener('keydown', escCloseDialog, false);
    };
  }, []);

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
