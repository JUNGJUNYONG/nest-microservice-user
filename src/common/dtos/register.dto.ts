import {
  IsEmail,
  IsNotEmpty,
  IsUUID,
  Length,
  Matches,
  NotContains,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({
    message: 'id cannot be empty or whitespace',
  })
  @IsUUID()
  id: string;

  @IsNotEmpty({
    message: 'Email cannot be empty or whitespace',
  })
  @IsEmail({
    message: 'Email should be email',
  })
  email: string;

  @IsNotEmpty({
    message: 'Password cannot be empty or whitespace',
  })
  @NotContains(' ', {
    message: 'Password cannot be empty or whitespace',
  })
  @Length(6, 100, {
    message: 'Password must be between 6 and 100 characters long',
  })
  password: string;

  @Length(1, 30, {
    message: 'First name must be between 1 and 30 characters long',
  })
  firstName: string;

  @Length(1, 30, {
    message: 'Last name must be between 1 and 30 characters long',
  })
  lastName: string;

  @Length(3, 50, {
    message: 'Display name must be between 3 and 30 characters long',
  })
  @Matches(/^[\w](?!.*?\.{2})[\w. ]{1,30}[\w]$/, {
    message:
      'Nickname can include only letters, numbers and space between words and be max 30 characters long',
  })
  displayName: string;
}
