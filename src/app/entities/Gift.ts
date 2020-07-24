import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Party from './Party';

@Entity('gifts')
class Gift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  count_gifts: number;

  @Column()
  party_id: string;

  @ManyToOne((type) => Party, (party) => party.gifts)
  party: Party;
}

export default Gift;
