import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Checkbox, Divider, Input, Text } from "@chakra-ui/react";

export function NewTODO ({

} ){
    return (
        <>
            <Box display={'flex'} flexDirection={'column'}>
                <Center>
                    <Box w={'75%'} minH={'50px'} boxShadow={'dark-lg'} display={'flex'} flexDirection={'row'}>
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
                    
                </Box>
            </Center>
        </>
    )
}