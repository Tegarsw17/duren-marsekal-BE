-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "city_former" VARCHAR(255) NOT NULL,
    "join_date" VARCHAR(255) NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "salary" VARCHAR(255) NOT NULL,
    "unique_code" VARCHAR(255) NOT NULL,
    "role_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
