import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    tableName: 'integration',
    timestamps: false
})
export class IntegrationModel extends Model {

    @PrimaryKey
    @Column({
        type: DataType.UUID,

    })
    integration_id?: number;

    @Column({
        allowNull: true,
        type: DataType.INTEGER
    })
    developer_id?: number

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    company_name?: string

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    service_type?: string

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    status?: string

    @Column({
        allowNull: true,
        type: DataType.DATE
    })
    production_date?: string
    @Column({
        allowNull: true,
        type: DataType.DATE
    })
    start_lab_date?: string
    @Column({
        allowNull: true,
        type: DataType.DATE
    })
    end_lab_date?: string

    @Column({
        allowNull: true,
        type: DataType.INTEGER
    })
    cant_comercios?: number
    @Column({
        allowNull: true,
        type: DataType.INTEGER
    })
    cant_pos?: number
}