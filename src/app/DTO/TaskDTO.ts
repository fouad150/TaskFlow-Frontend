export class TaskDTO{
  startDateTime  : string;
  endDateTime: Date;
  name: string;
  description: string;
  tags:Tag[];


  constructor(id:number,startDateTime: string, endDateTime: Date, name: string, description: string, tags: Tag[]) {
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.name = name;
    this.description = description;
    this.tags = tags;
  }
}
