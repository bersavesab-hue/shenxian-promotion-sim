package com.shenxian.promotion

import com.shenxian.promotion.core.GameCoordinator

/**
 * Android 与游戏核心逻辑连接层
 */
class GameBridge {
    private val coordinator = GameCoordinator()

    fun getPlayerSummary(): String {
        return coordinator.getSummary()
    }

    fun advanceDay(): String {
        return coordinator.advanceDay()
    }
}
