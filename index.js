import knex from "knex";

const db = knex({
  client: "postgres",
  debug: true,
  connection: {
    host: "localhost",
    user: "postgres",
    password: "mysecretpassword",
  },
});

async function executeQuery(alias) {
  await db("table_a")
    .innerJoin(`table_b as b_${alias}`, "table_a.id", `b_${alias}.table_a_id`)
    .where(`b_${alias}.id`, 1);
}

await executeQuery(' ); --"'); // Works
await executeQuery(" as 1"); // Syntax error

db.destroy();
