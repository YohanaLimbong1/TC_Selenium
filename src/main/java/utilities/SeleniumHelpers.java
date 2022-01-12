package utilities;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class SeleniumHelpers {
    int webDriverDuration = 60;
    int PAGE_LOAD_WAIT_DURATION = 60;
    WebDriver driver;
    Actions actions;

    public SeleniumHelpers(WebDriver driver) {
        this.driver = driver;
        actions = new Actions(driver);
//        SignupPagePO datebox = new SignupPagePO(driver);
    }

    /**
     * Open url
     * @url Website main page
     */
    public void navigateToPage(String url) {driver.get(url);
    }

    /**
     * Waiting before performing next action
     * @param seconds provide duration e.g. 1,2 etc
     * @throws InterruptedException
     */
    public void hardWait(int seconds) throws InterruptedException {
        Thread.sleep(seconds * 1000);
    }

    /**
     * o wait until element is visible
     * @param e WebElement object
     * @return WebElement object
     */
    public WebElement waitTillElementIsVisible(WebElement e)
    {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOf(e));
        return e;
    }

    /**
     * To wait until element is clickable
     * @param e WebElement object
     * @return WebElement object
     */
    public WebElement waitTillElementIsClickable(WebElement e) {
        WebDriverWait wait = new WebDriverWait(driver, webDriverDuration);
        WebElement until = wait.until(ExpectedConditions.elementToBeClickable(e));
        return e;
    }

    /**
     * To wait until element is clickable
     * @param by By object
     * @return WebElement object
     */
    public WebElement waitTillElementIsClickable(By by) {
        WebDriverWait wait = new WebDriverWait(driver, webDriverDuration);
        return wait.until(ExpectedConditions.elementToBeClickable(by));
    }

    /**
     * This function will wait for page to load (waiting for java script to finish loading) before moving further
     * @throws InterruptedException
     * @paramWaitTime Maximum time is the time out time. if the page loading completes before timeout, code will process
     */
    public void waitForJavascriptToLoad() throws InterruptedException {
        Thread.sleep(1000);
        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
            }
        };
        Wait<WebDriver> wait = new WebDriverWait(driver, webDriverDuration);
        try {
            wait.until(expectation);
        } catch (Exception e) {
            e.printStackTrace();
        } catch (Error e) {
            e.printStackTrace();
        }
    }

    /**
     * Enter text to input field
     * @param e     WebElement object
     * @param text  input text
     * @param clear set true if want to clear field else set false
     */
    public void enterText(WebElement e, String text, boolean clear) {
        e = waitTillElementIsClickable(e);
        if (clear) {
            e.clear();
        }
        e.sendKeys(text);
    }

    /**
     * Enter text to input field
     * @param by    By object
     * @param text  input text
     * @param clear set true if want to clear field else set false
     */
    public void enterText(By by, String text, boolean clear) {
        WebElement e = waitTillElementIsClickable(by);
        if (clear) {
            e.clear();
        }
        e.sendKeys(text);
    }

    /**
     * Enter text to input field
     * @param e     WebElement object
     * @param text  input text
     * @param clear set true if want to clear field else set false
     * @throws InterruptedException
     */
    public void enterTextCharacterByCharacter(WebElement e, String text, boolean clear) throws InterruptedException {
        e = waitTillElementIsClickable(e);
        if (clear) {
            e.clear();
        }

        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            String s = new StringBuilder().append(c).toString();
            e.sendKeys(s);
            Thread.sleep(500); // Waiting for 0.5 second
        }
    }

    /**
     * Click on Element
     * @param e WebElement object
     * @throws InterruptedException
     */
    public void clickOn(WebElement e) throws InterruptedException {
        waitTillElementIsClickable(e).click();
        waitForJavascriptToLoad();
    }

    /**
     * Click on Element
     * @param e WebElement object
     * @throws InterruptedException
     */
    public void click(WebElement e) throws InterruptedException {
        e.click();
        waitForJavascriptToLoad();
    }

    /**
     * Click on Element
     * @param by By object
     * @throws InterruptedException
     */
    public void clickOn(By by) throws InterruptedException {
        waitTillElementIsClickable(by).click();
        waitForJavascriptToLoad();
    }

    /**
     * Verify element is displayed
     *
     * @param el WebElement object
     * @return boolean
     */
    public Boolean isElementAppeared(WebElement el) {
        try {
            el.isDisplayed();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public void hitEnterKey(WebElement e, boolean clear) {
        if (clear) {
            e.clear();
        }
        e.sendKeys(Keys.ENTER);
    }

    /**
     * Check if element is visible in viewport
     *
     * @param element element to be checked
     */
    public Boolean isVisibleInViewport(WebElement element) {
        return (Boolean) ((JavascriptExecutor) driver).executeScript(
                "var elem = arguments[0],                 " +
                        "  box = elem.getBoundingClientRect(),    " +
                        "  cx = box.left + box.width / 2,         " +
                        "  cy = box.top + box.height / 2,         " +
                        "  e = document.elementFromPoint(cx, cy); " +
                        "for (; e; e = e.parentElement) {         " +
                        "  if (e === elem)                        " +
                        "    return true;                         " +
                        "}                                        " +
                        "return false;                            "
                , element);
    }
    /**
     * Get Current URL
     */
    public String getURL() {return driver.getCurrentUrl();
    }

    /**
     * Mouse hover to element
     * @param el WebElement object
     */
    public void hoverElement(WebElement el)
    {
        actions.moveToElement(el).perform();
    }

    /**
     * Get Text from field
     * @param e WebElement object
     * @return text from field
     */
    public String getText(WebElement e)
    {
        return waitTillElementIsVisible(e).getText().trim();
    }

    public void clickOnnextButton(WebElement e) throws InterruptedException {
        waitTillElementIsClickable(e).click();
        waitForJavascriptToLoad();
    }

    public void selectDate(String month, String day, String year) {
        By dateBox = null;
        driver.findElement(dateBox).click();
    }

    public interface selectInput {
        boolean isMultiple();
        List<WebElement> getOptions();
        List<WebElement> getAllSelectedOptions();
        WebElement getFirstSelectedOption();
        void selectByVisibleText(String text);
        void selectByIndex(int index);
        void selectByValue(String value);
        void deselectAll();
        void deselectByValue(String value);
        void deselectByIndex(int index);
        void deselectByVisibleText(String text);
    }
}
