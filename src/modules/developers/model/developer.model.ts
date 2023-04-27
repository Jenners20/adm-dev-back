import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    tableName: 'developer',
    timestamps: false
})
export class DeveloperModel extends Model {

    @PrimaryKey
    @Column({
        type: DataType.UUID,

    })
    developer_id?: number;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    developer_name?:string

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    developer_company?:string

    @Column({
        allowNull: true,
        type: DataType.INTEGER
    })
    certification_id?:number

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    email?:string

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    phone?:string

    @Column({
        allowNull: true,
        type: DataType.BOOLEAN
    })
    pos?:boolean

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    program_name?:string

    @Column({
        allowNull: true,
        type: DataType.BOOLEAN
    })
    independent?:boolean
    @Column({
        allowNull: true,
        type: DataType.DATE
    })
    start_date?:string
    @Column({
        allowNull: true,
        type: DataType.DATE
    })
    last_date?:string
   
}