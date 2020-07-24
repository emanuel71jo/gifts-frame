import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateGiftReferenceColumn1595591517217
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'gifts',
      new TableForeignKey({
        columnNames: ['partyId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'parties',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('gifts');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('partyId') !== -1
    );
    await queryRunner.dropForeignKey('gifts', foreignKey);
  }
}
