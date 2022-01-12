package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageobject.LoginPagePO;
import utilities.ThreadManager;

public class LoginSteps {
    private WebDriver driver = ThreadManager.getDriver();
    private LoginPagePO loginPage = new LoginPagePO(driver);


    @When("user input on twitty login username {string}")
    public void userInputOnTwittyLoginUsername(String username) {

        loginPage.enterUsername(username);
    }

    @And("user input on twityy login password {string}")
    public void userInputOnTwityyLoginPassword(String password) {

        loginPage.enterPassword(password);
    }

    @And("user click on twitty Login button")
    public void userClickOnTwittyLoginButton() throws InterruptedException {
        loginPage.clickOnLoginButon();
    }

    @And("user click on twitty homepage button tweet")
    public void userClickOnTwittyHomepageButtonTweet() throws InterruptedException {
        loginPage.clickOnTweetButon();
    }

    @Then("system display twitty login alert box is {string}")
    public void systemDisplayTwittyLoginAlertBoxIs(String messageError) throws InterruptedException {
        Assert.assertEquals(loginPage.getLoginMessageError(), messageError, "Wrong credentials");
    }
}

