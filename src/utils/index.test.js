import {
  firstLetterToUppercase as toUpper,
  formatDate,
  data,
  sortArticle
} from "./index";
describe("firstLetterToUppercase", () => {
  it("should capitalize first letter", () => {
    expect(toUpper("opuba")).toEqual("Opuba");
  });

  it("should return same word if first letter is uppercase", () => {
    expect(toUpper("Opuba")).toEqual("Opuba");
  });
});

describe("formatDate", () => {
  it("should return MONTH and DAY of the month", () => {
    const date = formatDate("2019-11-18T23:00:00.000Z");
    expect(date).toEqual("NOV 19");
  });
});

describe("sort Articles", () => {
  it("should sort articles in ascending order - first item is 3", () => {
    const sortedArticles = sortArticle(data);
    expect(sortedArticles[0].id).toEqual(3);
  });

  it("should sort articles in ascending order - last item is 71", () => {
    const sortedArticles = sortArticle(data);
    const last = sortedArticles.length - 1;
    expect(sortedArticles[last].id).toEqual(71);
  });

  it("should have the same number of articles as unsorted array", () => {
    const sortedArticles = sortArticle(data);
    expect(sortedArticles.length).toEqual(data.length);
  });
});
