import { Box, Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { NewTODO, Task } from '../components/pages/Home'
import { MainLayout } from '../layout/MainLayout'
import { ItemTask } from '../components/types/Home/ItemsTask'

export default function Home() {  

  const [list, setList] = useState<ItemTask[]>([
    { id: 1, name: 'test', done: false },
    { id: 2, name: 'test 2', done: false },
  ])

  return (
    <Center>
    <Box>
      <Head>
        <title>TITLE</title>
        <meta name="description" content="Notification Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Center>
          <Box
            // bgColor={'#FAF5FF'}
            w={{base: '300px', lg: '800px'}}
            minH={{base: '500px', lg: '700px'}}
            mt={'100px'}
            mb={'100px'}
            // boxShadow={'2xl'}
            border='1px' //just debug
            display={'flex'}
            flexDirection={'column'}
          >
            <Text fontSize={'36px'} textAlign={'center'}>TO-DO List</Text>
            
            <NewTODO></NewTODO>

            <Center>
              <Box mt={'50px'} w={'75%'} h={'500px'} overflowY={'auto'} boxShadow={'2xl'}>
                {list.map((task, index)=>(
                  <Task key={index} task={task}></Task>                  
                ))}
              </Box>
            </Center>            
            
          </Box>
        </Center>
      </MainLayout>
    </Box>
    </Center>
  )
}
