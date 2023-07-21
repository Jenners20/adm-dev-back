import { Model } from "sequelize-typescript";
export declare class IntegrationModel extends Model {
    integration_id?: number;
    developer_id?: number;
    company_name?: string;
    service_type?: string;
    status?: string;
    production_date?: string;
    start_lab_date?: string;
    end_lab_date?: string;
    cant_comercios?: number;
    cant_pos?: number;
}
