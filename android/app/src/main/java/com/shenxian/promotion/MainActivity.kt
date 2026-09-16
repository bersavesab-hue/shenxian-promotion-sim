package com.shenxian.promotion

import android.app.Activity
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

class MainActivity : Activity() {
    private var merit = 0
    private var incense = 0
    private lateinit var status: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val layout = LinearLayout(this)
        layout.orientation = LinearLayout.VERTICAL

        status = TextView(this)
        status.text = "神仙升职模拟器\n\n身份：凡人\n职位：无\n功德：0\n香火：0"

        val button = Button(this)
        button.text = "推进一天"
        button.setOnClickListener {
            merit += 10
            incense += 5
            status.text = "神仙升职模拟器\n\n身份：凡人\n职位：无\n功德：$merit\n香火：$incense\n\n事件：完成凡间祈愿"
        }

        layout.addView(status)
        layout.addView(button)
        setContentView(layout)
    }
}
