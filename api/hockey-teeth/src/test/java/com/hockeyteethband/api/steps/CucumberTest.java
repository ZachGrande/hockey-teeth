package com.hockeyteethband.api.steps;

import com.hockeyteethband.api.HockeyTeethApplication;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features")
@ContextConfiguration(classes = HockeyTeethApplication.class)
public class CucumberTest {
}
