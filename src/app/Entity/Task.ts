import {Tag} from "./Tag";
export class Task{
  id:number;
  startDateTime  : string;
  endDateTime: Date;
  name: string;
  description: string;
  tags:Tag[];


  constructor(id:number,startDateTime: string, endDateTime: Date, name: string, description: string, tags: Tag[]) {
    this.id=id;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.name = name;
    this.description = description;
    this.tags = tags;
  }
}
