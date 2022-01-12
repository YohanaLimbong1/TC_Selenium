package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import utilities.SeleniumHelpers;

public class TweetDataPO {
    WebDriver driver;
    SeleniumHelpers selenium;

    public TweetDataPO (WebDriver driver) {
        this.driver = driver;
        selenium = new SeleniumHelpers(driver);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 60), this);

    }

    @FindBy(id = "loginEntry" )
    private WebElement loginButton;

    @FindBy(xpath = "//*[@class='tweetButtonDisabled btn btn-primary rounded-pill font-weight-bold border-0 disabled']")
    private WebElement tweetButton;

    @FindBy(id = "tweetInput")
    private WebElement happeningEditText;

    @FindBy(id = "categoryRadioEnt")
    private WebElement entertainmentButton;

    @FindBy(id = "checkboxAds")
    private WebElement adsButton;

    @FindBy(id = "checkboxCommercial")
    private WebElement CommersialButton;

    @FindBy(name = "date_of_birth")
    private WebElement dateBox;

    @FindBy(id = "tweetButton")
    private WebElement tweetButtonActive;

    public void clickOnLoginButton() throws InterruptedException {
        selenium.clickOn(loginButton);
    }

    public boolean checkTweetButtonIsDisable() {

        return selenium.waitTillElementIsVisible(tweetButton)!= null;
    }

    public void enterHappening(String happening) {

        selenium.enterText(happeningEditText, happening, true);
    }

    public void clickOnEntertainmentButton() throws InterruptedException {
        selenium.clickOn(entertainmentButton);
    }

    public void clickOnAdsButton() throws InterruptedException {
        selenium.clickOn(adsButton);
    }

    public void clickOnCommersialButton() throws InterruptedException {
        selenium.clickOn(CommersialButton);
    }

    public void clickOnTweetButton() throws InterruptedException {
        selenium.clickOn(tweetButtonActive);
    }

//    public void clickOnTweetButton1() throws InterruptedException {
//        selenium.clickOn(tweetButton);
//    }

//    public void selectFromDate(String date){
//        selenium.selectDate(dateBox,date, true"10", "10", "2021");
//    }
}
