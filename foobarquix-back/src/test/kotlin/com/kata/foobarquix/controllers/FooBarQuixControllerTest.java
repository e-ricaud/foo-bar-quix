package com.kata.foobarquix.controllers;

import com.kata.foobarquix.services.FooBarQuixService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
@WebMvcTest(value = FooBarQuixController.class)

public class FooBarQuixControllerTest {

    @MockBean
    private FooBarQuixService fooBarQuixService;

    @Autowired
    protected MockMvc mockMvc;

    @Test
    void getConvertNumber_shouldCallFooBarQuixService() throws Exception {
        when(fooBarQuixService.convertNumber(eq(1))).thenReturn("1");

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
                "/foo-bar-quix/1").accept(
                MediaType.APPLICATION_JSON_VALUE);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        String expected = "{\"result\":\"1\"}";
        assertEquals(expected, result.getResponse().getContentAsString());
    }
}
