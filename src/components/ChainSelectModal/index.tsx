import { Box, Button, Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { Chain, useEthers } from "@usedapp/core";
import ChainSelectOption from "components/ChainSelectModal/ChainSelectOption";
import { RPC_URLS, SUPPORTED_CHAINS } from "config/chains";
interface AccountModalProps {
    open: boolean;
    setShowModal: (open: boolean) => void;
}

const ChainSelectModal = ({open, setShowModal}: AccountModalProps) => {

    const { library } = useEthers();

    const onClose = () => {
        setShowModal(false);
    }

    const onSelect =  (chain:Chain) => async() => {
        if(!library) {
            return;
        }

        console.log(chain.chainId);
        
        const chainId = '0x' + chain.chainId.toString(16);
        console.log(chainId);

        try {
            await library.send("wallet_switchEthereumChain", [{ chainId: chainId, }]);
          } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            // @ts-ignore
            if (switchError.code === 4902) {
              try {
                await library.send("wallet_addEthereumChain", [
                    {
                      chainId: chainId,
                      // TODO fix below   
                      // Chain name causes warnings
                      chainName: chain.chainName,
                      rpcUrls: [RPC_URLS[chain.chainId]] /* ... */,
                    },
                ]);
              } catch (addError) {
                // handle "add" error
              }
            }
            // handle other "switch" errors
          }
          onClose();
    }

    return (
        <Modal isOpen={open} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Select a network</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}  >
                {
                    SUPPORTED_CHAINS.map((chain) => (
                        <ChainSelectOption onClick={onSelect(chain)} key={chain.chainId} chain={chain} />
                    ))
                }
                </Grid>
            </ModalBody>

            <ModalFooter>
                {/* <Button onClick={handleDisconnect}>Disconnect</Button> */}
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ChainSelectModal;