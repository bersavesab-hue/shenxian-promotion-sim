package com.shenxian.promotion

import android.app.Activity
import android.os.Bundle
import android.graphics.Typeface
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

class MainActivity : Activity() {
    private val bridge = GameBridge()
    private lateinit var status: TextView
    private lateinit var event: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val layout = LinearLayout(this)
        layout.orientation = LinearLayout.VERTICAL
        layout.setPadding(24, 24, 24, 24)

        val title = TextView(this)
        title.text = "神仙升职模拟器"
        title.textSize = 24f
        title.setTypeface(null, Typeface.BOLD)

        status = TextView(this)
        status.textSize = 18f
        status.text = bridge.getPlayerSummary()

        event = TextView(this)
        event.text = "今日事件：暂无"

        val advance = Button(this)
        advance.text = "推进一天"
        advance.setOnClickListener {
            event.text = bridge.advanceDay()
            status.text = bridge.getPlayerSummary()
        }

        val task = Button(this)
        task.text = "查看任务"
        task.setOnClickListener {
            event.text = "当前任务：处理凡间祈愿\n奖励：功德、香火"
        }

        val promotion = Button(this)
        promotion.text = "查看晋升"
        promotion.setOnClickListener {
            event.text = "晋升路线：凡人 → 神籍 → 地方神职"
        }

        layout.addView(title)
        layout.addView(status)
        layout.addView(event)
        layout.addView(advance)
        layout.addView(task)
        layout.addView(promotion)

        setContentView(layout)
    }
}
