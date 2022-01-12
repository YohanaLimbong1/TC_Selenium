package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageobject.SignupPagePO;
import utilities.ThreadManager;

public class SignupSteps {
    private WebDriver driver = ThreadManager.getDriver();
    private SignupPagePO signupPage = new SignupPagePO(driver);


    @When("user input on twitty signup username {string}")
    public void userInputOnTwittySignupUsername(String username) {

        signupPage.enterName(username);
    }

    @When("user input on twitty signup Password {string}")
    public void userInputOnTwittySignupPassword(String password) {

        signupPage.enterPassword(password);
    }

    @Then("user see Next Button is disable")
    public void userSeeNextButtonIsDisable() {
        Assert.assertTrue(signupPage.checkNextButtonIsDisable());

    }

    @When("user input on twitty signup Phone {string}")
    public void userInpuOntTwittySignPhone(String phone) {

        signupPage.enterPhone(phone);
    }

    @Then("user click on twitty Next button")
    public void userClickOnTwittyNextButton() throws InterruptedException {
        signupPage.clickOnNextButton();
    }

    @And("user select on twityy signup date Month of birth")
    public void userSelectOnTwityySignupDateMonthOfBirth() throws InterruptedException {
        signupPage.selectMonth();
    }

    @And("user select on twityy signup date day  of birth")
    public void userSelectOnTwityySignupDateDayOfBirth() throws InterruptedException {
        signupPage.selectDay();
    }

    @And("user select on twityy signup date Year  of birth")
    public void userSelectOnTwityySignupDateYearOfBirth() throws InterruptedException {
        signupPage.selectYear();
    }
}
