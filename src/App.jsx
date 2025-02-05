import { AbsoluteCenter, VStack, Text } from '@chakra-ui/react'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <>
    <AbsoluteCenter>
      <VStack>
        <Text fontWeight="bold" textStyle="5xl">Weather 🌤️</Text>
        <WeatherCard />
      </VStack>
    </AbsoluteCenter>
    </>
  )
}

export default App
