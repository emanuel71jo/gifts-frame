import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { hashSync } from 'bcryptjs';
import Party from './Party';

@Entity('celebrants')
class Celebrant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Party, (party) => party.celebrant)
  parties: Party[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 8);
  }
}

export default Celebrant;
