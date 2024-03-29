import { useNavigate } from "react-router-dom";
import { Button, Flex, useMediaQuery, Text } from "@chakra-ui/react";
import { FiSettings, FiList } from "react-icons/fi";
import NavBar from "./NavBar";

const buttonProps = () => {
  return {
    bg: "none",
    size: "md",
    width: 130,
    height: 10,
    fontSize: "2xl",
    fontWeight: "bold",
  };
};

const Sidebar = () => {
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");
  let navigate = useNavigate();

  const Sidebar = (
    <Flex
      position="fixed"
      height="100%"
      flexDir="column"
      gap={10}
      width="10rem"
      ml="2rem"
      mt="4rem"
    >
      <Button
        {...buttonProps()}
        leftIcon={<FiSettings />}
        onClick={() => navigate("/customise")}
      >
        Actions
      </Button>
      <Button
        {...buttonProps()}
        leftIcon={<FiList />}
        onClick={() => navigate("/to-do-list")}
      >
        <Text textAlign="left" mr={6}>
          Tasks
        </Text>
      </Button>
    </Flex>
  );
  return <>{isSmallerThan700 ? <NavBar /> : Sidebar}</>;
};

export default Sidebar;
