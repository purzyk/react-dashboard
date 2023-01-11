import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="PLANETS"
        subtitle="How many planets are we ruling in galaxy"
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
