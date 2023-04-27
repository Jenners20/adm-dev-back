import { Controller, Get, HttpStatus, Post, Res, Body, Param } from "@nestjs/common";
import { DeveloperService } from "../service/developer.service";

@Controller('developer')
export class DeveloperController {
    constructor(
        private readonly developerService: DeveloperService
    ) { }

    @Get('')
    async getDeveloper(@Res() response) {
        const result = await this.developerService.findAll();
        return response.status(HttpStatus.OK).json({
            result
        });
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
        await this.developerService.createDeveloper(body)
        return response.status(HttpStatus.OK).json({
            status: 'done'
        })
    }

    @Post('/integration')
    async createIntegration(@Res() response, @Body() body) {
        await this.developerService.createIntegration(body)
        return response.status(HttpStatus.OK).json({
            status: 'done'
        })
    }
    @Get('/integration')
    async getIntegration(@Res() response) {
        let result = await this.developerService.findIntegration();
        return response.status(HttpStatus.OK).json({
            result
        });
    }
}