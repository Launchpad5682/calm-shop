import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

const baseURL = "https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/public/calm-shop-books/"

export const products = [
  {
    _id: uuid(),
    title: "1984",
    author: "George Orwell",
    price: "300",
    off: "26",
    categoryName: "fiction",
    path: `${baseURL}1984.jpg`
  },
  {
    _id: uuid(),
    title: "A short history of the World",
    author: "Wells H.G.",
    price: "299",
    off: "55",
    categoryName: "history",
    path: `${baseURL}a-short-history-of-time.jpg`
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "Paulo Coehlo",
    price: "248",
    off: "25",
    categoryName: "fiction",
    path: `${baseURL}alchemist.jpg`
  },
  {
    _id: uuid(),
    title: "Alexander: The Great",
    author: "Abbott Jacob",
    price: "150",
    off: "40",
    categoryName: "history",
    path: `${baseURL}alexander.jpg`
  },
  {
    _id: uuid(),
    title: "The Art of War",
    author: "Tzu Sun",
    price: "149",
    off: "53",
    categoryName: "history",
    path: `${baseURL}art-of-war.jpg`
  },
  {
    _id: uuid(),
    title: "Beyond Good and Evil",
    author: "Nietzsche Friedrich",
    price: "125",
    off: "32",
    categoryName: "philosophy",
    path: `${baseURL}beyond-good-and-evil.jpg`
  },
  {
    _id: uuid(),
    title: "Metamorphosis",
    author: "Kafka Franz",
    price: "177",
    off: "61",
    categoryName: "fiction",
    path: `${baseURL}metamorphosis.jpg`
  },
  {
    _id: uuid(),
    title: "Sapiens",
    author: "Harari Yuval Noah",
    price: "499",
    off: "42",
    categoryName: "history",
    path: `${baseURL}sapiens.jpg`
  },
  {
    _id: uuid(),
    title: "The Importance of Being Earnest",
    author: "Wilde Oscar",
    price: "75",
    off: "30",
    categoryName: "fiction",
    path: `${baseURL}the-importance of being earnest.jpg`
  },
  {
    _id: uuid(),
    title: "The Origin of Species",
    author: "Charles Darwin",
    price: "269",
    off: "55",
    categoryName: "history",
    path: `${baseURL}the-origin-of-species.jpg`
  },
  {
    _id: uuid(),
    title: "The Politics",
    author: "Aristotle",
    price: "199",
    off: "47",
    categoryName: "political science",
    path: `${baseURL}the-politics.jpg`
  },
  {
    _id: uuid(),
    title: "The Republic",
    author: "Plato",
    price: "199",
    off: "47",
    categoryName: "history",
    path: `${baseURL}the-republic.jpg`
  },
  {
    _id: uuid(),
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: "499",
    off: "26",
    categoryName: "fiction",
    path: `${baseURL}war-and-peace.jpg`
  },
  {
    _id: uuid(),
    title: "Wealth of Nations",
    author: "Adam Smith",
    price: "399",
    off: "49",
    categoryName: "political science",
    path: `${baseURL}wealth-of-nations.jpg`
  },
  {
    _id: uuid(),
    title: "Wuthering Heights",
    author: "Bronte Emily",
    price: "199",
    off: "49",
    categoryName: "fiction",
    path: `${baseURL}wuthering-heights.jpg`
  },
];
