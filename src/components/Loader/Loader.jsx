import { Center, Spinner } from "@chakra-ui/react";


const Loader = () => {
    return (
        <Center width={'100%'} height={'80vh'}>
            <Spinner size={'xl'} thickness={"5px"} color={"red.500"} />
        </Center>
    )
}

export default Loader