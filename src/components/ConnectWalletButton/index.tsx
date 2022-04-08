import { Button, ButtonProps } from "@chakra-ui/react";
import { useEthers, useLookupAddress } from "@usedapp/core";
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useState } from "react";
import Web3Modal from "web3modal";
import AccountModal from "../AccountModal";

const ConnectWalletButton = (props: ButtonProps) => {
    const { account, activate, deactivate } = useEthers();
    const ens = useLookupAddress();
    const [activateError, setActivateError] = useState('');
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true);
    }

    const activateProvider = async () => {
        const providerOptions = {
          injected: {
            display: {
              name: 'Metamask',
              description: 'Connect with the provider in your Browser',
            },
            package: null,
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              bridge: 'https://bridge.walletconnect.org',
              infuraId: 'd8df2cb7844e4a54ab0a782f608749dd',
            },
          },
        }
    
        const web3Modal = new Web3Modal({
            providerOptions,
        })
        try {
            const provider = await web3Modal.connect()
            await activate(provider)
            setActivateError('')
        } catch (error: any) {
            setActivateError(error.message)
        }
    }
    return(
        <>
        {account ? ( 
            <Button {...props} onClick={openModal} > {ens ?? account} </Button>
         ) : (
            <Button {...props} onClick={activateProvider} />
        )}

        <AccountModal open={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default ConnectWalletButton;