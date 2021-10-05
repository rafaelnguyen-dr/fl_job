import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './AuthService';
import { PayloadRegister } from '../../resources';
import { UserRepository } from '../../entities/User';

@Controller()
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Inject()
  private readonly UserRepository: UserRepository;

  @Post('login')
  @HttpCode(200)
  async login(
    @Request() req,
  ): Promise<{ access_token: string; username: string }> {
    //todo call api

    // const user = await this.UserRepository.findOne({
    //   id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    // });

    // console.log(user);

    return {
      username: '1',
      access_token: '1',
    };
  }
  @Post('register')
  async register(@Body() PayloadRegister: PayloadRegister) {
    await this.UserRepository.save({
      ...PayloadRegister,
      password: await this.authService.makePassword(PayloadRegister.password),
    });
    return PayloadRegister;
  }
}
