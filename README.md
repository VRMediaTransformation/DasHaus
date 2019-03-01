# Das Haus / House of Leaves - VR Projekt
## Dokumentation

#### Projekt Idee
+ Das Projekt visualisiert eine interaktive 3D-Virtual Reality Umgebung, die auf der Interpretation des Buchs "House of Leaves" (Seite 525 bis 535) von Mark Z. Danielewski basiert.

#### Programm
+ Für die Entwicklung des Projekts haben wir uns für die Nutzung von **A-Frame** entschieden:
Ein webbasiertes front-end Programm, das eine dreidimensionale Welt über eine deklarative Sprache wie HTML schafft.
Dieses nutzen wir über Editor **Webstorm**.
+ Für die Modellierung von 3D-Objekten verwenden wir Modellierungsprogramme wie **3Dsmax** und **Blender**. Diese werden mittels Assets im HTML-Code eingebunden. Zudem modellieren wir auch mittels A-Frame Boxen in A-Frame selbst.

#### Animation
+ Animationen werden durch die Bewegung des Cursors ausgelöst
+ Mögliche Animationen sind beginnende Rotationen, sich verändernde Größen / Texturen 
+ Verschiebungen der Position der Kamera ermöglichen eine Bewegung durch den Raum ohne Tastatur 

#### Raum 1:
+ Zu Beginn befindet sich der User im ersten Raum, in dem sich ein Fahrrad, ein Helm, eine Taschenlampe und eine Wendeltreppe befindet 
+ Das Fahrrad fällt um, sobald der Cursor darüber fährt
+ Die Wendeltreppe beginnt zu rotieren
+ Die Tür öffnet sich, wodurch auch die beginnt Musik zu spielen
+ Pfeile ermöglichen eine Bewegung durch den Raum

![](https://github.com/VRMediaTransformation/DasHaus/blob/master/Raum1.PNG)

#### Raum 2:
+ Der zweite Raum besteht aus einem Labyrinth mit sich verändernden Wänden und Texturen
+ Das Labyrinth besteht aus Boxen, die im Editor ausgerichtet wurden
+ Die Boxen wurden via HTML-Code gerendert
+ Wenn über die Wände mit dem Cursor gehovert wird, verändern diese aufgrund eines JS-Codes ihre Größe, Textur und Rotation

![](https://github.com/VRMediaTransformation/DasHaus/blob/master/Raum2.PNG)

#### Raum 3:
+ Ausgang aus dem Labyrinth
+ User gelangt im Anschluss an das Labyrinth zu einerr Platform, auf der sich nur eine Luftmatratze befindet
+ Fährt der Cursor über die Luftmatratze verschwinden alle anderen Objekte

![](https://github.com/VRMediaTransformation/DasHaus/blob/master/Raum3.png)

#### Schwierigkeiten
Während der Entwicklung des Projekts ergaben sich einige Probleme und Schwierigkeiten in der Umsetzung:
+ Häufig war es nicht möglich 3D-Objekte aus 3Dsmax mit ihrer Textur in A-Frame zu übernehmen, sodass die Textur erst in Blender hinzugefügt werden konnte
+ Abhängig von den Objekte konnte die Textur der Objekte manchmal nur im obj.-Format eingelesen werden und nicht im .dae-Format

#### Gruppe
Mitglieder:
Velina Kinanova,
Felix Stümpel,
Paula Dickmann




