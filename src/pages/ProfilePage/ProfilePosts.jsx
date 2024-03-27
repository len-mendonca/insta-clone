import { Grid } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  return (
    <Grid templateColumns={"repeat(3,1fr)"} gap={1} columnGap={1}>
      <ProfilePost img="/av1.jpg" />
      <ProfilePost img="/av2.jpg" />
      <ProfilePost img="/av3.jpg" />
      <ProfilePost img="/av4.jpg" />
      <ProfilePost img="/av4.jpg" />
      <ProfilePost img="/av1.jpg" />
    </Grid>
  );
};
export default ProfilePosts;
