import { firstLetterToUppercase as toUpper } from "./index";
describe("firstLetterToUppercase", () => {
  it("should capitalize first letter", () => {
    expect(toUpper("opuba")).toEqual("Opuba");
  });

  it("should return same word if first letter is uppercase", () => {
    expect(toUpper("Opuba")).toEqual("Opuba");
  });
});
