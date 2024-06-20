import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav main" "aside main"`,
      }}
    >
      <GridItem gridArea="nav" bg="tomato">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="gold">
          Nav
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="dodgerblue">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
