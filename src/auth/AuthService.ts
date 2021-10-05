import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Hasher } from '../bcrypt/Hasher';
import Credentials from '../../entities/Credential';

@Injectable()
export class AuthService {
  @Inject()
  private readonly jwtService: JwtService;

  @Inject('Hasher')
  private readonly hasher: Hasher;

  async checkPassword(
    plainPassword: string,
    credential: Credentials,
  ): Promise<boolean> {
    return await this.hasher.compare(plainPassword, credential.password);
  }

  async makeAccessToken(credential: Credentials): Promise<string> {
    return this.jwtService.sign(credential.toJSON());
  }

  async makePassword(password: string): Promise<string> {
    return await this.hasher.generate(password);
  }
}
