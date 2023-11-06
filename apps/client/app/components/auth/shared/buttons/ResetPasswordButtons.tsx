import { FC } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { Routes } from '../../../../config/routing/routes';

type TProps = {
  switchToResendButton?: boolean;
  resendHandler?: () => void;
};

export const ResetPasswordButtons: FC<TProps> = ({
  switchToResendButton = false,
  resendHandler = () => 0,
}) => {
  return (
    <Flex
      w='full'
      flexDirection='column'
      gap={2}>
      {switchToResendButton ? (
        <Button
          onClick={resendHandler}
          colorScheme='blue'
          variant='outline'
          width='full'>
          Надіслати повторно
        </Button>
      ) : (
        <Button
          type='submit'
          colorScheme='blue'
          variant='outline'
          width='full'>
          Підтвердити
        </Button>
      )}

      <Link
        href={Routes.SignIn}
        py={2}
        color='blue.500'
        _hover={{
          backgroundColor: '#EBF8FF',
          transitionDuration: '.2s',
          transitionTimingFunction: 'ease-in-out',
        }}
        fontWeight='medium'
        border='1px'
        borderRadius={5}
        textAlign='center'
        width='full'>
        Повернутися до авторизації
      </Link>
    </Flex>
  );
};
