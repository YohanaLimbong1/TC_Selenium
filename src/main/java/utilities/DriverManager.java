package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class DriverManager {
    int PAGE_LOAD_WAIT_DURATION = 60;

    public void setUp(String browserName)
    {

        switch (browserName.toLowerCase())
        {
            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                FirefoxOptions options = new FirefoxOptions();
                options.setAcceptInsecureCerts(true);
                options.addPreference("dom.webnotifications.enabled", false);
                options.addPreference("dom.webnotifications.serviceworker.enabled", false);
                options.addPreference("dom.push.enabled", false);
                ThreadManager.setDriver(new FirefoxDriver(options));
                break;

            case "chrome":
                WebDriverManager.chromedriver().setup();
                //Create a map to store  preferences
                Map<String, Object> prefs = new HashMap<>();
                //add key and value to map as follow to switch off browser notification
                //Pass the argument 1 to allow and 2 to block
                prefs.put("profile.default_content_setting_values.notifications", 2);
                //Create an instance of ChromeOptions
                ChromeOptions cOptions = new ChromeOptions();
                // set ExperimentalOption - prefs
                cOptions.setExperimentalOption("prefs", prefs);
                cOptions.addArguments("--incognito");
                //Now Pass ChromeOptions instance to ChromeDriver Constructor to initialize chrome driver which will switch off this browser notification on the chrome browser
                ThreadManager.setDriver(new ChromeDriver(cOptions));
                break;

            default:
                throw new IllegalArgumentException("Please specify valid browser name. Valid browser names are: firefox, chrome,chrome-headless, ie ,edge");

        }

        ThreadManager.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        ThreadManager.getDriver().manage().timeouts().pageLoadTimeout(PAGE_LOAD_WAIT_DURATION, TimeUnit.SECONDS);
        ThreadManager.getDriver().manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
        ThreadManager.getDriver().manage().window().maximize();
    }

    public void tearDown()
    {
        if(ThreadManager.getDriver()!=null)
        {
            ThreadManager.getDriver().quit();
        }
    }
}

