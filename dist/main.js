"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const server_host = process.env.DB_HOST || '0.0.0.0';
    const server_port = process.env.PORT || 80;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(server_port, server_host, () => {
        common_1.Logger.log(console.log(`server running on port 4040`));
    });
    ;
}
bootstrap();
//# sourceMappingURL=main.js.map