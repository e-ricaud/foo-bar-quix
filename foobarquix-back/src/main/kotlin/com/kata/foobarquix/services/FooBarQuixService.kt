package com.kata.foobarquix.services

import com.kata.foobarquix.model.ValueToConvert
import org.springframework.stereotype.Component
import java.util.*
import java.util.function.Function
import java.util.function.IntFunction
import java.util.function.Predicate
import java.util.stream.Collectors

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        val foobar: MutableMap<Int, String> = HashMap()
        foobar[ValueToConvert.FOO.numberToConvert] = ValueToConvert.FOO.label
        foobar[ValueToConvert.BAR.numberToConvert] = ValueToConvert.BAR.label
        foobar[ValueToConvert.QUIX.numberToConvert] = ValueToConvert.QUIX.label

        var result = ""
        result += convertMultipleValue(foobar, inputNumber)
        result += convertWithPresentValue(foobar, inputNumber)

        return if(result.isEmpty()) inputNumber.toString() else result
    }

    fun convertMultipleValue(foobar: Map<Int, String>, toFooBar: Int): String? {
        val result = foobar.keys.stream()
            .filter(Predicate { toFilter: Int -> toFilter != ValueToConvert.QUIX.numberToConvert })
            .filter(Predicate { toReplace: Int -> toFooBar % toReplace == 0 })
            .map(Function { key: Int -> foobar[key] })
            .collect(Collectors.joining())
        return result
    }

    fun convertWithPresentValue(foobar: Map<Int, String>, numberToFooBar: Int): String? {
        val toFooBar: String = numberToFooBar.toString()

        val result: String = toFooBar.chars()
            .mapToObj(IntFunction { integerAsChar: Int ->
                foobar.getOrDefault(
                    Character.getNumericValue(
                        integerAsChar
                    ), ""
                )
            })
            .collect(Collectors.joining())
        return result
    }

}