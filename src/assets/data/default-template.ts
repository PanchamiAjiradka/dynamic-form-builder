export const defaultTemplates = [
  {
    name: "Simple User Form",
    fields: [
      {
        id: "e16a03ff-9bc7-46f5-83b9-67cf2d935a24",
        type: "text",
        label: "Name",
        required: true,
        helpText: "First Name and Last Name",
      },
      {
        id: "a796ceb7-f549-49da-be6e-373f833b8b18",
        type: "date",
        label: "Date of Birth",
        required: false,
        helpText: "",
      },
      {
        id: "b17c7ead-356f-404e-bcd0-71f8426f00de",
        type: "textarea",
        label: "Email",
        required: true,
        helpText: "Email",
      },
      {
        id: "0dc0b474-3bd5-46ae-91b8-0207284a8364",
        type: "dropdown",
        label: "Martial Status",
        required: false,
        helpText: "",
        options: [
          { label: "Married", value: "married" },
          { label: "Single", value: "single" },
        ],
      },
      {
        id: "1bf85c32-02ef-4544-94c6-38d81c5a1950",
        type: "dropdown",
        label: "Gender",
        required: true,
        helpText: "",
        options: [
          { label: "Female", value: "female" },
          { label: "Male", value: "male" },
        ],
      },
    ],
  },
  {
    name: "General Information Collection",
    fields: [
      {
        id: "e16a03ff-9bc7-46f5-83b9-67cf2d935a24",
        type: "text",
        label: "Name",
        required: true,
        helpText: "First Name and Last Name",
      },
      {
        id: "a796ceb7-f549-49da-be6e-373f833b8b18",
        type: "date",
        label: "Date of Birth",
        required: false,
        helpText: "",
      },
      {
        id: "b17c7ead-356f-404e-bcd0-71f8426f00de",
        type: "textarea",
        label: "Email",
        required: true,
        helpText: "Email",
      },
      {
        id: "0dc0b474-3bd5-46ae-91b8-0207284a8364",
        type: "dropdown",
        label: "Martial Status",
        required: false,
        helpText: "",
        options: [
          { label: "Married", value: "married" },
          { label: "Single", value: "single" },
          { label: "Divorced", value: "divorced" },
        ],
      },
      {
        id: "1bf85c32-02ef-4544-94c6-38d81c5a1950",
        type: "dropdown",
        label: "Gender",
        required: true,
        helpText: "",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
      },
    ],
  },
];
