const Users = require("./users-model.js");
const db = require("../database/db-config.js");

describe("users-model.js", () => {
 
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("add()", () => {
    it("should add user into the db", async () => {
      await Users.add({
        username: "neha",
        password: "patel"
      });

      let users = await db("users");

      expect(users).toHaveLength(1);
    });

    it("should insert users into the db", async () => {
      const { id } = await Users.add({
        username: "penny",
        password: "tague"
      });

      let user = await db("users")
        .where({ id })
        .first();

      expect(user.username).toBe("penny");
    });
  });
  describe("remove()", () => {
    it("should remove user from the db", async () => {

      const { id } = await Users.remove({
        username: "Wayne",
        password: "brett"
      });

      let users = await db("users");
      
      expect(users).toHaveLength(0);
    });
  });
});
