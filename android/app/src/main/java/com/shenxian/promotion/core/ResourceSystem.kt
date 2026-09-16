package com.shenxian.promotion.core

class ResourceSystem {
    var merit:Int = 0
    var incense:Int = 0

    fun addReward(addMerit:Int, addIncense:Int){
        merit += addMerit
        incense += addIncense
    }
}
