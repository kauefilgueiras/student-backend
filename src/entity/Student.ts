import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    ra: string;

    @Column({
        default: false
    })
    matriculado: boolean = true;

    @CreateDateColumn()
    nascimento: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

