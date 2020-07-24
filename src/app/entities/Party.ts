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
  party_date_at: Date;

  @Column()
  celebrant_id: string;

  @ManyToOne((type) => Celebrant, (celebrant) => celebrant.parties)
  celebrant: Celebrant;

  @OneToMany((type) => Gift, (gift) => gift.party)
  gifts: Gift[];
}

export default Party;
