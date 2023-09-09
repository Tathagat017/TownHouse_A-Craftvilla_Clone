import React from "react";

import { useState, useEffect } from "react";

import {
  Accordion,
  Box,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
} from "@chakra-ui/react";

export default function SideFilter() {
  return (
    <Flex direction="column">
      <Accordion allowToggle w={"20vw"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>1000-2000</Checkbox>
              <Checkbox defaultChecked>2000-3000</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>Men</Checkbox>
              <Checkbox defaultChecked>Women</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Returnable
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>Yes</Checkbox>
              <Checkbox defaultChecked>No</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Cancellable
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox>Yes</Checkbox>
              <Checkbox defaultChecked>No</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
