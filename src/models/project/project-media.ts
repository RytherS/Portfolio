import { ProjectBase } from "./project-base";

export interface ProjectMedia extends ProjectBase {
    order: number;
    data: Uint32Array;
}
