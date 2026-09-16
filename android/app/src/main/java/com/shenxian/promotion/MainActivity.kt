package com.shenxian.promotion

import android.app.Activity
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

class MainActivity : Activity() {
    private val bridge = GameBridge()
    private lateinit var status: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val layout = LinearLayout(this)
        layout.orientation = LinearLayout.VERTICAL

        status = TextView(this)
        status.text = bridge.getPlayerSummary()

        val button = Button(this)
        button.text = "推进一天"
        button.setOnClickListener {
            status.text = bridge.advanceDay()
        }

        layout.addView(status)
        layout.addView(button)
        setContentView(layout)
    }
}
