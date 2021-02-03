import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AllowedRoles } from './role.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<AllowedRoles>(
      'roles',
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }

    //We take the ExecutionContext into GQL
    const gqlContext = GqlExecutionContext.create(context).getContext();
    console.log(gqlContext.token);

    const user: User = gqlContext['user'];
    if (!user) {
      //block the request
      return false;
    }
    //let the request continue
    if (roles.includes('Any')) {
      return true;
    }
    return roles.includes(user.role);
  }
}
