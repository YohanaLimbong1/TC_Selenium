package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageobject.TweetDataPO;
import utilities.ThreadManager;

public class TweetDataSteps {
    private WebDriver driver = ThreadManager.getDriver();
    private TweetDataPO tweetData = new TweetDataPO(driver);

    @Then("user click on login button on main page")
    public void userClickOnLoginButtonOnMainPage() throws InterruptedException {
        tweetData.clickOnLoginButton();
    }

    @And("user see tweet Button is disable")
    public void userSeeTweetButtonIsDisable() {

        Assert.assertTrue(tweetData.checkTweetButtonIsDisable());
    }

    @When("user input on twitty homepage what's happening {string}")
    public void userInputOnTwittyHomepageWhatSHappening(String happening) {

        tweetData.enterHappening(happening);
    }

    @Then("user click on twitty homepage button Entertainment")
    public void userClickOnTwittyHomepageButtonEntertainment() throws InterruptedException {
        tweetData.clickOnEntertainmentButton();
    }

    @And("user click on twitty homepage button Ads")
    public void userClickOnTwittyHomepageButton() throws InterruptedException {
        tweetData.clickOnAdsButton();
    }

    @And("user click on twitty homepage button Commercial")
    public void userClickOnTwittyHomepageButtonCommercial() throws InterruptedException {
        tweetData.clickOnCommersialButton();
    }

//    @And("user click twitty homepage date")
//    public void userClickTwittyHomepageDate() {
//        Assert.assertEquals(tweetData.selectFromDate(10-10-2021));
//    }

    @And("user click on tweet Button")
    public void userClickOnTweetButton() throws InterruptedException {
        tweetData.clickOnTweetButton();
    }

//    @And("user click on twitty homepage date")
//    public void userClickOnTwittyHomepageDate() throws InterruptedException {
//        tweetData.clickOnTweetButton1();
//    }
}
