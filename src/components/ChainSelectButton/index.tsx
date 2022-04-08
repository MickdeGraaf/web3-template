import { Box, Button, Image } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import ChainSelectModal from "components/ChainSelectModal";
import { CHAIN_ICONS } from "config/chains";
import { useState } from "react";

const ChainSelectButton = () => {
    const { chainId, account } = useEthers();
    const [modalOpen, setModalOpen] = useState(false);

    if(!chainId || !account) {
        return (
            <></>
        )
    }

    const openModal = () => {
        setModalOpen(true);
    }

    return (
        <>
            <Button onClick={openModal}>
                <Image boxSize={"7"} src={CHAIN_ICONS[chainId]} />
            </Button>
            <ChainSelectModal open={modalOpen} setShowModal={setModalOpen} />
        </>
    )
}

export default ChainSelectButton;