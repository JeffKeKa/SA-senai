
 
#include <SPI.h>
#include <MFRC522.h>
#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);
#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
 
//LiquidCrystal lcd(6, 7, 5, 4, 3, 2); 
 
char st[20];
 
void setup() 
{
  pinMode(3, OUTPUT);
  Serial.begin(9600);   // Inicia a serial
  SPI.begin();      // Inicia  SPI bus
  mfrc522.PCD_Init();   // Inicia MFRC522
  lcd_1.begin(16, 2);
}
 
void loop() 
{
    mensageminicial();
 digitalWrite(3,0);
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  // Mostra UID na serial
  Serial.print("UID da tag :");
  String conteudo= "";
  byte letra;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     conteudo.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     conteudo.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
  Serial.print("Mensagem : ");
  conteudo.toUpperCase();
  if (conteudo.substring(1) == "99 D1 18 98") //UID 1 - Chaveiro
  {
    digitalWrite(3,1);
    delay(200);
    digitalWrite(3,0);
    delay(200);
    lcd_1.clear();
    lcd_1.print(" OLA USUARIO");  
    lcd_1.setCursor(0,1);
    lcd_1.print("99 D1 18 98");  
    mensageminicial();
  }
  Serial.print("\n=================\n");
  Serial.print(conteudo);
  Serial.print("\n=================\n");
  Serial.print(conteudo.substring(1));
  Serial.print("\n=================\n");
  if (conteudo.substring(1) != "99 D1 18 98") //UID 2 - Cartao
  {
    digitalWrite(3, 1);
    delay(100);
    digitalWrite(3, 0);
    delay(100);
    digitalWrite(3, 1);
    delay(100);
    digitalWrite(3, 0);
    delay(100);
    lcd_1.clear();
    lcd_1.print(" OLA USUARIO");  
    lcd_1.setCursor(0,1);
    lcd_1.print("09 3D AD 98");
  }
} 
 
void mensageminicial()
{
  lcd_1.clear();
  lcd_1.print(" Aproxime o seu");  
  lcd_1.setCursor(0,1);
  lcd_1.print("cartao do leitor");  
}
