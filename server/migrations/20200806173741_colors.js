
exports.up = function (knex) {
    return knex("colors").insert([
        {
            red: 0, green: 0, blue: 0,
        },
        {
            red: 22, green: 0, blue: 0,
        },
        {
            red: 0, green: 123, blue: 0,
        },
        {
            red: 12, green: 42, blue: 0,
        },
        {
            red: 22, green: 1, blue: 21,
        },

    ]);
};

exports.down = function (knex) {
    return knex("palettes").delete();
};
