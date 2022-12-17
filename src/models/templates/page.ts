abstract class Page {
  protected main: HTMLElement;
  static TextObject = {};

  constructor(id: string) {
    this.main = document.querySelector('.content')!;
    if (this.main) {
      this.main.id = id;
    }
  }

  protected createPageTitle(title: string) {
    const mainTitle = document.createElement('h1');
    mainTitle.innerText = title;
    return mainTitle;
  }

  protected createPageBlock(tag: string, className: string, className2?: string) {
    const block = document.createElement(tag);
    block.classList.add(className);
    if (className2) {
      block.classList.add(className2);
    }
    return block;
  } 

  render() {
    return this.main;
  }
}

export default Page;