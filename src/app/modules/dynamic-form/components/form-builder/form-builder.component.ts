import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { DynamicFormModule } from "../../dynamic-form.module";
import { TemplateListComponent } from "../template-list/template-list.component";
import { DateAutoFormatDirective } from "../../directives/date-auto-format.directive";
import { Router } from "@angular/router";

export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  helpText?: string;
  options?: { label: string; value: string }[];
  validations?: {
    minLength?: number;
    maxLength?: number;
    minDate?: Date;
    maxDate?: Date;
  };
}

@Component({
  selector: "app-form-builder",
  standalone: true,
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.scss"],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    TemplateListComponent,
    DateAutoFormatDirective,
  ],
})
export class FormBuilderComponent implements OnInit {
  templateName: string = "";
  ngOnInit(): void {
    const isNew = localStorage.getItem("creatingNewTemplate");

    if (isNew === "true") {
      localStorage.removeItem("creatingNewTemplate");
      this.formFields = [];
      this.templateName = "";
    } else {
      const savedData = localStorage.getItem("editingTemplateData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        this.formFields = parsedData.fields || [];
        this.templateName = parsedData.name || "";
        console.log("Loaded fields:", this.formFields);
      }
    }
  }

  availableFields = [
    { type: "text", label: "Text Field" },
    { type: "date", label: "Date Picker" },
    { type: "textarea", label: "Text Area" },
    {
      type: "dropdown",
      label: "Dropdown",
      options: [
        { label: "Option 1", value: "opt1" },
        { label: "Option 2", value: "opt2" },
      ],
    },
    {
      type: "checkbox",
      label: "Checkboxes",
      options: [
        { label: "Check 1", value: "chk1" },
        { label: "Check 2", value: "chk2" },
      ],
    },
    {
      type: "radio",
      label: "Radio Buttons",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
    },
  ];

  formFields: FormField[] = [];
  selectedField: FormField | null = null;

  constructor(private router: Router) {}

  onDrop(event: CdkDragDrop<any>) {
    const type = event.item.data.type;
    const newField: FormField = {
      id: uuidv4(),
      type: type,
      label: event.item.data.label || "Untitled",
      required: false,
      helpText: "",
      options: ["dropdown", "checkbox", "radio"].includes(type)
        ? event.item.data.options
          ? JSON.parse(JSON.stringify(event.item.data.options))
          : [
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]
        : undefined,
    };
    this.formFields.push(newField);
  }

  selectField(field: FormField) {
    this.selectedField = field;
    console.log(field);
    this.selectedField.validations ??= {};
  }

  addOption() {
    if (this.selectedField && this.selectedField.options) {
      this.selectedField.options.push({
        label: "New Option",
        value: "new_option",
      });
    }
  }

  removeOption(index: number) {
    if (this.selectedField && this.selectedField.options) {
      this.selectedField.options.splice(index, 1);
    }
  }

  deleteField(fieldToDelete: any) {
    this.formFields = this.formFields.filter((field) => field.id !== fieldToDelete.id);
    if (this.selectedField?.id === fieldToDelete.id) {
      this.selectedField = null;
    }
  }

  saveTemplate() {
    let name = prompt("Enter template name:", this.templateName || "");
    if (!name) {
      alert("Template name is required");
      return;
    }

    this.templateName = name;

    const template = {
      name: this.templateName,
      fields: this.formFields,
    };

    const savedTemplates: any[] = JSON.parse(
      localStorage.getItem("formTemplates") || "[]"
    );

    const existingIndex = savedTemplates.findIndex((t) => t.name === this.templateName);

    if (existingIndex > -1) {
      savedTemplates[existingIndex] = template;
      this.router.navigate(["/list"]);
    } else {
      savedTemplates.push(template);
      this.router.navigate(["/list"]);
    }
    localStorage.setItem("formTemplates", JSON.stringify(savedTemplates));
    alert("Template saved successfully!");
    this.router.navigate(["/list"]);
  }

  back() {
    this.router.navigate(["/list"]);
  }
}
