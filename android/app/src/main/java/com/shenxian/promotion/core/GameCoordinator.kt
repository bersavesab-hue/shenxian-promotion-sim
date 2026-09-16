package com.shenxian.promotion.core

class GameCoordinator {
    private val state = GameState()
    private val engine = GameEngine()
    private val eventSystem = EventSystem()
    private val missionSystem = MissionSystem()

    fun advanceDay(): String {
        engine.advance(state)
        val event = eventSystem.trigger(state)
        val mission = MissionSystem.Mission("处理凡间祈愿", 10, 5)
        missionSystem.complete(mission)
        state.merit += mission.rewardMerit
        state.incense += mission.rewardIncense
        return event + "\n" + state.summary()
    }

    fun getSummary(): String = state.summary()
}
