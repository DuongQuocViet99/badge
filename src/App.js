import { ChakraProvider, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import { 
  TbAtom, TbAward, TbBolt, TbBox, TbCircleCheck, 
  TbCloud, TbCode, TbCrown, TbDiamond, TbShieldCheck 
} from "react-icons/tb"
import 'App.css'

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
              <TbCircleCheck fontSize='20px' className='checkIconInfinity' />
              <TbCode fontSize='20px' color='#BFBFBF' />
              <TbShieldCheck fontSize='20px' color='#88898C' />
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
              <TbAtom fontSize='20px' color='#88898C' />
              <TbBox fontSize='20px' color='#88898C' />
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
            <Text 
              fontFamily='Quicksand' 
              fontWeight='600'
              color='#6E6F73'
            >
              temmo
            </Text>
            <HStack spacing={0.5}>
              <TbCircleCheck fontSize='20px' color='#3DD1F2' />
            </HStack>
          </HStack>
        </Stack>
        <Spacer/>  
      </Flex>
    </ChakraProvider>
  )
}