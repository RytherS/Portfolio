import { ProjectBase } from "./project-base";
import { ProjectMedia } from "./project-media";

export interface ProjectInfo extends ProjectBase {
    description: string;
    media: ProjectMedia[];
}
