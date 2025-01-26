import { MakerServices } from "src/domain/entities/enum/maker-services.enum";
export class CreateMakerDTO {
    services: MakerServices;
    name: string;
    description: string;
    rating: number;
    status: boolean;
}
