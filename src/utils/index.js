export const firstLetterToUppercase = word =>
  word[0].toUpperCase() + word.substring(1);
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];
export const formatDate = str => {
  const date = new Date(str);
  const month = MONTHS[date.getMonth()];
  const newDate = `${month} ${date.getDate()}`; // e.g "DEC 31"
  return newDate;
};


export const sortArticle = data => {
  return data.sort((a, b) => {
    return a.id - b.id;
  });
};

export const data = [
  {
    id: 10,
    createdon: "2019-11-18T23:00:00.000Z",
    title: "updated title",
    article: "This article has been updated",
    authorid: "c308f87e-f84d-4479-80ce-e68b6b771ef3"
  },
  {
    id: 3,
    createdon: "2019-11-18T23:00:00.000Z",
    title: "A cool title",
    article: "Updated article 3, removed cool part",
    authorid: "c308f87e-f84d-4479-80ce-e68b6b771ef3"
  },
  {
    id: 69,
    createdon: "2019-12-31T23:00:00.000Z",
    title: "Another test article",
    article: "Let's see if the component if re-render.",
    authorid: "092e6fed-92b5-4dca-9d8a-66202521d951"
  },
  {
    id: 70,
    createdon: "2019-12-31T23:00:00.000Z",
    title: "Mobile Web Specialist Track",
    article: "Let's now see how it goes.",
    authorid: "092e6fed-92b5-4dca-9d8a-66202521d951"
  },
  {
    id: 71,
    createdon: "2019-12-31T23:00:00.000Z",
    title: "A new one again",
    article: "I just want to be sure of what is going on.",
    authorid: "092e6fed-92b5-4dca-9d8a-66202521d951"
  },
  {
    id: 67,
    createdon: "2019-12-31T23:00:00.000Z",
    title: "Another article",
    article:
      "I wanna test if the  useEffect hook rerenders the component as expected.",
    authorid: "092e6fed-92b5-4dca-9d8a-66202521d951"
  },
  {
    id: 66,
    createdon: "2019-12-31T23:00:00.000Z",
    title: "A new article.",
    article:
      "A new article that I am excited to post.↵I am very excited about this.",
    authorid: "092e6fed-92b5-4dca-9d8a-66202521d951"
  },
  {
    id: 68,
    createdon: "2019-12-31T23:00:00.000Z",
    title: "A test article.",
    article: "Another one to see if the component will re-render.",
    authorid: "092e6fed-92b5-4dca-9d8a-66202521d951"
  }
];
