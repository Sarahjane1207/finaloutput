import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "Andrea B",
    para:       "Ramona Anndrew Blythe Daguio Gorostiza (born March 12, 2003), known professionally as Andrea Brillantes (Tagalog pronunciation: [bɾiˈʎɐntɛs]), is a Filipino actress, model and entrepreneur. She began her career as a child actress, debuting in the sketch comedy show Goin' Bulilit. After playing minor and supporting roles in a number of television programs, she starred in her breakthrough titular role, Annaliza. She is best known for her portrayal as Marga Mondragon-Bartolome in the melodrama Kadenang Ginto. Her accolades include two PMPC Star Awards for Television and a Box Office Entertainment Awards.",
    button:     "Contact Us",
    image:      "andrea1.jpg"
}

const dataTwo = {
    title2:     "Project Completed:",

    image1:     "p1.jpg",
    para1:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button1:    "View Character",

    image2:     "pp1.jpg",
    para2:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button2:    "View Character",

    image3:     "pp3.jpg",
    para3:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button3:    "View Character"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))
