import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Checkbox, Divider, Input, Text } from "@chakra-ui/react";
import { NewTODOProps } from "../../../interfaces/Home/INewTODO";

export function NewTODO ({
    task,
    setTask
}: NewTODOProps ){
    return (
        <>
            <Box display={'flex'} flexDirection={'column'}>
                <Center>
                    <Box w={'75%'} minH={'50px'} boxShadow={'dark-lg'} borderRadius={'5px'} display={'flex'} flexDirection={'row'}>
                        <Input ml={'10px'} fontSize={'20px'} variant={'unstyled'} placeholder={'Insert a new to-do'}></Input>
                        <Button mt={'5px'} mr={'10px'} w={'25%'} type={'submit'} rightIcon={<ArrowForwardIcon />}>Submit</Button>
                    </Box>
                </Center>                
            </Box>
        </>
    )
}

export function List ({

} ){
    return (
        <>
            <Center>
                <Box mt={'50px'} w={'75%'} h={'500px'} overflowY={'auto'} boxShadow={'2xl'}>
                    <Task></Task>
                </Box>
            </Center>
        </>
    )
}

export function Task ({

} ){
    return (
        <>
            <Center>
                <Box                    
                    display={'flex'} flexDirection={'row'}
                    mt={'10px'}
                    w={'90%'} minH={'50px'}
                    border={'1px'} borderRadius={'10px'} borderColor={'gray.100'} boxShadow={'xl'}
                >                    
                    <Box w={'90%'} display={'flex'} flexDirection={'row'}>
                        <Checkbox ml={'20px'} >Task Template</Checkbox>                        
                    </Box>
                    <Box w={'10%'} display={'flex'} flexDirection={'row'}>
                        <Box as={'button'} bg={'none'}><CloseIcon w={'15px'} /></Box>
                    </Box>
                </Box>                
            </Center>
        </>
    )
}