import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiHomeAlt, BiMenu } from "react-icons/bi";
import { FiTrendingUp, FiSettings } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import Styles from "./Sidebar.module.css";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import Media from "react-media";

const Sidebar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  return (
    <div>
      <Media query="(min-width:767px)">
        <Box w="20%" h="90vh">
          <Text
            marginLeft="45px"
            marginTop="20px"
            fontSize="22px"
            fontWeight="700"
          >
            Logo
          </Text>

          <div>
            <Stack
              mt={"20px"}
              mx={"30px"}
              fontWeight={"medium"}
              className={Styles.trending}
            >
              <HStack>
                <Icon fontSize="18px" as={BiHomeAlt} />
                <Text fontWeight={"400"} fontSize="18px" pl={"10px"}>
                  Home
                </Text>
              </HStack>
            </Stack>
            <Stack
              mx={"30px"}
              fontWeight={"medium"}
              className={Styles.trending}
            >
              <HStack>
                <Icon fontSize="18px" as={FiTrendingUp} />
                <Text fontWeight={"400"} fontSize="18px" pl={"10px"}>
                  Trending
                </Text>
              </HStack>
            </Stack>
            <Stack
              mx={"30px"}
              fontWeight={"medium"}
              className={Styles.trending}
            >
              <HStack>
                <Icon fontSize="18px" as={MdOutlineExplore} />
                <Text fontWeight={"400"} fontSize="18px" pl={"10px"}>
                  Explore
                </Text>
              </HStack>
            </Stack>
            <Stack
              mx={"30px"}
              fontWeight={"medium"}
              className={Styles.trending}
            >
              <HStack>
                <Icon fontSize="18px" as={AiOutlineStar} />
                <Text fontWeight={"400"} fontSize="18px" pl={"10px"}>
                  Favourites
                </Text>
              </HStack>
            </Stack>
            <Stack
              mx={"30px"}
              fontWeight={"medium"}
              className={Styles.trending}
            >
              <HStack>
                <Icon fontSize="18px" as={FiSettings} />
                <Text fontWeight={"400"} fontSize="18px" pl={"10px"}>
                  Settings
                </Text>
              </HStack>
            </Stack>
          </div>
        </Box>
      </Media>

      <Media query="(max-width:767px)">
          
      <div className={Styles.draw}>

        <Menu >
          <MenuButton
          m={'20px'}
            as={IconButton}
            icon={<BiMenu />}
            fontSize="20px"
            variant="outline"
            onClick={() => handleClick("full")}
          ></MenuButton>

          <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
            size={size}
          >

            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <h2 className={Styles.logo}> Logo</h2>
              </DrawerHeader>
              <DrawerBody>
                <div className={Styles.home1}>
                  <Icon fontSize="18px" as={BiHomeAlt} />
                  <Text marginLeft="15px" fontSize="18px">
                    Home
                  </Text>
                </div>
                <div className={Styles.home1}>
                  <Icon fontSize="18px" as={FiTrendingUp} />
                  <Text marginLeft="15px" fontSize="18px">
                    Trending
                  </Text>
                </div>

                <div className={Styles.home1}>
                  <Icon fontSize="18px" as={MdOutlineExplore} />
                  <Text marginLeft="15px" fontSize="18px">
                    Explore
                  </Text>
                </div>

                <div className={Styles.home1}>
                  <Icon fontSize="18px" as={AiOutlineStar} />
                  <Text marginLeft="15px" fontSize="18px">
                    Favourites
                  </Text>
                </div>

                <div className={Styles.home1}>
                  <Icon fontSize="18px" as={FiSettings} />
                  <Text marginLeft="15px" fontSize="18px">
                    Settings
                  </Text>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <span className={Styles.span}> Logo</span>
        </Menu>
        </div>

      </Media>

    </div>
  );
};

export default Sidebar;
