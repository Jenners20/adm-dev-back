import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { DeveloperModel } from "../model/developer.model";
import { IntegrationModel } from "../model/integration.model";



@Injectable()
export class DeveloperService {
    constructor(
        @InjectModel(DeveloperModel)
        private developerModel: typeof DeveloperModel,
        @InjectModel(IntegrationModel)
        private integrationModel:typeof IntegrationModel
    ) { }

    async findAll() {
        let developers = await this.developerModel.findAll();
        return developers
    }
async findIntegration(){
    let integration = await this.integrationModel.findAll();
    return integration
}
    async findbyId(id:number){
        let developers = await this.developerModel.findAll({where:{"developer_id":id}})
        return developers
    }
    
    async findIntegrationbyId(id:number){
        let integration = await this.integrationModel.findAll({where:{"developer_id":id}})
        return integration
    }
    async createIntegration(body:any){
        await this.integrationModel.create(body)
    }
    async createDeveloper(body:any){
        if(body.developer_id==0){
            const companyModelResponse = await this.developerModel.findAll();
            const ids = companyModelResponse.map(developer => developer['developer_id']);
            let aux = Math.max(...ids);
            aux = aux + 1;
            let bodyDB={
                "developer_id":body.developer_id,
                "developer_name":body.developer_name,
                "developer_company":body.developer_company,
                "certification_id":body.certification_id,
                "email":body.email,
                "phone":body.phone,
                "POS": body.POS,
                "program_name":body.program_name,
                "independent":body.independent,
            
            }
            await this.developerModel.create(bodyDB)
        }else{
            await this.developerModel.create(body)
        }
       
    }

}