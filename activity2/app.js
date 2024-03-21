import { rightDiv } from "./image.js"
import { leftdiv } from "./info.js"

const data ={
    title1:      "DOG ADAPTATION",
    title2:      "Are you interested?",
    para1:      "Dogs evolved from wolves and have developed adaptations to help them survive in the wild, like powerful sight, hearing, and smell as well as sharp teeth and bodies that make them powerful hunters. Wild dogs live in packs, or groups of dogs, so they can hunt larger animals.",
    para2:      " In cold weather, dogs with thick, double coats have better insulation against the cold. Breeds like Siberian Huskies or Malamutes are well-suited to colder climates. Shedding: In warmer weather, dogs shed their winter coats to regulate body temperature.",
    button1:    "Home",
    button2:    "View",
    button3:    "Contact Us",
    button4:    "About Us",
    myImage:    "dog3.jpg",
}

const{ title1, title2, para1, para2, button1, button2, button3, button4, myImage} = data

container.append(leftdiv(title1, title2, para1, para2, button1, button2, button3, button4))
container.append(rightDiv( myImage))