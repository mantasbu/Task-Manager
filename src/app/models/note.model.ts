import { Status } from './status.enum';

export interface Note {
    title: string;
    body: string;
    media?: any;
    status?: Status;
    created?: Date;
    edited?: Date;
    deleted?: Date;
    owner: string;
}
