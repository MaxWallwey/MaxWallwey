import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button, Input } from '@chakra-ui/react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import './envConfig.ts'

const PasswordPromptModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordSubmitted, setPasswordSubmitted] = useState(false);

  useEffect(() => {
    if (passwordMatches === true) {
      onClose();
      toast.success('Success 🔓', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } else if (passwordMatches === false) {
      toast.error('Password incorrect 🔒', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    }
    setPasswordSubmitted(false);
  }, [passwordSubmitted]);

  function onClose() {
    setIsOpen(false);
  }

  function submitPassword() {
    setPasswordSubmitted(true);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please enter the password</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            initialValues={{ password: '' }}
            onSubmit={submitPassword}
            validate={(value) => {
                if (value === )
            }}
          >
            <Form>
              <FormikInput
                name="userName"
                label="Please enter the password"
              />
            </Form>
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button onClick={submitPassword} colorScheme="black" mr={3}>
            Submit
          </Button>
          <Button onClick={onClose}>
            <a href="/">Cancel</a>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PasswordPromptModal;
