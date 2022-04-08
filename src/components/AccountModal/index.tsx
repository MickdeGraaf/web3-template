import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

interface AccountModalProps {
    open: boolean;
    setShowModal: (open: boolean) => void;
}

const AccountModal = ({open, setShowModal}: AccountModalProps) => {

    const onClose = () => {
        setShowModal(false);
    }

    return (
        <Modal isOpen={open} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Content
            </ModalBody>

            <ModalFooter>
                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AccountModal;