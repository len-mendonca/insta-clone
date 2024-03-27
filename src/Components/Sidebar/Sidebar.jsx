import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { IoMdHome } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import SideIcons from "./SideIcons/SideIcons";
import useLogout from "../../hooks/useLogout";
const Sidebar = () => {
  const { handleLogout, isLoggingOut, error } = useLogout();
  const SidebarItems = [
    {
      index: 1,
      icon: <IoMdHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      index: 2,
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      index: 3,
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      index: 4,
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      index: 5,
      icon: <Avatar name="profile" src="/profilepic.png" size={"sm"} />,
      text: "Profile",
    },
  ];
  return (
    <Box
      h={"100vh"}
      position={"sticky"}
      top={0}
      left={0}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: "10", lg: "90" }}
      w={{ base: "29.200px", lg: "399.200" }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"100vh"}>
        <Link
          to="/"
          as={RouterLink}
          display={{ base: "none", lg: "block" }}
          cursor={"pointer"}
          position={"absolute"}
          left={5}
        >
          <InstagramLogo />
        </Link>
        <Link
          to="/"
          as={RouterLink}
          display={{ base: "block", lg: "none" }}
          cursor={"pointer"}
          position={"absolute"}
          left={5}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex
          direction={"column"}
          gap={5}
          position={"absolute"}
          top={140}
          left={3}
          w={"calc(100% - 20px)"}
          cursor={"pointer"}
        >
          {SidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              pl={{ base: "0", lg: "0" }}
              display={{ base: "block", lg: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                pb={2}
                pt={2}
                pl={2}
                pr={2}
                w={{ base: "10", lg: "full" }}
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
                {item.icon}
                <Text display={{ base: "none", lg: "block" }}>{item.text}</Text>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Link
          onClick={handleLogout}
          h={10}
          display={"flex"}
          gap={1}
          position={"absolute"}
          bottom={5}
          left={3}
          alignItems={"center"}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          pb={2}
          pt={2}
          pl={1}
          pr={0}
          ml={0}
          w={{ md: "calc(100% - 20px)", base: "10" }}
        >
          <CiLogout size={25} />
          <Button
            bg={"transparent"}
            _hover={{
              bg: "transparent",
            }}
            isLoading={isLoggingOut}
            display={{ base: "none", lg: "block" }}
          >
            Logout
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
export default Sidebar;
