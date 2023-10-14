import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

//@Index(['name,type']) //composite
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  //@Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}

/**
 * Indexes can help give our application both rapid random look ups and efficient access of ordered records.

* Use them whenever performance is vitally important for a certain Entity.
 */
