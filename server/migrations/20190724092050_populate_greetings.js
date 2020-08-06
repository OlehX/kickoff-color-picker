exports.up = function (knex) {
  return knex("greetings").insert([
    { body: "Welcome to My Color Picker!" },
  ]);
};

exports.down = function (knex) {
  return knex("greetings").delete();
};
