package com.shenxian.promotion.core

class EventProcessor(private val state: GameState) {
    fun advanceDay(): String {
        state.day += 1
        state.merit += 10
        state.incense += 5
        return "事件：完成凡间祈愿\n功德+10\n香火+5"
    }
}
