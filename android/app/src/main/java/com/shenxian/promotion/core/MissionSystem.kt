package com.shenxian.promotion.core

class MissionSystem {
    data class Mission(
        val title: String,
        val rewardMerit: Int,
        val rewardIncense: Int
    )

    fun complete(mission: Mission): String {
        return "完成任务：${mission.title}\n功德+${mission.rewardMerit}\n香火+${mission.rewardIncense}"
    }
}
