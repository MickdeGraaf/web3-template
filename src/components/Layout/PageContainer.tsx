import { Container } from "@chakra-ui/react";

const PageContainer: React.FC = ({children}) => {
    return (
        <Container maxWidth={"7xl"} py={"12"}>
            {children}
        </Container>
    )
}

export default PageContainer;