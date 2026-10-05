# Air Quality Monitor

De Anza College **ENGR 10** group project · due June 18, 2025

**Team:** Wenyan Chen, Trista Chen, Ricardo Barron, Luke Nguyen, Kevin Ngo  
**Instructor:** Saied Rafati

A cardboard-box indoor air-quality monitor. An Arduino UNO reads a gas sensor, shows status on an LCD1602, lights green / yellow / red LEDs, and turns on a fan when the air is harmful or dangerous.

<p>
  <img src="photos/front.jpg" alt="Finished box with fan, LEDs, and LCD showing Safe" width="420" />
  <img src="photos/inside.jpg" alt="Breadboard wiring inside the box" width="420" />
</p>

## How to show this project

| Place | What to open |
| --- | --- |
| **This GitHub repo** | README photos + `AirQualityMonitor.ino` |
| **Portfolio site** | [Projects → Air Quality Monitoring System](https://tristachen.vercel.app/projects) (same photos) |
| **Class report** | `docs/ENGR10-final-report.txt` + `charts/` |

Clone and open the sketch in Arduino IDE (UNO + LiquidCrystal library):

```bash
git clone https://github.com/trista-chen-29/air-quality-monitor.git
# open AirQualityMonitor.ino
```

## What it does

The loop reads the sensor on `A5` and maps the raw value from 0–900 onto a 0–100 gas level for the display. LED and fan follow the raw reading:

| Raw reading | Status | Light | Fan |
| --- | --- | --- | --- |
| under 170 | Safe | green | off |
| under 350 | Moderate | yellow | off |
| under 600 | Harmful | red | on |
| 600 and up | Danger | second red | on |

## Build notes

- Board: Arduino UNO R3, C++
- Display: LCD1602 (took many tries; long runs could scramble characters — rewritten and tested piece by piece)
- Fan on for harmful / dangerous
- DHT11 for temp/humidity overheated during test and did not ship
- Gas tests used butane from a lighter
- Parts ~$40 (under the ~$75 survey willingness-to-pay)

## Repo layout

```
AirQualityMonitor.ino     Sketch transcribed from report IDE screenshots
photos/                   Build photos (front + wiring)
charts/                   Survey / Gantt / IDE screenshots from the report
docs/ENGR10-final-report.txt
```

## Credits

Group 6 — Wenyan, Trista, Ricardo, Luke, Kevin. See the report appendix for who owned each section.
