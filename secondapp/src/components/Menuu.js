import React from "react";
import menu1 from "../images/menu1.png";
import menu2 from "../images/menu2.png";
import { Image, Center, VStack, useBreakpointValue } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Menuu = () => {
  return (
    <>
      
      <Center >
        <VStack>
          <Image alt={"Image by pikisuperstar on Freepik"} src={menu1} />
          <Image alt={"Image by pikisuperstar on Freepik"} src={menu2} />
        </VStack>
      </Center>
      <Center>
        <Footer />
      </Center>
    </>
  );
};

export default Menuu;