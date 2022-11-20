import { ChakraProvider, Flex, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import { 
  TbApiApp,
  TbAtom, TbAward, TbBolt, TbBox, TbBrandReactNative, TbCircleCheck, 
  TbCloud, TbCode, TbComponents, TbCrown, TbDiamond, TbDrone, TbPlanet, TbShieldCheck 
} from "react-icons/tb"
import 'App.css'
import ReduxIcon from 'components/redux.svg'
import FlareIcon from 'components/flare.svg'

export default function App() {
  return (
    <ChakraProvider>
      <Flex p={6}>
        <Spacer/>
        <Stack>
          <HStack>
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              Duong Quoc Viet
            </Text>
            <HStack spacing={0.5}>
              <TbCircleCheck fontSize='20px' className='iconInfinity' />
              <TbCode fontSize='20px' color='#BFBFBF' />
              <TbShieldCheck fontSize='20px' color='#88898C' />
              <TbBrandReactNative fontSize='20px' className='reactIcon' />
            </HStack>
          </HStack>
          <HStack>
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              ntysux
            </Text>
            <HStack spacing={0.5}>
              <TbCircleCheck fontSize='20px' color='#3DD1F2' />
              <TbBolt fontSize='20px' color='#F2CE16' />
              <TbAtom fontSize='20px' color='#88898C' className='iconInfinityRotate' />
              <TbBox fontSize='20px' color='#88898C' className='iconInfinity' />
              <TbCloud fontSize='20px' color='#66E4F2' />
            </HStack>
          </HStack>
          <HStack>
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              yasuo
            </Text>
            <HStack spacing={0.5}>
              <TbAward fontSize='20px' color='#F2AE2E' />
              <TbCrown fontSize='20px' color='#F2A005' />
              <TbDiamond fontSize='20px' color='#C0CADC' />
            </HStack>
          </HStack>
          <HStack>
            <TbPlanet fontSize='20px' className='iconInfinityRotate' />
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              temmo
            </Text>
            <TbPlanet fontSize='20px' className='iconInfinityRotate' />
          </HStack>
          <HStack>
            <TbDrone className='iconInfinityRotate' />
            <Image src={ FlareIcon } className='iconInfinityRotateSVG' />
            <TbComponents className='iconInfinityRotate' />
            <TbApiApp className='iconInfinityRotate' />
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              KING
            </Text>
            <TbApiApp className='iconInfinityRotate' />
            <TbComponents className='iconInfinityRotate' />
            <Image src={ FlareIcon } className='iconInfinityRotateSVG' />
            <TbDrone className='iconInfinityRotate' />
          </HStack>
          <HStack>
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              joe doe
            </Text>
            <Image src={ ReduxIcon } className='iconInfinityRotateSVG' />
          </HStack>
        </Stack>
        <Spacer/>  
      </Flex>
    </ChakraProvider>
  )
}