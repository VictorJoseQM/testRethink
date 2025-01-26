import { MakerServices } from "src/domain/entities/enum/maker-services.enum";
export class CreateUserMakerDTO {
    //usuário geral do sistema
    name: string;
    lastName: string;
    identification: string;
    identificationType: string;
    phone: string;
    status: boolean;

    //Campos específicos de maker
    services: MakerServices;
    nameMaker: string;
    description: string;
    rating: number;
    statusMaker: boolean;
}