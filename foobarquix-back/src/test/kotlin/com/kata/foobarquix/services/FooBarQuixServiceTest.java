package com.kata.foobarquix.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class FooBarQuixServiceTest {

    @InjectMocks
    private FooBarQuixService fooBarQuixService;
    @Test
    void convertNumber_3_should_return_foofoo() {
        assertEquals(fooBarQuixService.convertNumber(3),"FooFoo");
    }

    @Test
    void convertNumber_7_should_return_quix() {
        assertEquals(fooBarQuixService.convertNumber(7),"Quix");
    }

    @Test
    void convertNumber_5_should_return_bar() {
        assertEquals(fooBarQuixService.convertNumber(5),"BarBar");
    }

    @Test
    void convertNumber_1_should_return_1() {
        assertEquals(fooBarQuixService.convertNumber(1),"1");
    }

    @Test
    void convertNumber_15_should_return_barfoo() {
        assertEquals(fooBarQuixService.convertNumber(15),"FooBarBar");
    }
}
