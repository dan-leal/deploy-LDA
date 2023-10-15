/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { MythService } from './myth.service';
import { CreateMythDto } from './dto/create-myth.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class MythController {
    private readonly mythService;
    private jwtService;
    constructor(mythService: MythService, jwtService: JwtService);
    listarMyth(): Promise<{
        message: string;
        myths: (import("mongoose").Document<unknown, {}, import("./schemas/myth.schema").MythDocument> & import("./schemas/myth.schema").Myth & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    cadastrarMyth(req: Request, createMythDto: CreateMythDto): Promise<import("./schemas/myth.schema").Myth>;
    encontrarMyth(titulo: string): Promise<import("./schemas/myth.schema").Myth>;
    deletarMyth(titulo: string): Promise<any>;
}
