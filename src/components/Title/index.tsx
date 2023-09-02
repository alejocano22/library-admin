import React from "react";
import { useRecordContext } from "react-admin";

type TitleProps = {
  category?: string;
  source: string;
};

const Title = ({ category, source }: TitleProps) => {
  const record = useRecordContext();
  return (
    <span data-testid="title-component">
      {category ? `${category}: ` : ""}
      {record ? `${record[source]}` : ""}
    </span>
  );
};

export default Title;
