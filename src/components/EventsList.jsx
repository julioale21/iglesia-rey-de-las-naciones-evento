import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { EventItem } from './EventItem'

const EventsList = ({ eventsData }) => {
    console.log(eventsData)
  return (
    <Stack>
        {eventsData.map((event, index) => (
            <EventItem event={event} key={index} />
        ))}
    </Stack>
  )
}

export { EventsList }