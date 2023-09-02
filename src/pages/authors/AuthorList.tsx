import {
  Datagrid,
  EditButton,
  List,
  ReferenceArrayField,
  TextField,
  TextInput,
} from "react-admin";

const authorFilters = [
  <TextInput source="q" label="Search" alwaysOn key="book-filter-text-input" />,
];

export const AuthorList = () => (
  <List filters={authorFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="country" />
      <TextField source="yearOfBirth" />
      <ReferenceArrayField source="bookIds" reference="books" />
      <EditButton />
    </Datagrid>
  </List>
);
