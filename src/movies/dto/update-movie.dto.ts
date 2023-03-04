import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMoviDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
