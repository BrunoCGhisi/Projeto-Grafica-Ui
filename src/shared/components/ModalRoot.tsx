import { Box, Typography } from "@mui/material";
import { ReactNode, forwardRef } from "react";
import { ModalStyle } from "../styles";

interface ModalRootProps {
  children: ReactNode;
  sx?: object;

}

export const ModalRoot = forwardRef<HTMLDivElement, ModalRootProps>(
  ({ children }, ref) => (
    <Box sx={ModalStyle} ref={ref}>
      {children}
    </Box>
  )
);
