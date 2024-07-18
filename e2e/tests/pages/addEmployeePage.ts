import { Page } from "@playwright/test";

class AddEmployee {
  constructor(private readonly page: Page) {}

  private readonly firstNameTextBox = this.page.getByPlaceholder("First Name");
  private readonly lastNameTextBox = this.page.getByPlaceholder("Last Name");
  private readonly saveButton = this.page.getByRole("button", { name: "Save" });

  async addEmployee(firstName: string, lastName: string) {
    this.firstNameTextBox.fill(firstName);
    this.lastNameTextBox.fill(lastName);
  }
}
export default AddEmployee;
