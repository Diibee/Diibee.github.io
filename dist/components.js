class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <div
        class="border-white border-4 p-4 h-fit w-fit flex flex-col font-cmd text-xl items-center bg-black text-white"
      >
        <p>+-------------------------+</p>
        <p>
          |&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="p-0.5 hover:bg-white hover:text-black" href="dist/shop.html"
            >shop</a
          >
          &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </p>
        <p>
          |&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="p-0.5 hover:bg-white hover:text-black" href="">gallery</a>
          &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </p>
        <p>
          |&emsp;&emsp;&emsp;&ensp;&nbsp;
          <a class="p-0.5 hover:bg-white hover:text-black" href="">shipping</a>
          &emsp;&emsp;&emsp;&ensp;&nbsp;|
        </p>
        <p>
          |&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="p-0.5 hover:bg-white hover:text-black" href="">contact</a>
          &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </p>
        <p>
          |&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
          <a class="p-0.5 hover:bg-white hover:text-black" href="">legal</a>
          &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|
        </p>
        <p>+-------------------------+</p>
        <div class="w-fit h-[20px] flex flex-row items-center">
          |&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
            class="h-fit w-6"
            href="https://www.instagram.com/_.dibe/#"
            ><img src="/dist/images/icons/instagram.png" alt="" /></a
          >&emsp;&emsp;<a class="h-fit w-6" href=""
            ><img src="/dist/images/icons/tiktok.png" alt="" /></a
          >&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </div>
        <p>+-------------------------+</p>
      </div>
    `;
    }
}

customElements.define('navbar-component', Navbar);
