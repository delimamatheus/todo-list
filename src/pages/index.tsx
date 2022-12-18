import { Box, Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { List, NewTODO } from '../components/pages/Home'
import { MainLayout } from '../layout/MainLayout'

export default function Home() {  

  const [task, setTask] = useState("")

  const [list, setList] = useState([])

  function onChangeHandler(){
    setTask("");
  }

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
            
            <NewTODO task={task} setTask={onChangeHandler}></NewTODO>

            <List></List>

          </Box>
        </Center>
      </MainLayout>
    </Box>
    </Center>
  )
}
