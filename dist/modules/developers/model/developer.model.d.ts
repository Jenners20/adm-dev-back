import { Model } from "sequelize-typescript";
export declare class DeveloperModel extends Model {
    developer_id?: number;
    developer_name?: string;
    developer_company?: string;
    certification_id?: number;
    email?: string;
    phone?: string;
    pos?: boolean;
    program_name?: string;
    independent?: boolean;
    start_date?: string;
    last_date?: string;
}
