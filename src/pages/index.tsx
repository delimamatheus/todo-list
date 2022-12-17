import { Box, Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../layout/MainLayout'

export default function Home() {  

  return (
    <Center>
    <Box>
      <Head>
        <title>TITLE</title>
        <meta name="description" content="Notification Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        CONTENT HERE
      </MainLayout>
    </Box>
    </Center>
  )
}
