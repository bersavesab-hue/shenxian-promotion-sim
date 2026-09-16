package com.shenxian.promotion.core

class OrganizationSystem {
    fun getOrganization(position:String):String {
        return when(position){
            "土地神" -> "地方神司"
            "天兵" -> "天庭军部"
            else -> "凡间体系"
        }
    }
}
