"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.port || '4040');
    common_1.Logger.log(console.log(`server running on port 4040`));
}
bootstrap();
//# sourceMappingURL=main.js.map