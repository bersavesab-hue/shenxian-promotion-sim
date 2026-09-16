package com.shenxian.promotion

/**
 * Android 与游戏核心逻辑连接层
 * 第一版接入基础状态推进
 */
class GameBridge {
    private var merit = 0
    private var incense = 0
    private var day = 1

    fun getPlayerSummary(): String {
        return "第${day}日\n身份：凡人\n职位：无品神籍\n功德：$merit\n香火：$incense"
    }

    fun advanceDay(): String {
        day++
        merit += 10
        incense += 5
        return "今日事件：收到凡间祈愿\n功德+10\n香火+5"
    }
}
