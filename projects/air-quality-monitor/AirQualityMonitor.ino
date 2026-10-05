// Air Quality Monitor
// De Anza College ENGR 10, Group 6, due June 18, 2025
// Wenyan Chen, Trista Chen, Ricardo Barron, Luke Nguyen, Kevin Ngo
//
// Transcribed from the Arduino screenshots in the class report.
// The report stored the sketch as IDE images, so this file joins those
// screens in order. Thresholds match the if-statements in the screenshots.

#include <LiquidCrystal.h>

LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

byte smile[8] = {
  B00000,
  B00000,
  B01010,
  B00000,
  B10001,
  B01110,
  B00000,
  B00000
};

const int gasSensorPin = A5;
const int fanPin = 10;
const int redPin = 11;
const int yellowPin = 12;
const int greenPin = 13;
const int twoRed = A0;

int sensorValue = 0;
int gasppm = 0;
String status;

void setup() {
  Serial.begin(9600);

  pinMode(fanPin, OUTPUT);
  digitalWrite(fanPin, LOW);

  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(twoRed, OUTPUT);

  lcd.begin(16, 2);
  lcd.createChar(0, smile);

  lcd.setCursor(0, 0);
  lcd.print("Air Quality");
  lcd.setCursor(0, 1);
  lcd.print("Monitor ");
  lcd.write(byte(0));

  delay(1000);
  lcd.clear();

  for (int i = 0; i < 2; i++) {
    lcd.print("Gas Sensor Ready");
    delay(800);
    lcd.clear();
  }
}

void manageFan(int statusNum) {
  if (statusNum > 0) {
    digitalWrite(fanPin, HIGH);
    statusNum--;
  } else {
    digitalWrite(fanPin, LOW);
    Serial.print("OFF");
  }
}

void ledsOff() {
  digitalWrite(greenPin, LOW);
  digitalWrite(yellowPin, LOW);
  digitalWrite(redPin, LOW);
  digitalWrite(twoRed, LOW);
}

void loop() {
  static int fanStatus = 0;

  sensorValue = analogRead(gasSensorPin);
  gasppm = map(sensorValue, 0, 900, 0, 100);

  // under 170, normal air quality        -- <22% -- Safe
  // 201-250, breathing on it, CO2        -- >27% -- Moderate
  // 400, harmful air quality             -- >44% -- Harmful
  // 700+ alcohol, dangerous air quality  -- >77% -- Dangerous

  Serial.print("Gas Sensor Value: ");
  Serial.println(sensorValue);

  if (sensorValue < 170) {
    ledsOff();
    status = "Safe ";
    digitalWrite(greenPin, HIGH);
  } else if (sensorValue < 350) {
    ledsOff();
    status = "Moderate";
    digitalWrite(yellowPin, HIGH);
  } else if (sensorValue < 600) {
    ledsOff();
    status = "Harmful ";
    fanStatus = 4; // 2 seconds
    digitalWrite(redPin, HIGH);
  } else {
    ledsOff();
    status = "Danger ";
    fanStatus = 8; // 4 seconds
    digitalWrite(twoRed, HIGH);
  }

  lcd.setCursor(0, 0);
  lcd.print("Gas Level: ");
  lcd.print(gasppm);
  lcd.print("% ");

  lcd.setCursor(0, 1);
  lcd.print("Status: ");
  lcd.print(status);

  manageFan(fanStatus);
  delay(500);
}
