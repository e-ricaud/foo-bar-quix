package com.kata.foobarquix.model;

public enum ValueToConvert {
    FOO(3,"Foo"),
    BAR(5, "Bar"),
    QUIX(7, "Quix");

    public final int numberToConvert;
    public final String label;
    ValueToConvert(int numberToConvert, String label) {
        this.numberToConvert = numberToConvert;
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public int getNumberToConvert() {
        return numberToConvert;
    }
}
