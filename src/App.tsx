import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { BookCreate, BookEdit, BookList } from "./pages/books";
import { AuthorCreate, AuthorEdit, AuthorList } from "./pages/authors";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="books"
      icon={LibraryBooksIcon}
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
      recordRepresentation="title"
    />
    <Resource
      name="authors"
      icon={EmojiPeopleIcon}
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
      recordRepresentation="name"
    />
  </Admin>
);
