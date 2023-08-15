package com.hockeyteethband.api.steps;

import com.hockeyteethband.api.model.Show;
import com.hockeyteethband.api.repository.ShowsRepository;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.spring.CucumberContextConfiguration;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@CucumberContextConfiguration
public class ShowsSteps {

    @Mock
    private ShowsRepository showsRepository;

    /*
    @Autowired
    private MockMvc mockMvc;
    */

    @Given("the shows table is populated with shows data")
    public void theShowsTableIsPopulatedWithShowsData() {
        /*
        showsRepository.save(new Show(
            "2023-08-13",
            "Venue",
            "https://www.hockeyteethband.com",
            "Seattle, WA"
        ));
        */
    }

    @When("the client calls GET {string}")
    public void theClientCallsGETShows(String endpoint) throws Exception {
        /*
        mockMvc.perform(get(endpoint))
            .andExpect(status().isOk());
            .andDo(result -> this.response = result.getResponse());
        */
    }

    @Then("the response should include all the shows")
    public void theResponseShouldIncludeAllTheShows() {

    }
}
