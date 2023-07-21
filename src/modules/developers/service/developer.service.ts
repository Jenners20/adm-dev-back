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
        private integrationModel: typeof IntegrationModel
    ) { }

    async findAll() {
        let developers = await this.developerModel.findAll();
        return developers
    }

    async findIntegration() {
        let integration = await this.integrationModel.findAll();
        return integration
    }

    async findbyId(id: number) {
        let developers = await this.developerModel.findAll({ where: { "developer_id": id } })
        return developers
    }

    async findIntegrationbyId(id: number) {
        try{
            let integration = await this.integrationModel.findAll({ where: { "developer_id": id } })
            return integration
        }catch(err:any){
            return {"success":false,"data":{},"reason":"Invalid Parameters"}
        }
    }

    async createIntegration(body: any) {
        let integrationResponse = await this.integrationModel.findAll()
        const ids = integrationResponse.map(developer => developer['integration_id']);
            let aux = Math.max(...ids);
            if (integrationResponse.length==0) {
                aux=1
            }else{
                aux = aux + 1;
            }
            
        console.log(body)
        let integrationDB={
            "integration_id":aux,
            "developer_id": body.developer_id,
            "company_name": body.company_name,
            "service_type": body.service_type,
            "status": body.status,
            "production_date": body.production_date,
            "start_lab_date": body.start_lab_date,
            "end_lab_date": body.end_lab_date,
            "cant_comercios": body.cant_comercios,
            "cant_pos":body.cant_pos
        }
        await this.integrationModel.create(integrationDB)
    }

    async createDeveloper(body: any) {
        console.log(body)
        
            const companyModelResponse = await this.developerModel.findAll();
            const ids = companyModelResponse.map(developer => developer['developer_id']);
            let aux = Math.max(...ids);
            if (companyModelResponse.length==0) {
                aux=1
            }else{
                aux = aux + 1;
            }
            
            let bodyDB = {
                "developer_id": aux,
                "developer_name": body.developer_name,
                "developer_company": body.developer_company,
                "certification_id": body.certification_id,
                "email": body.email,
                "phone": body.phone,
                "POS": body.POS,
                "program_name": body.program_name,
                "independent": body.independent,
                

            }
            await this.developerModel.create(bodyDB)
        

    }
    async deleteDeveloper(id:number){
        await this.developerModel.destroy({where:{"developer_id":id}})
    }
    async deleteIntegration(id:number){
        await this.integrationModel.destroy({where:{"integration_id":id}})
    }
    async getIntegrationbyDate(date:string){
        let integrations = await this.integrationModel.findAll({where:{"status":date}})
        return integrations
    }
    async updateIntegration(id:number, status:string){
        await this.integrationModel.findOne({where:{"integration_id":id}}).then(integration =>{
            integration.update({"status":status}).catch(updated =>console.log(updated))
        })
    }
}