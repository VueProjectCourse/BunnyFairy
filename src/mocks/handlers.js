// app
import { rest } from "msw";
import faker from "faker";
const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";
const makeArray = (length, generator) => {
  return Array.from({ length }, generator);
};
faker.locale = "zh_CN";
export const handlers = [
  // rest.post("/login", (req, res, ctx) => {
  //   const { username } = req.body;

  //   return res(
  //     ctx.json({
  //       id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //       username,
  //       firstName: "John",
  //       lastName: "Maverick",
  //     })
  //   );
  // }),

  rest.get(`${baseURL}/member/collect`, (req, res, ctx) => {
    return res(
      ctx.json({
        msg: "成功",
        result: {
          counts: 50,
          page: req.url.searchParams.get("page"),
          pageSize: req.url.searchParams.get("pageSize"),
          pages: 0,
          items: makeArray(req.url.searchParams.get("pageSize"), () => ({
            id: faker.datatype.uuid(),
            name: faker.internet.userName(),
            desc: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${faker.datatype.number(
              { min: 1, max: 8 }
            )}.jpg`,
          })),
        },
      })
    );
  }),
];
