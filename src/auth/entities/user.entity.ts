import { BaseEntity } from '../../common/entity/base-entity';
import { Column } from 'typeorm';

export type UserRole = 'admin' | 'user';
// user Role을 지정해주는 타입, enum타입과 어떤 차이점이 있을까?

export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  phone: string;

  @Column({ type: 'varchar', length: 50 })
  role: UserRole;
}
