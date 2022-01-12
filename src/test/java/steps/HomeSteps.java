package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageobject.HomePagePO;
import utilities.SeleniumHelpers;
import utilities.ThreadManager;

public class HomeSteps {
    private final WebDriver driver = ThreadManager.getDriver();
    private final HomePagePO mainPage = new HomePagePO(driver);
    private final SeleniumHelpers selenium = new SeleniumHelpers(driver);

    @Given("user access page {string}")
    public void user_access_page(String url) {
        selenium.navigateToPage(url);
    }

    @Then("compare current url with {string}")
    public void compare_url(String url){
        Assert.assertEquals(url, selenium.getURL());
    }

    @When("user click on twitty sign up button on main page")
    public void user_click_on_twitty_sign_up_button_on_main_page() throws InterruptedException
    {
        mainPage.clickOnSignUpButton();
    }

}