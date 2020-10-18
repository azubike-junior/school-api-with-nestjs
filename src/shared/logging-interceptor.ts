import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext): Observable<any> {
    console.log('Before...');
    const ctx: any = GqlExecutionContext.create(context);
    const resolverName = ctx.constructorRef.name;
    const info = ctx.getInfo();

    return;
  }
}
