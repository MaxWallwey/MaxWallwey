import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const PasswordPromptModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordSubmitted, setPasswordSubmitted] = useState(false);

  const placeholderPassword = '';

  useEffect(() => {
    if (password === placeholderPassword) {
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
    } else {
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
  }, [passwordSubmitted, password]);

  function onClose() {
    setIsOpen(false);
  }

  function submitPassword(password) {
    setPassword(password);
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
            onSubmit={(value) => {
              submitPassword(value);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  colorScheme="black"
                  mr={3}
                >
                  Submit
                </Button>
                <Button onClick={onClose} colorScheme="black" mr={3}>
                  <a href="/">Cancel</a>
                </Button>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PasswordPromptModal;
