import { Button, Stack, useColorMode } from '@chakra-ui/react'
import { Banner } from './components/Banner'
// import './App.css'

function App() {

  const { toggleColorMode } = useColorMode()

  return (
    <Stack minH="100vh">
      {/* <Button onClick={toggleColorMode}>toggle theme</Button> */}
      {/* <Image  boxSize='100%' width="100%" objectFit='fill' src={bannerImage} /> */}
      <Banner />
      <h1>Event</h1>
    </Stack>
  )
}

export default App
