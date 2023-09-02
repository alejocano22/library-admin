import React from "react";
import { useRecordContext } from "react-admin";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";

type IdLayoutProps = {
  source: string;
};

const IdLayout = ({ source }: IdLayoutProps) => {
  const record = useRecordContext();
  return (
    <p data-testid="id-layout">
      <Grid3x3Icon sx={{ width: "15px", color: "gray" }} />
      <span data-testid="id-layout-text">{record ? record[source] : ""}</span>
    </p>
  );
};

export default IdLayout;
