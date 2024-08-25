import {useAppSelector} from '../../hooks/useStore';

export const useVerifyEmail = () => {
  const sendEmail = useAppSelector(
    state => state.auth.user?.sendEmailVerification,
  );

  return {
    sendEmail,
  };
};
