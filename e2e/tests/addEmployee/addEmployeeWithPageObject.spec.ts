import test, { expect } from "@playwright/test";
import { Env } from "../frameworkconfig/env";
import AddEmployee from "../pages/addEmployeePage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

test("add employee", async ({ page }) => {
  await page.goto(Env.BASE_URL);
  const loginPage = new LoginPage(page);
  loginPage.login(Env.USER_NAME, Env.PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "PIM" }).click();
  const homePage = new HomePage(page);
  (await homePage.getLeftMenuComponent()).selectFromLeftMenu("PIM");
  (await homePage.getTopMenuComponent()).selectTopMenuItem("Add Employee");

  const addEmployee = new AddEmployee(page);
  await addEmployee.addEmployee("SRK", "Mumbai");
});
