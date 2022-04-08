import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";

interface AccountModalProps {
    open: boolean;
    setShowModal: (open: boolean) => void;
}

const AccountModal = ({open, setShowModal}: AccountModalProps) => {
    const { account, activate, deactivate } = useEthers();

    const onClose = () => {
        setShowModal(false);
    }

    const handleDisconnect = () => {
        onClose();
        deactivate();
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
                <Button onClick={handleDisconnect}>Disconnect</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AccountModal;