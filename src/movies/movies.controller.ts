import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entirty';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  private readonly moviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.moviesService.create(data);
  }

  @Delete('/:id')
  remove(@Param('id') id: number): boolean {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(id, updateData);
  }
}
