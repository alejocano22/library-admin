import { getCurrentYear } from "./date";

describe("Date utils", () => {
  test("getCurrentYear should return current year - Intl", () => {
    const currentYear = parseInt(
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
      }).format(new Date()),
      10
    );
    expect(getCurrentYear()).toBe(currentYear);
  });

  test("getCurrentYear should return current year - 2023", () => {
    expect(getCurrentYear()).toBe(2023);
  });
});
