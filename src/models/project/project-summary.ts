import { ProjectBase } from "./project-base";
import { ProjectMedia } from "./project-media";

export interface ProjectSummary extends ProjectBase {
    summary: string;
    media: ProjectMedia;
}
