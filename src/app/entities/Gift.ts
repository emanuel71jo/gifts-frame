import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Party from './Party';

@Entity('gifts')
class Gift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  countGifts: number;

  @Column()
  partyId: string;

  @ManyToOne((type) => Party, (party) => party.gifts)
  party: Party;
}

export default Gift;
