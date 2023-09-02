import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RecordContextProvider } from "react-admin";
import IdLayout from "./index";

describe("IdLayout Component", () => {
  render(
    <RecordContextProvider value={{ id: 22 }}>
      <IdLayout source="id" />
    </RecordContextProvider>
  );
  const idLayout = screen.getByTestId("id-layout");
  const idLayoutText = screen.getByTestId("id-layout-text");

  test("IdLayout Rendering", () => {
    expect(idLayout).toBeInTheDocument();
  });

  test("IdLayout Text", () => {
    const textContent = idLayoutText.textContent;
    expect(textContent).toBe("22");
  });
});
