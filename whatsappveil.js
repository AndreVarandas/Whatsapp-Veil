'use strict';
const debugMode = false;

/**
 * Array containing royal free flickr cat images
 * @type {Array}
 */
const cats = [
    "//c1.staticflickr.com/4/3894/14818650368_9147bee007_c.jpg",
    "//c1.staticflickr.com/9/8215/8333619957_e3b5aff6f0_z.jpg",
    "//c1.staticflickr.com/9/8065/8168159947_94b3a89a2a_z.jpg",
    "//c1.staticflickr.com/6/5512/14410052054_6296fd600f.jpg",
    "//c1.staticflickr.com/8/7073/7190755946_ea97e85765_z.jpg",
    "//c1.staticflickr.com/4/3946/14934292534_32b0302f2d.jpg",
    "//c1.staticflickr.com/6/5211/5513402618_3ce232e01a_z.jpg",
    "//c1.staticflickr.com/8/7496/16236770082_205f4e358f_z.jpg",
    "//c1.staticflickr.com/6/5141/5616147572_197d15f94d_z.jpg",
    "//c1.staticflickr.com/7/6092/6330704947_dd7e1b453c.jpg"
];

const getRandomCatImage = () => {
    return cats[Math.floor(Math.random() * (10 - 0) + 1)];
};

/**
 * Remove image opacity
 * @return [void]
 */
const clearImages = () => {
  let images = document.querySelectorAll('div.image-thumb') || 0;
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    if (image.classList.contains('cat'))
        continue;

    image.classList.add('cat');
    let coverElementHolder = document.createElement('div');
    coverElementHolder.className = 'cover-element--holder';
    coverElementHolder.style.backgroundImage = `url(${getRandomCatImage()})`;

    let coverElementText = document.createElement('span');
    coverElementText.textContent = "Click to show";
    coverElementText.className = 'cover-element--text';

    coverElementHolder.appendChild(coverElementText)
    image.appendChild(coverElementHolder);
  }
};

/**
 * Walk the DOM looking for key elements to add event listeners.
 * @return [void]
 */
const walk = () => {
  let paneChatElement = document.querySelector('div.pane-chat-msgs.pane-chat-body');
  if (paneChatElement) {
    clearImages();
    paneChatElement.addEventListener('scroll', clearImages, false);
  }
};

const walkContacts = () => {
  let contactsHolder = document.querySelector('.chatlist-panel-body');
  if (contactsHolder) {
    contactsHolder.addEventListener('click', walk, false);
  } else {
    window.setTimeout(walkContacts, 5000);
  }
};

/**
 * Attach base listener
 */
document.addEventListener('DOMContentLoaded', walkContacts, false);
