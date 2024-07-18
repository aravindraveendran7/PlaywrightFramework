import test, { expect } from "@playwright/test";
import { Env } from "../frameworkconfig/env";
import LoginPage from "../pages/loginPage";

test("add employee", async ({ page }) => {
  await page.goto(Env.BASE_URL);
  const loginPage = new LoginPage(page);
  loginPage.login(Env.USER_NAME, Env.PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "PIM" }).click();
  // await page.getByRole("link", { name: "Add Employee" }).click();
  // await page.getByPlaceholder("First Name").fill("Test");
  // await page.getByPlaceholder("Last Name").fill("employee");
  // //   await page.locator("form").getByRole("textbox").nth(4).fill("0900");
  // await page.locator('input:below(:text("Employee Id"))').fill("0987");
  // await page.getByRole("button", { name: "Save" }).click();
  // //   await page.getByRole("heading", { name: "Test employee" }).click();
  // await expect(
  //   page.getByRole("heading", { name: "Test employee" })
  // ).toBeVisible();
});
