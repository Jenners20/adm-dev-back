import { DeveloperModel } from "../model/developer.model";
import { IntegrationModel } from "../model/integration.model";
export declare class DeveloperService {
    private developerModel;
    private integrationModel;
    constructor(developerModel: typeof DeveloperModel, integrationModel: typeof IntegrationModel);
    findAll(): Promise<DeveloperModel[]>;
    findIntegration(): Promise<IntegrationModel[]>;
    findbyId(id: number): Promise<DeveloperModel[]>;
    findIntegrationbyId(id: number): Promise<IntegrationModel[]>;
    createIntegration(body: any): Promise<void>;
    createDeveloper(body: any): Promise<void>;
}
