import { DataEntity } from "../data-entity";

export interface ProjectBase extends DataEntity {
    projectId: string;
    title: string;
}
