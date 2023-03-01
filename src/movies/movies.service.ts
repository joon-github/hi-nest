import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entirty';

//가짜 데이터 베이스
@Injectable()
export class MoviesService {
  private movies: Movie[] = [new Movie()];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === Number(id));
  }
}
