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

export const AuthorEdit = () => (
  <Edit redirect="list" title={<Title category="Author" source="name" />}>
    <SimpleForm>
      <IdLayout source="id" />
      <TextInput source="name" sx={inputStandardStyle} />
      <TextInput source="country" sx={inputStandardStyle} />
      <NumberInput
        source="yearOfBirth"
        max={getCurrentYear()}
        sx={inputStandardStyle}
      />
      <ReferenceArrayInput source="bookIds" reference="books" />
    </SimpleForm>
  </Edit>
);
