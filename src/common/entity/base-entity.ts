import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  //   UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  //   @UpdateDateColumn({
  //     type: 'timestamp',
  //   })
  //   updatedAt: Date;

  // 빨간줄이 뜨는 사유를 확인할 수 없음.
}
