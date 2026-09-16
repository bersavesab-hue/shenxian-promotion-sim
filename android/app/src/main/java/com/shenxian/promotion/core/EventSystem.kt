package com.shenxian.promotion.core

class EventSystem {
    fun trigger(state: GameState): String {
        state.merit += 10
        state.incense += 5
        state.reputation += 2
        return "凡间祈愿事件完成：功德+10 香火+5 声望+2"
    }
}
