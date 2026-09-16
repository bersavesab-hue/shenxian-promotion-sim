package com.shenxian.promotion

/**
 * 第一版测试页面逻辑
 * 后续替换为正式UI
 */
class GameScreen {
    private val bridge = GameBridge()

    fun render(): String {
        return bridge.getPlayerSummary()
    }

    fun clickAdvance(): String {
        return bridge.advanceDay()
    }
}
