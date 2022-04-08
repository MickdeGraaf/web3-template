import { 
    Box,
    Button,
    Container,
    Flex,
    Stack,
    Text
} from "@chakra-ui/react";
import ConnectWalletButton from "../ConnectWalletButton";


const Header = () => (
    <Box bg="gray.200">
            <Container maxWidth={"7xl"}  >
                <Flex
                    // bg={useColorModeValue('white', 'gray.800')}
                    // color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    // borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                {/* <Box> */}
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Text>LOGO</Text>
                    </Flex>

                    <Stack
                        direction={"row"}
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                    >
                        <Button
                            fontWeight={400}
                        >
                            Other Button
                        </Button>
                        <ConnectWalletButton
                            fontWeight={400}   
                        >Connect Wallet</ConnectWalletButton>
                    </Stack>
                {/* </Box> */}
                </Flex>

                
                
            </Container>
        
    </Box>
)

export default Header;