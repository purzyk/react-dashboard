import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can a Death Star be deployed to a system that contains Rebel ground
            units?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When the Death Star moves off the build queue, it is placed in the
            system that contains the Death Star Under Construction. This happens
            even if there are Rebel ground units in the system.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            If the Rebel player destroys a Death Star Under Construction without
            using the “Death Star Plans” objective card, does he gain
            reputation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are destroyed populous systems still considered to be populous
            systems?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Destroyed systems are no longer considered to be populous or remote
            systems. Destroyed systems do not have resource icons or loyalty.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            If Darth Vader or Emperor Palpatine retreats from a combat before it
            ends, and the Rebels go on to win the battle, would the “Return of
            the Jedi” card be playable?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. The Rebel player can play “Return of the Jedi” if the Emperor
            or Darth Vader retreats from a battle. However, the leader that
            retreated would not be eliminated because it is no longer in the
            system.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
