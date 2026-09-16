package com.shenxian.promotion.core

class PromotionSystem {
    fun checkPromotion(merit:Int, incense:Int, position:String): String {
        return if(position == "无品" && merit >= 100 && incense >= 50) {
            "获得神籍，可申请九品土地神"
        } else {
            "暂未满足晋升条件"
        }
    }
}
