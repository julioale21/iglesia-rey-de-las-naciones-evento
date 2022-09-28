import { Button, Stack, useColorMode, Text } from '@chakra-ui/react'
import { Banner } from './components/Banner'
import { EventsList } from './components/EventsList'
import { eventsDays } from './data/event-data'
// import './App.css'

function App() {

  // const { toggleColorMode } = useColorMode()

  return (
    <Stack minH="100vh">
      {/* <Button onClick={toggleColorMode}>toggle theme</Button> */}
      {/* <Image  boxSize='100%' width="100%" objectFit='fill' src={bannerImage} /> */}
      <Banner />
      <Stack marginTop={5} paddingTop={5}>
        { eventsDays.map((day, index) => (
          <Stack justifyContent="center" alignItems="center" padding={[4, 0]}>
            <Text fontSize={28} fontWeight="bold" color="red.500" textDecoration="underline">{day.day}</Text>
            <EventsList key={index} eventsData={day.events} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default App
