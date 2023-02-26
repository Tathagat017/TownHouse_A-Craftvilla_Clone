import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SimpleGrid, Image, Box } from "@chakra-ui/react";
export default function SimpleImage() {
  // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
  // will have the same effect.
  return (
    <RouterLink to="/products">
      <SimpleGrid columns={[1, 1, 2]} spacing="30">
        <Image src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png"></Image>

        <Image src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png"></Image>

        <Image src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png"></Image>

        <Image src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png"></Image>
      </SimpleGrid>
    </RouterLink>
  );
}
