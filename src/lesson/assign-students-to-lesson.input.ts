import { Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

export class AssignStudentToLessonInput {
  @IsUUID()
  @Field((returns) => [ID])
  studentsIds: string[];

  @IsUUID('4', { each: true })
  @Field((type) => ID)
  lessonId: string;
}
