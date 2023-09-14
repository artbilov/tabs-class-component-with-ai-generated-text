1 || require('./app.js')
export { Tabs }

import OPENAI_API_KEY from './key.js'
// const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';


class Tabs {
  constructor(data) {
    this.data = data
    this.render()
    this.colorize()
    this.assignListeners()
  }

  render() {
    const container = document.createElement('section')
    container.className = 'tabs-container'
    const tabs = document.createElement('ul')
    tabs.className = 'tabs'
    const tabsContent = document.createElement('ul')
    tabsContent.className = 'tabs-content'

    container.append(tabs, tabsContent)
    this.element = container
    this.tabs = tabs
    this.tabsContent = tabsContent

    this.data.forEach((item, index) => {
      const { tabTitle, content } = item
      const tab = document.createElement('li')
      const btnClose = document.createElement('button')
      btnClose.className = 'close'
      btnClose.innerHTML = '&times;'
      tab.className = 'tab'
      tab.dataset.index = index
      if (index === 0) tab.classList.add('active')
      tab.append(tabTitle, btnClose)
      tabs.append(tab)


      const tabContent = document.createElement('li')
      if (index !== 0) tabContent.hidden = true
      tabContent.className = 'tab-content'
      tabContent.textContent = content
      tabsContent.append(tabContent)
    })
    const shadowTab = document.createElement('li')
    shadowTab.innerHTML = '➕'
    shadowTab.classList.add('tab', 'shadow')
    tabs.append(shadowTab)
  }

  colorize() {
    const step = 360 / this.data.length
    for (let i = 0; i < this.data.length; i++) {
      this.tabs.children[i].style.background = `hsl(${step * i}, 75%, 70%)`
      this.tabsContent.children[i].style.background = `hsl(${step * i}, 75%, 70%)`
    }
  }

  assignListeners() {
    this.tabs.onclick = (e) => {
      if (e.target === this.tabs) return
      if (e.target.matches('.shadow')) return this.addTab()
      if (e.target.matches('.close')) return this.removeTab(e.target.parentNode.dataset.index)

      this.tabs.querySelector('.active').classList.remove('active')
      this.tabsContent.querySelector('.tab-content:not([hidden])').hidden = true

      e.target.classList.add('active')
      this.tabsContent.children[e.target.dataset.index].hidden = false

    }
  }

  async addTab() {
    const tab = document.createElement('li')
    const tabContent = document.createElement('li')
    const btnClose = document.createElement('button')
    const index = this.data.length
    const tabTitle = 'tab' + (index + 1)
    const content = `${await this.generateContentGPT()}` //' here is bla bla bla...'

    this.data.push({ tabTitle, content })

    this.tabs.querySelector('.active')?.classList.remove('active')
    this.tabsContent.querySelector('.tab-content:not([hidden])')?.setAttribute('hidden', true)

    tab.className = 'tab active'
    btnClose.className = 'close'
    tabContent.className = 'tab-content'

    tab.dataset.index = index

    tabContent.innerHTML = content
    btnClose.innerHTML = '&times;'

    tab.append(tabTitle, btnClose)
    this.tabsContent.append(tabContent)
    this.tabs.lastChild.before(tab)

    this.colorize()
  }

  removeTab(index) {
    this.data.splice(index, 1)
    this.tabs.children[index].remove()
    this.tabsContent.children[index].remove()

    for (let i = index; i < this.data.length; i++) {
      this.tabs.children[i].dataset.index = i
    }

    if (!this.tabs.querySelector('.active') && this.data.length) {
      if (index == 0) index = 1
      this.tabs.children[index - 1].classList.add('active')
      this.tabsContent.children[index - 1].hidden = false
    }

  }

  generateContentGPT() {
    const url = 'https://api.openai.com/v1/chat/completions';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    const data = JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt('enter question for AI') }],
      temperature: 0.7
    });

    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: data
    })
      .then(response => response.json())
      .then(data => data.choices[0].message.content)

  }

  appendTo(parent) {
    parent.append(this.element)
  }
} 