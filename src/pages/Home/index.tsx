import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import PageContainer from "../../components/Layout/PageContainer";

const Home = () => {
    return (
        <PageContainer>
            <Heading>
                Web3 Dapp Template
            </Heading>

            <Text>
                Opininated Web3 starter template
            </Text>

            <Text >
                Uses:
            </Text>

            <UnorderedList>
                <ListItem>chakra-ui</ListItem>
                <ListItem>useDapp</ListItem>
                <ListItem>web3modal</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Typescript</ListItem>
            </UnorderedList>
            
        </PageContainer>
    )
}

export default Home;