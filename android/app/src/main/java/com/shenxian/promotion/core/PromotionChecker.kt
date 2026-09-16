package com.shenxian.promotion.core

class PromotionChecker(private val state: GameState) {
    fun check(): String {
        if (state.merit >= 100 && state.position == "无品神籍") {
            state.position = "九品土地神"
            state.identity = "地方神职"
            return "晋升成功：九品土地神"
        }
        return "暂未满足晋升条件"
    }
}
