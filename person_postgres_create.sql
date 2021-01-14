DROP TABLE People;

CREATE TABLE People
(
    "_id" serial NOT NULL,
    "date" varchar,
    "name" varchar,
    "meal" varchar,
    "calories" varchar,
    "fat" varchar,
    "carbs" varchar,
    "protein" varchar,
    "sugar" varchar,
    "fiber" varchar,
    "saturatedfat" varchar
);

INSERT INTO People
    (_id, date, name, meal, calories, fat, carbs, protein, sugar, fiber, saturatedfat)
VALUES
    (1, 1/13/2021, 'Jake', 'breakfast', 300, 2, 25, 13, 8, 3, 1)