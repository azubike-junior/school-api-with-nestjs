"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionService = void 0;
const common_1 = require("@nestjs/common");
require("dotenv/config");
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
let DatabaseConnectionService = class DatabaseConnectionService {
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: DB_HOST,
            username: DB_USERNAME,
            database: DB_NAME,
            port: Number(DB_PORT),
            password: DB_PASSWORD,
            synchronize: true,
            migrations: [
                'build/migrations/*.ts'
            ],
            dropSchema: false,
            logging: true,
            entities: [
                'dist/**/*{.ts,.js}'
            ],
            cli: {
                entitiesDir: 'src/entity',
                migrationsDir: 'src/migrations',
                subscribersDir: 'src/subscriber'
            }
        };
    }
};
DatabaseConnectionService = __decorate([
    common_1.Injectable()
], DatabaseConnectionService);
exports.DatabaseConnectionService = DatabaseConnectionService;
//# sourceMappingURL=database.connection.service.js.map