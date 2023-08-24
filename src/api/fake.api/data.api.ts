import findBranch from "../../utils/findBranch";

const data = [
  {
    key: "_",
    name: "root",
    children: [
      {
        key: "0",
        name: "quidem molestiae enim",
        children: [
          {
            key: "0-1",
            name: "sunt qui excepturi placeat culpa",
            children: [
              {
                key: "0-1-0",
                name: "omnis laborum odio",
              },
              {
                key: "0-1-1",
                name: "non esse culpa molestiae omnis sed optio",
              },
              {
                key: "0-1-2",
                name: "molestiae voluptate non",
              },
              {
                key: "0-1-3",
                name: "eaque aut omnis a",
              },
              {
                key: "0-1-4",
                name: "tenetur explicabo ea",
              },
              {
                key: "0-1-5",
                name: "temporibus molestiae aut",
              },
            ],
          },
          {
            key: "0-2",
            name: "natus impedit quibusdam illo est",
            children: [],
          },
        ],
      },
      {
        key: "1",
        name: "quibusdam autem aliquid et et quia",
        children: [],
      },
      {
        key: "2",
        name: "qui fuga est a eum",
        children: [
          {
            key: "2-0",
            name: "saepe unde necessitatibus rem",
            children: [
              {
                key: "2-0-0",
                name: "est placeat dicta ut nisi rerum iste",
                children: [
                  {
                    key: "2-0-0-0",
                    name: "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur",
                  },
                  {
                    key: "2-0-0-1",
                    name: "tenetur explicabo ea",
                  },
                ],
              },
            ],
          },
          {
            key: "2-1",
            name: "distinctio laborum qui",
          },
          {
            key: "2-2",
            name: "quam nostrum impedit mollitia quod et dolor",
          },
          {
            key: "2-3",
            name: "consequatur autem doloribus natus consectetur",
          },
        ],
      },
      {
        key: "3",
        name: "ab rerum non rerum consequatur ut ea unde",
        children: [],
      },
      {
        key: "4",
        name: "ducimus molestias eos animi atque nihil",
        children: [],
      },
      {
        key: "5",
        name: "ut pariatur rerum ipsum natus repellendus praesentium",
        children: [],
      },
    ],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(data[0]);
    }, 2000);
  });

const fetchChildren = (keyId: string) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const children = findBranch(data[0], keyId);
      resolve(children);
    }, 1000);
  });

const dataAPI = {
  fetchAll,
  fetchChildren,
};

export default dataAPI;
