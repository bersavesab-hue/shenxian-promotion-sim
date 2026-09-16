package com.shenxian.promotion.core

class NPCSystem {
    data class NPC(
        val name: String,
        val position: String,
        var relationship: Int
    )

    private val npcs = mutableListOf<NPC>()

    fun addNPC(npc: NPC) {
        npcs.add(npc)
    }

    fun getNPCs(): List<NPC> = npcs
}
