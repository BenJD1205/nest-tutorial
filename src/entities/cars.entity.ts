import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cars')
export class CarsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    productName:string;

    @Column()
    price:number;

    @Column()
    category_id:number;
}