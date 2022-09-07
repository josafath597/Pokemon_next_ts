import type { NextPage, GetStaticProps } from 'next'
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const Home: NextPage = (props) => {

  console.log({props});
  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  console.log('Hola Mundo');
  return {
    props: {
      name: 'Fabian'
    }
  }
}

export default Home
