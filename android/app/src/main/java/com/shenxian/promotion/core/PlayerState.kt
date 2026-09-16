package com.shenxian.promotion.core

class PlayerState {
    var identity: String = "凡人"
    var position: String = "无"
    var merit: Int = 0
    var incense: Int = 0
    var reputation: Int = 0
    var day: Int = 1

    fun summary(): String {
        return "身份：$identity\n职位：$position\n功德：$merit\n香火：$incense\n声望：$reputation\n第$day日"
    }
}
