import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1603186006476 implements MigrationInterface {
    name = 'createUser1603186006476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "date_created" date NOT NULL, "instructor" bigint, CONSTRAINT "REL_6e3c720003295dda816e16b156" UNIQUE ("instructor"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "grades" ("id" SERIAL NOT NULL, "score" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_4740fb6f5df2505a48649f1687b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_course" ("id" SERIAL NOT NULL, "course_id" uuid, "user_id" bigint, "grade_id" integer, CONSTRAINT "REL_a2ad5f9a443657da7039e44ed9" UNIQUE ("grade_id"), CONSTRAINT "PK_140d2607308f60eda2ae0d72a4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_accounttype_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying(200) NOT NULL, "bio" character varying, "created_at" character varying, "accountType" "user_accounttype_enum" NOT NULL DEFAULT '0', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "auth" ("id" SERIAL NOT NULL, "password" character varying(100) NOT NULL, "created_at" character varying, "user_id" bigint, CONSTRAINT "REL_9922406dc7d70e20423aeffadf" UNIQUE ("user_id"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_6e3c720003295dda816e16b1562" FOREIGN KEY ("instructor") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "FK_0ee43ae3da1f7093cb1d4645b18" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "FK_4a3ce5cc99a42d5eaab2d3cc662" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_course" ADD CONSTRAINT "FK_a2ad5f9a443657da7039e44ed96" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_9922406dc7d70e20423aeffadf3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_9922406dc7d70e20423aeffadf3"`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "FK_a2ad5f9a443657da7039e44ed96"`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "FK_4a3ce5cc99a42d5eaab2d3cc662"`);
        await queryRunner.query(`ALTER TABLE "student_course" DROP CONSTRAINT "FK_0ee43ae3da1f7093cb1d4645b18"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_6e3c720003295dda816e16b1562"`);
        await queryRunner.query(`DROP TABLE "auth"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_accounttype_enum"`);
        await queryRunner.query(`DROP TABLE "student_course"`);
        await queryRunner.query(`DROP TABLE "grades"`);
        await queryRunner.query(`DROP TABLE "courses"`);
    }

}
