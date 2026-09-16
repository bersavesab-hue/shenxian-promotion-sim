package com.shenxian.promotion.core

class SaveSystem {
    private var saveData = mutableMapOf<String, Int>()

    fun save(key: String, value: Int) {
        saveData[key] = value
    }

    fun load(key: String): Int {
        return saveData[key] ?: 0
    }
}
