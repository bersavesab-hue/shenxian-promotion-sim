package com.shenxian.promotion

/**
 * Android 与游戏核心逻辑连接层
 * 第一版只负责提供测试数据接口
 * 后续接入 GameEngine
 */
class GameBridge {
    fun getPlayerSummary(): String {
        return "身份：凡人\n职位：无品神籍\n功德：0\n香火：0"
    }

    fun advanceDay(): String {
        return "今日事件：收到凡间祈愿\n功德+10\n香火+5"
    }
}
