package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import utilities.SeleniumHelpers;

public class LoginPagePO {
    WebDriver driver;
    SeleniumHelpers selenium;

    public LoginPagePO(WebDriver driver) {
        this.driver = driver;
        selenium = new SeleniumHelpers(driver);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 60), this);
        //This initElements method will create all WebElements
    }

        @FindBy(id = "email")
        private WebElement UsernameEditText;

        @FindBy(id = "password")
        private WebElement PasswordEditText;

        @FindBy(xpath = "//*[@class='loginButtonEnable btn btn-primary rounded-pill w-100 p-2 font-weight-bold']")
        private WebElement loginButton;

        @FindBy(xpath = "//*[@class='btn btn-primary rounded-pill font-weight-bold w-100 border-0 default-button']")
        private WebElement tweetButton;

        @FindBy(id = "ErrorMessageLogin")
        private WebElement loginMessageEror;


        public void enterUsername(String Email) {

            selenium.enterText(UsernameEditText, Email, true);
        }

        public void enterPassword(String Password){
            selenium.enterText(PasswordEditText, Password, true);
        }

        public void clickOnLoginButon() throws InterruptedException {
            selenium.clickOn(loginButton);
    }

        public void clickOnTweetButon() throws InterruptedException {
            selenium.clickOn(tweetButton);
        }

     public String getLoginMessageError() {
            return selenium.getText(loginMessageEror);
    }
}
