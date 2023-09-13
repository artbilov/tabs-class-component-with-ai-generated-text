1 || require('./app.js')
export { Tabs }

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
      this.tabs.querySelector('.active').classList.remove('active')
      e.target.classList.add('active')
      this.tabsContent.querySelector('.tab-content:not([hidden])').hidden = true
      this.tabsContent.children[e.target.dataset.index].hidden = false
    }
  }

  addTab() {
    const tab = document.createElement('li')
    this.tabs.querySelector('.active').classList.remove('active')
    tab.classList.add('tab', 'active')
    const tabContent = document.createElement('li')
    tabContent.textContent = ' here is bla bla bla...'
    this.tabsContent.querySelector('.tab-content:not([hidden])').hidden = true
    this.tabsContent.append(tabContent)
    const btnClose = document.createElement('button')
    btnClose.className = 'close'
    btnClose.innerHTML = '&times;'
    const tabTitle = 'tab' + (this.data.length + 1)
    tab.append(tabTitle, btnClose)
    this.tabs.lastChild.before(tab)
    // this.data.push({ tabTitle: `${tabTitle}`, content: `${tabContent}`})
    this.colorize()
  }

  appendTo(parent) {
    parent.append(this.element)
  }
} 