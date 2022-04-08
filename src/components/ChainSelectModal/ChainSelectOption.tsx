import { Button, Stack, Text, Image } from "@chakra-ui/react";
import { Chain } from "@usedapp/core";
import { CHAIN_ICONS } from "config/chains";
import { useState } from "react";

interface ChainSelectOptionProps {
    chain: Chain;
    onClick: () => void;
}

const ChainSelectOption = ({chain, onClick}: ChainSelectOptionProps) => {
    const [imageError, setImageError] = useState(false);

    const onImageError = () => {
        setImageError(true);
    }

    return (
        <Button onClick={onClick} justifyContent={"flex-start"} width={"100%"}>
            <Stack
                direction={"row"}
                // flex={{ base: 1, md: 0 }}
                align={"center"}
                justify={"flex-end"}
            >
                {!imageError ?
                    <Image onError={onImageError} boxSize={"7"} borderRadius='full' src={CHAIN_ICONS[chain.chainId]} />
                    :
                    <Text fontSize={"28px"}>🌕</Text>
                }
                <Text>{chain.chainName} {chain.isTestChain && "(test)"}</Text>
            </Stack>
        </Button>
    )
};

export default ChainSelectOption;