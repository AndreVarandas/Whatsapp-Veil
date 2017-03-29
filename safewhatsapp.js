'use strict';

const debugMode = false;
console.info('Up and running mf!');

/**
 * Remove image opacity
 * @return [void]
 */
const clearImages = () => {
  let images = document.querySelectorAll('div.image-thumb') || 0;
  for (let i = 0; i < images.length; i++) {
    let coverElementHolder = document.createElement('div');
    coverElementHolder.className = 'cover-element--holder';
    let coverElementText = document.createElement('span');
    coverElementText.textContent = "NSFW";
    coverElementText.className = 'cover-element--text';
    let image = images[i];
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
