import { Controller, Get, HttpStatus, Post, Res, Body, Param, Delete,Put } from "@nestjs/common";
import { DeveloperService } from "../service/developer.service";

@Controller('developer')
export class DeveloperController {
    constructor(
        private readonly developerService: DeveloperService
    ) { }

    @Get('')
    async getDeveloper(@Res() response,) {

        let developer = await this.developerService.findAll()
        return response.status(HttpStatus.OK).json({
            developer
        })

    }
    @Delete('/integracion/:id')
    async deleteIntegrationbyId(@Res() response, @Param('id') id: number) {
        await this.developerService.deleteIntegration(id)
        return response.status(HttpStatus.OK).json({
            "result": 'done'
        })
    }
    @Delete('/:id')
    async deleteDeveloperbyId(@Res() response, @Param('id') id: number) {
        await this.developerService.deleteDeveloper(id)
        return response.status(HttpStatus.OK).json({
            "result": 'done'
        })
    }
    @Get('/:id')
    async getDeveloperbyId(@Res() response, @Param('id') id: number) {
        const result = await this.developerService.findbyId(id);
        return response.status(HttpStatus.OK).json({
            result
        });
    }

    @Get('/integration/:id')
    async getIntegrationrbyId(@Res() response, @Param('id') id: number) {
        const result = await this.developerService.findIntegrationbyId(id);
        return response.status(HttpStatus.OK).json({
            result
        });
    }
    @Post('')
    async createDeveloper(@Res() response, @Body() body) {
        try {
            await this.developerService.createDeveloper(body)
            return response.status(HttpStatus.OK).json({
                status: 'done'
            })
        } catch (err: any) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                "success": false,

            })
        }
    }

    @Post('/integration')
    async createIntegration(@Res() response, @Body() body) {
        try {
            await this.developerService.createIntegration(body)
            return response.status(HttpStatus.OK).json({
                status: 'done'
            })
        } catch (err: any) {
            console.log(err)
            return response.status(HttpStatus.BAD_REQUEST).json({
                "success": false,
                status: 'done'
            })
        }
    }
    @Get('/find/integration')
    async getIntegration(@Res() response) {
        let result = await this.developerService.findIntegration();
        return response.status(HttpStatus.OK).json({
            result
        });
    }
    @Get('/find/integration/bydate/:date')
    async getIntegrationbydate(@Res() response, @Param('date') date: string) {
        console.log(1)
        let result = await this.developerService.getIntegrationbyDate(date);
        console.log(result)
        return response.status(HttpStatus.OK).json({
            result
        })
    }
    @Put('/integracion/:id/status/:status')
    async updateIntegration(@Res() response, @Param('id') id:number, @Param('status') status:string){
        try{
            await this.developerService.updateIntegration(id,status);
            console.log('----')
            return response.status(HttpStatus.OK).json({
                "success": true,
                "data": {},
                "reason": "",
            })
        }catch(err:any){
            
        }
    }
    @Post('/file')
    async addIntegration(@Res() response, @Body() body:any){
        try{
            await this.developerService.saveForm(body)
            await this.developerService.insertDB(body.name)
            return response.status(HttpStatus.OK).json({
                "success": true,
                "data": {body},
                "reason": "",
            })
        }catch(err:any){
            return response.status(HttpStatus.BAD_REQUEST).json({
                "success": false,
                "data": null,
                "reason": "Invalid Parameters",
            })
        }
    }
}