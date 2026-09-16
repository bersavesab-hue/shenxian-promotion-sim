package com.shenxian.promotion

class GameState {
    var day: Int = 1
    var merit: Int = 0
    var incense: Int = 0
    var position: String = "无品神籍"
    var identity: String = "凡人"
    var reputation: Int = 0

    fun summary(): String {
        return "身份：$identity\n职位：$position\n日期：第${day}日\n功德：$merit\n香火：$incense\n声望：$reputation"
    }
}
