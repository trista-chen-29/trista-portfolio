# Air Quality Monitor

De Anza College ENGR 10 group project, due June 18, 2025.

**Team:** Wenyan Chen, Trista Chen, Ricardo Barron, Luke Nguyen, Kevin Ngo
**Instructor:** Saied Rafati

A small indoor air-quality box. An Arduino UNO reads a gas sensor, shows the level on an LCD1602, lights a green, yellow, or red LED, and turns on a fan when the air is harmful or dangerous.

## What it does

The loop reads the sensor on `A5` and maps the raw value from 0–900 onto a 0–100 “gas level” for the display. The LED and fan follow the raw reading:

| Raw reading | Status | Light | Fan |
| --- | --- | --- | --- |
| under 170 | Safe | green | off |
| under 350 | Moderate | yellow | off |
| under 600 | Harmful | red | on |
| 600 and up | Danger | second red | on |

The class report stored the sketch as IDE screenshots. `AirQualityMonitor.ino` is those screens joined in order, including the comments that were on screen.

## Build notes from the report

- Board: Arduino UNO R3, written in C++.
- Display: LCD1602. Getting a stable message on it took many tries; a long run could scramble the characters, so the group rewrote that part and tested it piece by piece.
- Fan turns on for harmful and dangerous readings.
- A DHT11 was added for temperature and humidity and overheated during the test, so that path did not ship.
- Gas tests used butane from a lighter. LEDs and the fan were checked at each threshold.
- Parts were chosen to stay under the $75 budget people in a 9-person class survey said they would pay. The build landed around $40.

## Photos

The two build photos from the report are on the portfolio and in this folder: the front of the box (fan, LEDs, LCD reading Safe) and the wiring inside.
