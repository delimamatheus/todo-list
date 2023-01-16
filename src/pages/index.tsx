import { Box, Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { NewTODO, Task } from '../components/pages/Home'
import { MainLayout } from '../layout/MainLayout'
import { ItemTask } from '../components/types/Home/ItemsTask'

export default function Home() {  

  const [list, setList] = useState<ItemTask[]>([
    { id: 1, name: 'test', done: false },
    { id: 2, name: 'test 2', done: false },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const handleDeleteTask = (taskId: number) => {
    const newList = list.filter((list) => list.id !== taskId)
    setList(newList)
  }

  return (
    <Center>
    <Head>
      <title>TODO List</title>
      <meta name="description" content="Notification Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout>
      <Center>
        <Box
          w={{base: '300px', lg: '800px'}}
          minH={{base: '500px', lg: '700px'}}
          mt={'100px'}
          mb={'100px'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Text as='h1' fontSize={'36px'} textAlign={'center'}>TO-DO List</Text>
          
          <NewTODO onEnter={handleAddTask} />

          <Center>
            <Box as='ul' mt={{base: '20px', lg: '50px'}} w={{base: '100%', lg: '75%'}} h={{base: '400px',lg: '500px'}} overflowY={'auto'} boxShadow={'2xl'}>
                {list.map((task, index)=>(                
                  <Task key={index} task={task} deleteTask={handleDeleteTask}></Task>                                    
                ))}
            </Box>
          </Center>            
          
        </Box>
      </Center>
    </MainLayout>
    </Center>
  )
}
