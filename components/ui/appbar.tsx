import { Navbar, Text } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export const AppBar = () => {
  return (
    <>
        <Navbar isBordered maxWidth='lg'>
            <Navbar.Brand>
            <Image 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="Pokemon"
              width={70}
              height={70}
            />
            <Text b color="white" h2>P</Text>
            <Text b color="white" h3>okémon</Text>
            </Navbar.Brand>
            <Navbar.Content>
            <Link href="#">
              <Text b color="white" h3>Favoritos</Text>
            </Link>
           
            </Navbar.Content>
        </Navbar>
    </> 
  )
}
