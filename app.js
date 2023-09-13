import {Tabs} from './tabs.js'

const tabData = [
  {
    tabTitle: "Tab1",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni pariatur neque dolorem in! Tempora, fugit? Beatae, praesentium, voluptatem saepe quia ipsum aut tenetur vel facere consectetur adipisci animi repudiandae quasi nam enim sint, cum quibusdam dolore amet eveniet? Deserunt voluptatibus quia ratione!"
  },
  {
    tabTitle: "Tab2",
    content: "Iusto, aperiam et, nam consequatur est quae, quidem voluptas voluptatibus magni veritatis tenetur praesentium autem esse maxime eos nobis. Iste dignissimos animi autem provident culpa excepturi alias exercitationem magnam ullam!"
  },
  {
    tabTitle: "Tab3",
    content: "Aliquip eiusmod quis nostrud pariatur aute eu duis deserunt."
  },
  {
    tabTitle: "Tab4",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    tabTitle: "Tab5",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    tabTitle: "Tab6",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    tabTitle: "Tab7",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    tabTitle: "Tab8",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  }
  
]

// Create Tabs
const tabs = new Tabs(tabData)

tabs.appendTo(document.body)



