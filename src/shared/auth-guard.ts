import { Injectable, CanActivate, ExecutionContext, HttpStatus, HttpException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
	async canActivate (context: ExecutionContext): Promise<boolean> {
		const ctx: any = GqlExecutionContext.create(context).getContext();
		if (!ctx.headers.authorization) {
			throw new HttpException('Unauthorised Access', HttpStatus.UNAUTHORIZED);
		}
		const token = await this.verifyToken(ctx.headers.authorization);
		ctx.user = token;
		return true;
	}

	private async verifyToken (auth: string) {
		if (auth.split(' ')[0] !== 'Bearer') {
			throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
		}
		const token = auth.split(' ')[1];
		try {
			const decoded = jwt.verify(token, process.env.SECRET);
			return decoded;
		} catch (e) {
			const message = 'Token error' + (e.message || e.name);
			throw new HttpException(message, HttpStatus.FORBIDDEN);
		}
	}
}
