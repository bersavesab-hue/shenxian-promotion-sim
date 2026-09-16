package com.shenxian.promotion.core

class GameEngine {
    val state = GameState()
    val eventProcessor = EventProcessor()
    val promotionChecker = PromotionChecker()

    fun advanceDay(): String {
        state.day += 1
        val result = eventProcessor.process(state)
        promotionChecker.check(state)
        return result
    }
}
