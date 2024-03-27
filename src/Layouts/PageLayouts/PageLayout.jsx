import { Box, Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);

  const renderNavbar = pathname !== "/auth" && !user && !loading;

  return (
    <>
      {renderNavbar ? <Navbar /> : null}
      <Flex>
        {pathname !== "/auth" && user ? (
          <Box w={{ base: "70px", lg: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}
        <Box
          style={{ boxSizing: "border-box" }}
          flex={1}
          w={{
            base: "calc(100% - 800px)",

            lg: "calc(100%-240px)",
          }}
          mx={{ base: "0", sm: "0", md: "20", lg: "0" }}
          px={{ base: "0", sm: "2", md: "10" }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};
export default PageLayout;
