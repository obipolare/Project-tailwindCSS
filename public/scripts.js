const sections = {
  props: ["title", "paragraph", "description", "img"],
  template: "#section-template",
};

const app = new Vue({
  el: "#app",
  data: {
    navList: [
      {
        name: "home",
        url: "index.html",
      },
      {
        name: "blog",
        url: "contact.html",
      },
      {
        name: "social media",
        url: "#",
      },
      {
        name: "contact",
        url: "#",
      },
    ],
    articles: [
      {
        title: "article 01",
        paragraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.",
        description: "loropechika",
        img:
          "https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg",
      },
      {
        title: "article 02",
        paragraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.",
        description: "loropechika",
        img:
          "https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg",
      },
      {
        title: "article 03",
        paragraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.",
        description: "loropechika",
        img:
          "https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg",
      },
    ],
    articlesTwo: [
      {
        title: "article 04",
        paragraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.",
        description: "loropechika",
        img:
          "https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg",
      },
      {
        title: "article 05",
        paragraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.",
        description: "loropechika",
        img:
          "https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg",
      },
      {
        title: "article 06",
        paragraph:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse temporibus tempore inventore delectus reprehenderit, ratione quaerat nihil ut quis reiciendis, veniam, aspernatur ab possimus perferendis vel odio maxime rem.",
        description: "loropechika",
        img:
          "https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg",
      },
    ],
  },
  methods: {
    toggleNav() {
      menu.classList.toggle("hidden");
    },
  },
  components: {
    sections,
  },
});
