let footer = document.getElementById("footer");

const Footer = () => {
  return `
     <div class="lg:flex lg:px-[120px] py-[35px] dark:bg-background-300  w-full space-x-10 bg-background-400 mt-[250px] lg:mt-0 px-4 space-y-4 lg:space-x-0">
        <div class="lg:w-[25%]">
          <img loading="lazy" src="public/images/logo1.svg" class="dark:hidden block" />
          <img loading="lazy" src="public/images/logo2.svg" class="hidden dark:block" />
          <p class="text-[20px] text-slate-700 dark:text-slate-100">Seinjak sejejak setujuan</p>
        </div>
        <div class="lg:w-[25%]">
          <h1 class="bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-[30px] border-b-2 font-semibold border-blues-100">About Us</h1>
          <ul class="flex-col space-y-2 cursor-pointer pt-2">
            <li href="/" class="text-slate-800 dark:text-slate-100">Aprilia Janatu Marwa</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Muhammad Fitrian Shousyade</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Syaeful Annas</li>
          </ul>
        </div>
        <div class="lg:w-[25%]">
          <h1 class="bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-[30px] border-b-2 font-semibold border-blues-100">Project</h1>
          <ul class="flex-col space-y-2 cursor-pointer pt-2">
            <li href="/" class="text-slate-800 dark:text-slate-100">Web E-Commerce</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Web Portfolio</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Web Company Profile</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Apps & Games</li>
          </ul>
        </div>
        <div class="lg:w-[25%]">
          <h1 class="bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-[30px] border-b-2 font-semibold border-blues-100">Contact</h1>
          <ul class="flex-col space-y-2 pt-2 cursor-pointer">
            <li href="/" class="text-slate-800 dark:text-slate-100">Email</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Linked</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Instagram</li>
            <li href="/" class="text-slate-800 dark:text-slate-100">Facebook</li>
          </ul>
        </div>
      </div>
      <div class="dark:bg-background-300 w-full px-4 lg:px-[65px] bg-background-400">
        <div class="bg-blues-100 w-full h-[1px]"></div>
        <p class="text-slate-800 text-center pt-4 dark:text-slate-100">Copyright © 2023 Android Developer Community. All Rights Reserved</p>
        <p class="text-center pb-4 text-slate-800 dark:text-slate-100">
          <a href="public/src/pages/credits.html" class="underline">See all credits for this website.</a>
        </p>
      </div>
     `;
};
footer.insertAdjacentHTML("afterbegin", Footer());
