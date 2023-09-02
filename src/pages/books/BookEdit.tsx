import {
  Edit,
  NumberInput,
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { IdLayout, Title } from "../../components";
import { getCurrentYear } from "../../utils/date";
import { inputStandardStyle } from "../../utils/style";

export const BookEdit = () => (
  <Edit redirect="list" title={<Title category="Book" source="title" />}>
    <SimpleForm>
      <IdLayout source="id" />
      <TextInput source="title" sx={inputStandardStyle} />
      <NumberInput
        source="yearOfPublishing"
        max={getCurrentYear()}
        sx={inputStandardStyle}
      />
      <ReferenceArrayInput source="authorIds" reference="authors" />
    </SimpleForm>
  </Edit>
);
