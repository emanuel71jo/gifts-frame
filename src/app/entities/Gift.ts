import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('parties')
class Gift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('name')
  name: string;

  @Column('count_gifts')
  count_gifts: number;

  @Column('uuid')
  party_id: string;
}

export default Gift;
