import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { RecordContextProvider } from "react-admin";
import Text from "./index";

const testCases = [
  ["empty category", null, "just a book title"],
  ["Author category", "Author", "Author: just a book title"],
  ["Book Category", "Book", "Book: just a book title"],
];

describe("Title Component rendering", () => {
  test.each(testCases)(
    "Title Component renders correctly for %s",
    (testCase, category, message) => {
      render(
        <RecordContextProvider value={{ title: "just a book title" }}>
          <Text category={category} source="title" />
        </RecordContextProvider>
      );

      const title = screen.getByTestId("title-component");
      expect(title).toBeInTheDocument();
    }
  );
});

describe("Title Component text", () => {
  test.each(testCases)(
    "Title Component shows correctly text for %s",
    (testCase, category, message) => {
      render(
        <RecordContextProvider value={{ title: "just a book title" }}>
          <Text category={category} source="title" />
        </RecordContextProvider>
      );

      const title = screen.getByTestId("title-component");
      const textContent = title.textContent;
      expect(textContent).toBe(message);
    }
  );
});
