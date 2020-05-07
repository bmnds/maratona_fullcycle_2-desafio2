import {MigrationInterface, QueryRunner} from "typeorm";

export class Maratona1588878332570 implements MigrationInterface {
    name = 'Maratona1588878332570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maratona" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "aula" varchar NOT NULL, "url" varchar)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
    }

}
