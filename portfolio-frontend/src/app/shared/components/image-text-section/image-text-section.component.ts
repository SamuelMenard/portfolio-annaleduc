import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ImageTextSectionType } from "../../enums/image-text-section-type.enum";
import { ImageTextSectionContent } from "../../models/image-text-section-content.model";

@Component({
    selector: "app-image-text-section",
    templateUrl: "./image-text-section.component.html",
    styleUrls: ["./image-text-section.component.scss"]
})
export class ImageTextSectionComponent {
    @Input() content?: ImageTextSectionContent;
    @Output() buttonClick = new EventEmitter<string>();

    ImageTextSectionType = ImageTextSectionType;

    public onActionClicked(): void {
        this.buttonClick.emit(this.content?.buttonRoute);
    }
}
