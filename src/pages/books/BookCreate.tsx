import {
  Create,
  NumberInput,
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { getCurrentYear } from '../../utils/date';
import { inputStandardStyle } from '../../utils/style';

export const BookCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="title" sx={inputStandardStyle} />
      <NumberInput
        source="yearOfPublishing"
        max={getCurrentYear()}
        sx={inputStandardStyle}
      />
      <ReferenceArrayInput source="authorIds" reference="authors" />
    </SimpleForm>
  </Create>
);
