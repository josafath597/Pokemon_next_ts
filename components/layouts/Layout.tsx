import Head from "next/head"

type Props = {
    children: React.ReactNode;
    title?: string;
  };

export const Layout= ({ children, title }: Props) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Fabian Cardenas" />
            <meta name="description" content={`Informacion sobre el pokémon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        </Head>

        <main>
            {children}
        </main>
    </>
  )
}
