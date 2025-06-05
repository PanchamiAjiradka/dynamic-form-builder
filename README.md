# 🧩 Angular Dynamic Form Builder

This is a full-featured **Form Builder** application built using Angular and Angular Material. It provides an intuitive drag-and-drop interface to design custom forms, manage templates, and control access based on user roles.

---

## 🔗 Live Demo

👉 [https://dynamic-form-builder-okgw.vercel.app/login]

---

## ✨ Features

### 1. 🏗️ Form Builder Interface

Design forms with an interactive **drag-and-drop builder**:

- Supported field types:
  - ✅ Single-line Text Input
  - ✅ Multi-line Text Area
  - ✅ Dropdown Select (with customizable options)
  - ✅ Checkbox Groups
  - ✅ Radio Button Groups
  - ✅ Date Picker
- Configurable field properties:
  - Field label
  - Required/Optional toggle
  - Help text
  - Validation rules (min/max length)

---

### 2. 📋 Form Management

- 🔍 List view of all created form templates
- ✏️ Ability to edit existing templates
- 👀 Preview mode to test forms before publishing

---

### 3. 📨 Form Submission

- 👥 End-user interface for filling forms
- ✅ Real-time validation based on configuration
- 🔗 Submit to a mock API
- 🎯 Success/error notifications
- 🗃️ View submitted data

---

### 4. 🔐 Authorization

Two user roles implemented:

- 👑 **Admin**
  - Create, edit, delete form templates
  - View submitted responses

- 🙋‍♂️ **User**
  - Can only view and fill out forms

Includes:
- Login screen with role selection (`admin` or `user`)
- Password must contain atleast 8 characters, with atleast one uppercase, lowercase and special characters.
- Role-based routing and access control.

---

## 🛠️ Tech Stack

- **Angular**
- **Angular Material**
- **CDK Drag & Drop**
- **RxJS**
- **TypeScript**
- **SCSS**

---

## 🚀 Getting Started

To run the project locally:

```bash
git clone https://github.com/aliosmanyuksel/dynamic-form.git
cd dynamic-form
npm install
ng serve
