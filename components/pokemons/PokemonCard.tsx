import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
    pokemon: SmallPokemon;

}
export const PokemonCard: FC<Props> = ({ pokemon:{id, name, image} }) => {

  const router = useRouter();
  
  const onClick = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Grid xs={ 4 } sm={ 3 } md={ 2 } xl={ 2 } key={ id }>
      <Card 
        isHoverable 
        isPressable
        onClick={ onClick }
      >
        <Card.Body>
          <Card.Image
            src={image}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name} </Text>
            <Text> #{id} </Text>
          </Row>
        </Card.Footer>

      </Card>

    </Grid>
  )
}
