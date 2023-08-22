-- CreateTable
CREATE TABLE "log_absesnsi" (
    "id" VARCHAR(255) NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "keterangan" VARCHAR(255) NOT NULL,
    "created_at" VARCHAR(255) NOT NULL,

    CONSTRAINT "log_absesnsi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "log_absesnsi" ADD CONSTRAINT "log_absesnsi_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
