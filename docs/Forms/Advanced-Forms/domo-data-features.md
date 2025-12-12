## Domo Data Features

Using the Toolbox, a user can select the following Domo data components to use in their form.

### Single Select and Multi Select Domo Dropdowns

- Choose **Domo Dropdown** for single select or **Multi-Select Domo Dropdown** for multi-select.
- Navigate to the **Property Editor** and find **Choices from a Domo Datasource**.
- Select a Domo datasource.
- Choose the **value to store** (the data saved to your dataset) from a property in the dataset.
- Choose the **value to display** (what users see in the dropdown) from a property in the dataset.

### File Upload

File upload questions store uploaded files in Domo's file storage system. Configure file type restrictions and size limits in the Property Editor.

### Dynamic Matrix Bulk Entry and Single Line Entry

- **Bulk Entry**: All answers from a row are combined into a single dataset column (array format).
- **Single Line Entry**: Each row and column pair creates a separate dataset column.

### Domo Variables

Domo Variables allow you to pre-populate form fields with data from Domo datasets based on the current user or other form responses.

**Available preset variables:**

- Domo User ID
- Domo User Email

**Creating custom Domo Variables:**

1. Select **Create Domo Variable expressions**.
2. Choose a **Domo Datasource**.
3. Choose a **Compare Column** to select a column from the dataset.
4. Choose a **Form value** to select a variable from the form.
5. (Optional) Select **Add Condition** to filter data further.
6. Select the **value to store** from the datasource whose row will be used as the Domo Variable.
7. Enter an **alias** for the Domo Variable.
8. Click **Add** or press Enter to add the Domo Variable.
9. Click **Apply**.

#### Enable Export for Domo Variables

Check the checkbox for any variable to export it to the form's dataset with each user's submission.

#### Set Question Value Using Domo Datasource

1. Select **Set Value using Domo Datasources**.
2. Choose a **Compare Column** to select a column from the dataset.
3. Choose a **Form value** to select a Domo Variable from the form.
4. (Optional) Select **Add Condition** to filter data further.
5. Choose a column or Domo Variable to use as the prefill value.
6. Click **Apply**.

### Domo Groups

Using Domo Groups, users can control the visibility and editability of panels, pages, or questions based on group membership. Furthermore, users can set question values based on group membership.

**Available options:**

- **Make the question visible to these groups** — When visibility is restricted, only selected groups can view the question.
- **Disable the read only mode for groups** — Selected groups can edit the question even when read-only mode is enabled for others.
- **Set value for these groups** with **Set value expression** — Automatically populate question values for specific groups using expressions.
