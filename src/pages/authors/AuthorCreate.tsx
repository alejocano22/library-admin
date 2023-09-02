import {
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
  Create,
  NumberInput,
} from "react-admin";
import { getCurrentYear } from "../../utils/date";
import { inputStandardStyle } from '../../utils/style';

export const AuthorCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" sx={inputStandardStyle} />
      <TextInput source="country" sx={inputStandardStyle} />
      <NumberInput
        source="yearOfBirth"
        max={getCurrentYear()}
        sx={inputStandardStyle}
      />
      <ReferenceArrayInput source="bookIds" reference="books" />
    </SimpleForm>
  </Create>
);
