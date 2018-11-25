import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isComplete: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
