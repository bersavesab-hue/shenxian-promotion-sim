package com.shenxian.promotion

import android.app.Activity
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

class MainActivity : Activity() {
    private val bridge = GameBridge()
    private lateinit var status: TextView
    private lateinit var eventLog: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val layout = LinearLayout(this)
        layout.orientation = LinearLayout.VERTICAL

        val title = TextView(this)
        title.text = "神仙升职模拟器"

        status = TextView(this)
        status.text = bridge.getPlayerSummary()

        eventLog = TextView(this)
        eventLog.text = "今日暂无事件"

        val button = Button(this)
        button.text = "推进一天"
        button.setOnClickListener {
            eventLog.text = bridge.advanceDay()
            status.text = bridge.getPlayerSummary()
        }

        layout.addView(title)
        layout.addView(status)
        layout.addView(eventLog)
        layout.addView(button)
        setContentView(layout)
    }
}
