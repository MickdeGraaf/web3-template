import { Button, ButtonProps } from "@chakra-ui/react";
import WalletConnectProvider from '@walletconnect/web3-provider'

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
}

const ConnectWalletButton = (props: ButtonProps) => {
    return(
        <Button {...props} >
            Connect Wallet
        </Button>
    )
}

export default ConnectWalletButton;