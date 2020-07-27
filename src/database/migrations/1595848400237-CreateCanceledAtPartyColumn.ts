import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateCanceledAtPartyColumn1595848400237
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'parties',
      new TableColumn({
        type: 'date',
        name: 'canceledAt',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('parties', 'canceledAt');
  }
}
