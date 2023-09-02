import {
  Datagrid,
  EditButton,
  List,
  ReferenceArrayField,
  TextField,
  TextInput,
} from "react-admin";

const bookFilters = [
  <TextInput source="q" label="Search" alwaysOn key="book-filter-text-input" />,
];

export const BookList = () => (
  <List filters={bookFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceArrayField source="authorIds" reference="authors" />
      <TextField source="yearOfPublishing" />
      <EditButton />
    </Datagrid>
  </List>
);
