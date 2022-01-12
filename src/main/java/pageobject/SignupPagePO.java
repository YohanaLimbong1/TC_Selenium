package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import utilities.SeleniumHelpers;

public class SignupPagePO {
    WebDriver driver;
    SeleniumHelpers selenium;

    public SignupPagePO(WebDriver driver) {
        this.driver = driver;
        selenium = new SeleniumHelpers(driver);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 60), this);
        //This initElements method will create all WebElements
    }

    /*
     * All WebElements are identified by @FindBy annotation
     *
     * @FindBy can accept tagName, partialLinkText, name, linkText, id, css,
     * className, xpath as attributes.
     */


    @FindBy(id = "signupName")
    private WebElement NameEditText;

    @FindBy(id = "signupPassword")
    private WebElement passwordEditText;

    @FindBy(id = "signupPhone")
    private WebElement phoneEditText;

    @FindBy(xpath = "//option[contains(.,'August')]")
    private WebElement monthSelect;

    @FindBy(xpath = "//option[contains(.,'27')]")
    private WebElement daySelect;

    @FindBy(xpath = "//option[contains(.,'1998')]")
    private WebElement yearSelect;

    @FindBy(xpath = "//*[@class='btn btn-primary btn-lg rounded-pill w-100 p-1 font-weight-bold']")
    private WebElement nextButton;

    @FindBy(id = "nextButtonSignupDisabled")
    private WebElement disableNextButton;


    public void enterName(String name) {

        selenium.enterText(NameEditText, name, true);
    }

    public void enterPassword (String password){

        selenium.enterText(passwordEditText, password, true);
    }

    public boolean checkNextButtonIsDisable() {

        return selenium.waitTillElementIsVisible(disableNextButton)!= null;
    }

    public void enterPhone (String phone){

        selenium.enterText(phoneEditText, phone, true);
    }

    public void selectMonth() throws InterruptedException {
       selenium.clickOn(monthSelect);
    }

    public void selectDay() throws InterruptedException {
        selenium.clickOn(daySelect);
    }

    public void selectYear() throws InterruptedException {
        selenium.clickOn(yearSelect);
    }

    public void clickOnNextButton() throws InterruptedException {
        selenium.clickOn(nextButton);
    }
}