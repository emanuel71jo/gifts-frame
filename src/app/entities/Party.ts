import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Celebrant from './Celebrant';
import Gift from './Gift';

@Entity('parties')
class Party {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  partyDateAt: Date;

  @Column()
  celebrantId: string;

  @ManyToOne((type) => Celebrant, (celebrant) => celebrant.parties)
  celebrant: Celebrant;

  @OneToMany((type) => Gift, (gift) => gift.party)
  gifts: Gift[];
}

export default Party;
