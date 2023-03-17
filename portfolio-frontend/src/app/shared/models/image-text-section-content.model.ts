import { ImageTextSectionType } from "../enums/image-text-section-type.enum";

export interface ImageTextSectionContent {
    sectionTitle: string;
    sectionDescription: string;
    imageUrl: string;
    imageHeightVw: number;
    imageTextSectionType: ImageTextSectionType;
    buttonText?: string;
    buttonRoute?: string;
}
