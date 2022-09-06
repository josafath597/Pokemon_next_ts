import type { NextPage } from 'next'
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <Layout title='Listado de Pokemons'>
      <h1>Hola Mundo</h1>
      <Button color='gradient'>Hola Mundo</Button>
    </Layout>
  )
}

export default Home
