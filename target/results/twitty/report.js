$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/accWebsiteTw.feature");
formatter.feature({
  "name": "Login twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@accWebsiteTw"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Access Twitty website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@accWebsiteTw"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/loginInvalid.feature");
formatter.feature({
  "name": "Login twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loginInvalid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Negative case check user login with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginInvalid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty sign up button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.HomeSteps.user_click_on_twitty_sign_up_button_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Phone \"082274027988\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInpuOntTwittySignPhone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date Month of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateMonthOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date day  of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateDayOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date Year  of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateYearOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Next button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SignupSteps.userClickOnTwittyNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty login username \"christianolubis@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwittyLoginUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twityy login password \"ronaldo\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwityyLoginPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system display twitty login alert box is \"Wrong credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.systemDisplayTwittyLoginAlertBoxIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/loginValid.feature");
formatter.feature({
  "name": "Login twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loginValid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Positive case Check user login with created data through sign up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginValid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty sign up button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.HomeSteps.user_click_on_twitty_sign_up_button_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Phone \"082274027988\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInpuOntTwittySignPhone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date Month of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateMonthOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date day  of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateDayOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date Year  of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateYearOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Next button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SignupSteps.userClickOnTwittyNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty login username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwittyLoginUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twityy login password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwityyLoginPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty homepage button tweet",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyHomepageButtonTweet()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/signupInvalid.feature");
formatter.feature({
  "name": "Signup twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@signupInvalid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Negative case sign up for Twitty with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@signupInvalid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty sign up button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.HomeSteps.user_click_on_twitty_sign_up_button_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see Next Button is disable",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SignupSteps.userSeeNextButtonIsDisable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/signupValid.feature");
formatter.feature({
  "name": "Signup twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@signupValid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Positive case sign up for Twitty with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@signupValid"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty sign up button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.HomeSteps.user_click_on_twitty_sign_up_button_on_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInputOnTwittySignupPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty signup Phone \"082274027988\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userInpuOntTwittySignPhone(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date Month of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateMonthOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date day  of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateDayOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select on twityy signup date Year  of birth",
  "keyword": "And "
});
formatter.match({
  "location": "steps.SignupSteps.userSelectOnTwityySignupDateYearOfBirth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Next button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SignupSteps.userClickOnTwittyNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/twMoreDtSelection.feature");
formatter.feature({
  "name": "Button tweet twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@twMoreDtSelection"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Create new Tweet with more data selection",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@twMoreDtSelection"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnLoginButtonOnMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty login username \"yohanalimbong12@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwittyLoginUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twityy login password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwityyLoginPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty homepage button tweet",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyHomepageButtonTweet()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: AjaxElementLocator \u0027By.xpath: //*[@class\u003d\u0027btn btn-primary rounded-pill font-weight-bold w-100 border-0 default-button\u0027]\u0027 (tried for 60 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat utilities.SeleniumHelpers.waitTillElementIsClickable(SeleniumHelpers.java:59)\r\n\tat utilities.SeleniumHelpers.clickOn(SeleniumHelpers.java:150)\r\n\tat pageobject.LoginPagePO.clickOnTweetButon(LoginPagePO.java:51)\r\n\tat steps.LoginSteps.userClickOnTwittyHomepageButtonTweet(LoginSteps.java:35)\r\n\tat ✽.user click on twitty homepage button tweet(file:///D:/KULIAH/Quality%20Assurance/test_commsult/src/test/resources/features/twMoreDtSelection.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Timed out after 60 seconds. Unable to locate the element\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:91)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:287)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:284)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:672)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:668)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat utilities.SeleniumHelpers.waitTillElementIsClickable(SeleniumHelpers.java:59)\r\n\tat utilities.SeleniumHelpers.clickOn(SeleniumHelpers.java:150)\r\n\tat pageobject.LoginPagePO.clickOnTweetButon(LoginPagePO.java:51)\r\n\tat steps.LoginSteps.userClickOnTwittyHomepageButtonTweet(LoginSteps.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:120)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:28)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:425)\r\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:68)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-primary rounded-pill font-weight-bold w-100 border-0 default-button\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T6L8DC9\u0027, ip: \u0027192.168.235.117\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57538}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7b0bb32902ba3c8c6ac8ee9a5fca1e0e\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-primary rounded-pill font-weight-bold w-100 border-0 default-button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.access$001(AjaxElementLocator.java:41)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator$SlowLoadingElement.isLoaded(AjaxElementLocator.java:157)\r\n\tat org.openqa.selenium.support.ui.SlowLoadableComponent.get(SlowLoadableComponent.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.AjaxElementLocator.findElement(AjaxElementLocator.java:87)\r\n\t... 50 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user see tweet Button is disable",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userSeeTweetButtonIsDisable()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input on twitty homepage what\u0027s happening \"I love Indonesia 2\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TweetDataSteps.userInputOnTwittyHomepageWhatSHappening(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on twitty homepage button Entertainment",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnTwittyHomepageButtonEntertainment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on twitty homepage button Ads",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnTwittyHomepageButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on twitty homepage button Commercial",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnTwittyHomepageButtonCommercial()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on tweet Button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnTweetButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on twitty homepage button tweet",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyHomepageButtonTweet()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "Create new Tweet with more data selection");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/tweetNoData.feature");
formatter.feature({
  "name": "Button tweet twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tweetNoData"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Create new Tweet with no data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tweetNoData"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnLoginButtonOnMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty login username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwittyLoginUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twityy login password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwityyLoginPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty homepage button tweet",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyHomepageButtonTweet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see tweet Button is disable",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userSeeTweetButtonIsDisable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/tweetWithData.feature");
formatter.feature({
  "name": "Button tweet twitty",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tweetWithData"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.scenario({
  "name": "Create new Tweet with data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tweetWithData"
    },
    {
      "name": "@twitty"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access page \"http://sauron.dev.commsult.id/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomeSteps.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button on main page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnLoginButtonOnMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty login username \"yohanalimbong1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwittyLoginUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twityy login password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userInputOnTwityyLoginPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty homepage button tweet",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.userClickOnTwittyHomepageButtonTweet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see tweet Button is disable",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userSeeTweetButtonIsDisable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input on twitty homepage what\u0027s happening \"I love Indonesia\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TweetDataSteps.userInputOnTwittyHomepageWhatSHappening(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on twitty homepage button Entertainment",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnTwittyHomepageButtonEntertainment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on tweet Button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.TweetDataSteps.userClickOnTweetButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});