package runners;

import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        plugin = {"json:target/results/twitty/cucumber-report.json",  "html:target/results/twitty"},
        features = "src/test/resources/features",
        glue = "steps",
        tags = {"@twitty"} )
public class TwittyTestRunner extends BaseTestRunner {}
