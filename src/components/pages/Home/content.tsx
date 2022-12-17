import { Box, Center, Checkbox, Input, Text } from "@chakra-ui/react";

export function NewTODO ({

} ){
    return (
        <>
            <Box>
                <Center>
                    <Box w={'75%'} minH={'50px'} border={'2px'} borderColor={'black'} display={'flex'} flexDirection={'row'}>
                        <Checkbox ml={'15px'}></Checkbox>
                        <Input ml={'10px'} fontSize={'20px'} variant={'unstyled'} placeholder={'Insert a new to-do'}></Input>
                    </Box>
                </Center>
            </Box>
        </>
    )
}