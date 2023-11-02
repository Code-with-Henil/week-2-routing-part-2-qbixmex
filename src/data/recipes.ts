export interface RecipeType {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  author: string;
  date: Date;
}

const recipes: RecipeType[] = [
  {
    id: crypto.randomUUID(),
    title: "Chocolate Cake",
    slug: "chocolate-cake",
    description: "<p>Voluptate deserunt qui pariatur non ut. Laborum Lorem incididunt deserunt officia anim proident qui sunt tempor excepteur proident reprehenderit excepteur.</p><p>Reprehenderit voluptate laboris reprehenderit consectetur excepteur eiusmod.</p><p>Magna mollit duis minim exercitation incididunt labore cupidatat ad esse culpa ut. Deserunt exercitation dolore exercitation pariatur commodo aliqua est anim anim commodo.</p>",
    image: "chocolate-cake.jpeg",
    author: "Arthur Stewart",
    date: new Date('2022-04-08T08:18:15.178Z'),
  },
  {
    id: crypto.randomUUID(),
    title: "Pepperoni Pizza",
    slug: "pepperoni-pizza",
    description: "<p>Do amet cupidatat deserunt nostrud exercitation veniam. Ut veniam eiusmod sit sint eiusmod. Deserunt sint esse labore mollit pariatur pariatur ad dolore occaecat ex est eu.</p><p>Culpa exercitation amet sunt fugiat commodo ad laborum dolore nostrud nisi dolore consectetur incididunt.</p><p>Exercitation pariatur duis anim consectetur tempor duis consequat duis cillum proident sunt fugiat id. Magna aliquip aliquip eu fugiat ad est occaecat.</p><p>Tempor exercitation magna adipisicing eiusmod et aute in occaecat exercitation laborum irure.</p>",
    image: "pepperoni-pizza.jpeg",
    author: "Mario Costello",
    date: new Date('2023-02-12T12:32:53.125Z'),
  },
  {
    id: crypto.randomUUID(),
    title: "Roasted Coffee",
    slug: "roasted-coffee",
    description: "<p>Do amet cupidatat deserunt nostrud exercitation veniam. Ut veniam eiusmod sit sint eiusmod.</p><p>Deserunt sint esse labore mollit pariatur pariatur ad dolore occaecat ex est eu. Culpa exercitation amet sunt fugiat commodo ad laborum dolore nostrud nisi dolore consectetur incididunt.</p><p>Exercitation pariatur duis anim consectetur tempor duis consequat duis cillum proident sunt fugiat id. Magna aliquip aliquip eu fugiat ad est occaecat. Tempor exercitation magna adipisicing eiusmod et aute in occaecat exercitation laborum irure.</p>",
    image: "roasted-coffee.jpeg",
    author: "Lisa Mathew",
    date: new Date('2023-04-08T16:45:53.834Z'),
  },
  {
    id: crypto.randomUUID(),
    title: "Ramen",
    slug: "ramen",
    description: "<p>Mollit adipisicing eiusmod sit officia in consequat. Pariatur cillum in exercitation occaecat et enim excepteur amet sit labore eu laborum. Et occaecat quis duis elit id minim voluptate laboris minim Lorem proident quis.</p><p>Ipsum irure duis laboris in cillum quis anim veniam nulla ullamco minim elit duis labore. </p><p>Dolor incididunt nostrud sint voluptate fugiat dolor labore incididunt proident anim aliquip fugiat consectetur nisi. Elit culpa aliquip voluptate aliquip et ad culpa.</p>",
    image: "ramen.jpeg",
    author: "Koiji Nakamoto",
    date: new Date('2023-08-12T15:22:08.435Z'),
  },
];

export default recipes;
