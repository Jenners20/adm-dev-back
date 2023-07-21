import { DeveloperService } from "../service/developer.service";
export declare class DeveloperController {
    private readonly developerService;
    constructor(developerService: DeveloperService);
    getDeveloper(response: any): Promise<any>;
    deleteIntegrationbyId(response: any, id: number): Promise<any>;
    deleteDeveloperbyId(response: any, id: number): Promise<any>;
    getDeveloperbyId(response: any, id: number): Promise<any>;
    getIntegrationrbyId(response: any, id: number): Promise<any>;
    createDeveloper(response: any, body: any): Promise<any>;
    createIntegration(response: any, body: any): Promise<any>;
    getIntegration(response: any): Promise<any>;
    getIntegrationbydate(response: any, date: string): Promise<any>;
    updateIntegration(response: any, id: number, status: string): Promise<any>;
}
