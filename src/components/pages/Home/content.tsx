import { useState, KeyboardEvent } from 'react'
import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Checkbox, Divider, Input, Text } from "@chakra-ui/react";
import { NewTODOProps } from "../../../interfaces/Home/INewTODO";
import { TaskProps } from "../../../interfaces/Home/ITask";

export function NewTODO ({
    onEnter
}: NewTODOProps){
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if((e.code === 'Enter' || e.code === 'NumpadEnter')  && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    const handleOnClick = () => {
        if (inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }
 
    return (
        <>
            <Box display={'flex'} flexDirection={'column'}>
                <Center>
                    <Box 
                        w={'75%'} minH={'50px'} 
                        boxShadow={'dark-lg'} borderRadius={'5px'} 
                        display={'flex'} flexDirection={'row'}                        
                    >
                        <Input 
                            ml={'10px'}
                            fontSize={'20px'} variant={'unstyled'} placeholder={'Insert a new to-do'} 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyUp={handleKeyUp}                            
                        />
                        <Button mt={'5px'} mr={'10px'} w={'25%'} onClick={handleOnClick} rightIcon={<ArrowForwardIcon />}>Submit</Button>
                    </Box>
                </Center>                
            </Box>
        </>
    )
}

export function Task ({
    task,
}: TaskProps ){
    const [isChecked, setIsChecked] = useState(task.done)

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
                        <Checkbox isChecked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} ml={'20px'} >                            
                            <Text>{task.name}</Text>  
                        </Checkbox>                        
                    </Box>
                    <Box w={'10%'} display={'flex'} flexDirection={'row'}>
                        <Box as={'button'} bg={'none'}><CloseIcon w={'15px'} /></Box>
                    </Box>
                </Box>                
            </Center>
        </>
    )
}