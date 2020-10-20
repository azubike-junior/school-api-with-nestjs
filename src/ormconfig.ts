// import {ConnectionOptions} from 'typeorm';
// import 'dotenv/config';
// const { DB_HOST, DB_PORT, DEV_DB, DB_PASSWORD, DATABASE_URL, DB_NAME, NODE_ENV } = process.env;

// const env = NODE_ENV === 'development' ? DEV_DB : DATABASE_URL

// const config: ConnectionOptions = {
//     type: 'postgres',
//       url: env,
//       synchronize: false,
//       migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
//       migrationsRun: true,
//       dropSchema: false,
//       logging: false,
//       entities: ['dist/**/*{.ts,.js}'],
//       cli: {
//         entitiesDir: 'src/entity',
//         migrationsDir: 'src/migrations',
//         subscribersDir: 'src/subscriber',
//     },
// };

// export = config;