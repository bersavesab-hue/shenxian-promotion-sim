package com.shenxian.promotion

import android.app.Activity
import android.os.Bundle
import android.widget.TextView

class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val view = TextView(this)
        view.text = "神仙升职模拟器\n\n当前版本：0.1测试\n\n玩家：凡人\n职位：无\n\n等待接入核心系统"
        setContentView(view)
    }
}
