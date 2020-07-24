import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreatePartyReferenceColumn1595591615717
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'parties',
      new TableForeignKey({
        columnNames: ['celebrantId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'celebrants',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('parties');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('celebrantId') !== -1
    );
    await queryRunner.dropForeignKey('parties', foreignKey);
  }
}
