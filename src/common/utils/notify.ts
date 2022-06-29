import { useToast } from 'native-base';

export const Notify = () => {
  const toast = useToast();
  return toast.show({
    title: 'Notifycation!!!',
    placement: 'top',
  });
};
